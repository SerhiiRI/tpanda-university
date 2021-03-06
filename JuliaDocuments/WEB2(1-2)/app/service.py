from app.repo import Repo


class Service(object):

    def __init__(self):
        self.repo = Repo()

    def validation(self, username, password):
        for obj in self.repo.list_users:
            if username == obj.login or password == obj.password:
                return obj
        return None

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

    def fields_edit_user(self, firstname, lastname, permission, age, password, login, nickname, user, id_user):
        if firstname != "" and lastname != "" and permission != "" and age != "" and password != "" and login != "":
            for obj in self.repo.list_users:
                if obj.login == user:
                    if nickname != obj.nickname and nickname != "":
                        return "You dont change nickname"
                    obj.firstname = firstname
                    obj.login = login
                    obj.lastname = lastname
                    obj.age = age
                    obj.password = password
                    obj.permission = permission
                    obj.id_user = id_user
                    self.repo.safe_users_to_db()
                    return "Data saved"
        else:
            return None



