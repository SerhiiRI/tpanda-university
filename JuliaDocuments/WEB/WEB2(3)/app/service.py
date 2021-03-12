from repo import Repo


class Service(object):

    def __init__(self):
        self.repo = Repo()

    def validation(self, username, password):
        for obj in self.repo.list_users:
            if username == obj.login or password == obj.password:
                return obj
        return None

    def find_user_status(self, user):
        for obj in self.repo.list_permissions:
            if user == obj.name:
                return obj.user
        return None

    def users_logins(self):
        list_logins = []
        for obj in self.repo.list_users:
            list_logins.append(obj.login)
        return list_logins

    def find_user(self, login):
        usernow = object
        for l in self.repo.list_users:
            if l.login == login:
                usernow = l
        return usernow

    def delete_users(self, users):
        users = users.split(',')
        for obj in self.repo.list_users:
            if obj.login in users:
                self.repo.list_users.remove(obj)
        self.repo.safe_users_to_db()
        return 'true'

    def checked_users(self, users, col):
        list_logins = users.split(',')
        list_col = col.split(',')
        new_list = []
        for obj in self.repo.list_users:
            if obj.login in list_logins:
                temp_list = {}
                for l in list_col:
                    temp_list.update({l: obj.__dict__[l]})
                new_list.append(temp_list)
        return new_list

    def fields_create_user(self, firstname, lastname, permission, age, password, login, nickname, id_user):
        if firstname != "" and lastname != "" and permission != "" and age != "" and password != "" and login != "" and nickname != "":
            if permission != "admin" and permission != "user" and permission != "servicer":
                return "Permission invalid"
            else:
                self.repo.add_user(login, password, nickname, firstname, lastname, id_user, age, permission)
                self.repo.safe_users_to_db()
                return "Data saved"
        else:
            return None

    def fields_edit_user(self, firstname, lastname, permission, age, password, login, nickname, id_user) -> object:
        if firstname != "" and lastname != "" and permission != "" and age != "" and password != "" and login != "":
            for obj in self.repo.list_users:
                if obj.login == login:
                    if nickname != obj.nickname and nickname != "":
                        return "You dont change nickname"
                    if login != obj.login and login != "":
                        return "You dont change login"
                    obj.firstname = firstname
                    obj.lastname = lastname
                    obj.age = age
                    obj.password = password
                    obj.permission = permission
                    obj.id_user = id_user
                    self.repo.safe_users_to_db()
                    return "Data saved"
        else:
            return None
