from flask import render_template, session
from flask import request, redirect, url_for

from app import app
from app.repo import Repo
from app.service import Service

app.secret_key = "abc"

auth = False
per = ""
p = ""

repo = Repo()
service = Service()


@app.route('/index')
def index():
    global per
    global p
    p = session['user']['permission']
    for obj in repo.list_permissions:
        if obj.name == session['user']['permission']:
            per = obj.user
    if auth is None:
        return redirect('http://127.0.0.1:5000')
    return render_template('index.html', title='Home', user=session['user'], list_u=repo.list_users, per=per, p=p)


@app.route('/', methods=['GET', 'POST'])
def login():
    error = None
    global auth
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        if service.validation(username, password) is None:
            error = 'Invalid. Please try again.'
            auth = None
        else:
            auth = True
            session['user'] = service.validation(username, password).__dict__
            return redirect(url_for('index'))
    return render_template('login.html', error=error)


@app.route('/index', methods=['GET', 'POST'])
def submit():
    global auth
    global per
    global p
    repo.open_db_users_json()
    if request.method == "POST":
        list_obj = []
        list_login = (request.form.getlist('box'))
        for obj in repo.list_users:
            if obj.login in list_login:
                list_obj.append(obj)
        if request.form.get("show"):
            return render_template('index.html', title='Home', user=session['user'], list_u=repo.list_users,
                                   new_list=list_obj, per=per, p=p)
        elif request.form.get("logout"):
            auth = None
            return redirect('http://127.0.0.1:5000')
        elif request.form.get("delete"):
            for obj in list_obj:
                repo.list_users.remove(obj)
            repo.safe_users_to_db()
            return render_template('index.html', title='Home', user=session['user'], list_u=repo.list_users,
                                   per=per, p=p)
        elif request.form.get("create"):
            return redirect(url_for('edit'))


@app.route('/edit', methods=['GET', 'POST'])
def edit():
    user = request.args.get('user')
    usernow = object
    for l in repo.list_users:
        if l.login == user:
            usernow = l

    nickname = request.form.get('nickname')
    firstname = request.form.get('firstname')
    lastname = request.form.get('lastname')
    permission = request.form.get('permission')
    age = request.form.get('age')
    login = request.form.get('login')
    password = request.form.get('password')
    id_user = request.form.get('id_user')

    if user is None:
        if request.form.get('save'):
            fields_create_user = service.fields_create_user(firstname, lastname, permission, age, password, login,
                                                            nickname, id_user)
            if fields_create_user is not None:
                return render_template('edit.html', invalid=fields_create_user, usernow=usernow)
            else:
                return render_template('edit.html', invalid='Invalid empty fields', usernow=usernow)

    if request.form.get('save'):
        fields_edit_user = service.fields_edit_user(firstname, lastname, permission, age, password, login,
                                                    nickname, user, id_user)
        if fields_edit_user is not None:
            return render_template('edit.html', invalid=fields_edit_user, usernow=usernow)
        else:
            return render_template('edit.html', invalid='Invalid empty fields', usernow=usernow)

    return render_template('edit.html', invalid='', usernow=usernow)
