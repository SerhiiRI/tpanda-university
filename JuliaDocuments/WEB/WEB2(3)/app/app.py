from flask import (Flask, request, render_template, session, jsonify)

from repo import Repo
from service import Service

app = Flask(__name__)
app.secret_key = "abc"

per = ""
p = ""

repo = Repo()
service = Service()


@app.route('/', methods=['GET', 'POST'])
def login():
    return render_template("login.html")


@app.route('/index', methods=['GET', 'POST'])
def index():
    login = request.args.get('login')
    service.find_user_status(login)
    return render_template("index.html", name=login)


@app.route('/edit', methods=['GET', 'POST'])
def edit():
    login = request.args.get('user')
    return render_template("edit.html", usernow=service.find_user(login))


# service requists

@app.route('/js_login', methods=['GET'])
def js_login():
    login = request.args.get('login')
    password = request.args.get('password')
    if service.validation(login, password) is None:
        return 'false'
    else:
        session['user'] = service.validation(login, password).__dict__
        return 'true'


@app.route('/edit_user', methods=['GET'])
def edit_user():
    fields_edit_user = service.fields_edit_user(request.args.get('firstname'), request.args.get('lastname'),
                                                request.args.get('permission'), request.args.get('age'),
                                                request.args.get('password'), request.args.get('login'),
                                                request.args.get('nickname'), request.args.get('id_user'))
    if fields_edit_user is not None:
        return fields_edit_user
    else:
        return 'Invalid empty fields'


@app.route('/create_user', methods=['GET'])
def create_user():
    fields_create_user = service.fields_create_user(request.args.get('login'), request.args.get('lastname'),
                                                    request.args.get('permission'), request.args.get('age'),
                                                    request.args.get('password'), request.args.get('login'),
                                                    request.args.get('nickname'), request.args.get('id_user'))
    if fields_create_user is not None:
        return fields_create_user
    else:
        return 'Invalid empty fields'


@app.route('/checked_users', methods=['GET'])
def checked_users():
    users = request.args.get('users')
    col = request.args.get('col')
    return jsonify(service.checked_users(users, col))


@app.route('/checked_users_delete', methods=['GET'])
def checked_users_delete():
    users = request.args.get('users')
    return service.delete_users(users)


@app.route('/session_user')
def session_user():
    return service.find_user_status(session['user']['permission'])


@app.route('/users_logins')
def users_logins():
    return jsonify(service.users_logins())


if __name__ == "__main__":
    app.run(debug=True)
