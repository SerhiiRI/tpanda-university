import os

from app.entities.permission import Permission
from app.entities.user import User


class Repo(object):
    list_users = []
    data_users = {'length': '', 'entities': []}
    list_permissions = []
    data_permissions = {'length': '', 'entities': []}

    def __init__(self):
        self.open_db_users_json()
        self.open_db_per_json()

    def add_user(self, login, password, nickname, firstname, lastname, id_user, age, permission):
        self.list_users.append(User(login, password, nickname, firstname, lastname, id_user, age, permission))

    def add_permisson(self, name, user):
        self.list_permissions.append(Permission(name, user))

    def __us_obj_to_dict(self):
        self.data_users['length'] = len(self.list_users)
        self.data_users['entities'] = []
        for obj in self.list_users:
            self.data_users['entities'].append(vars(obj))

    def __p_obj_to_dict(self):
        self.data_permissions['length'] = len(self.list_permissions)
        self.data_permissions['entities'] = []
        for obj in self.list_permissions:
            self.data_permissions['entities'].append(vars(obj))

    def __dict_to_users(self, data):
        self.list_users = []
        for p in data['entities']:
            self.add_user(p['login'], p['password'], p['nickname'], p['firstname'], p['lastname'], p['id_user'],
                          p['age'], p['permission'])

    def __dict_to_p(self, data):
        self.list_permissions = []
        for p in data['entities']:
            self.add_permisson(p['name'], p['user'])

    def open_db_users_json(self):
        process1 = os.popen('python db.py users.json --open-file')
        pre = process1.read()
        process1.close()
        self.__dict_to_users(eval(pre))
        return self.list_users

    def open_db_per_json(self):
        process1 = os.popen('python db.py permissions.json --open-file')
        pre = process1.read()
        process1.close()
        self.__dict_to_p(eval(pre))
        return self.list_permissions

    def get_len_entities(self, file_name):
        process = os.popen('python db.py ' + file_name + '--open-file')
        pre = process.read()
        process.close()
        return pre

    def safe_users_to_db(self):
        self.__us_obj_to_dict()
        process = os.popen('python db.py users.json --save-w  ' + "\"" + str(self.data_users) + "\"")
        preprocessed = process.read()
        process.close()
        print(preprocessed)

    def return_num_users(self, num):
        process = os.popen('python db.py users.json --return ' + num)
        pre = process.read()
        process.close()
        print(pre)


