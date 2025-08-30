from typing import Optional, Type

from sqlalchemy.orm import Session

from DataBase.models import User


class UserRepo:
    def __init__(self, db: Session):
        self.db = db

    def create_user(self, login: str, password: str):
        user = User(login=login, password=password)
        self.db.add(user)
        self.db.commit()
        self.db.refresh(user)

    def get_user_by_id(self, user_id: int) -> Optional[User]:
        return self.db.query(User).filter(User.id == user_id).first()

    def get_all_users(self) -> list[Type[User]]:
        return self.db.query(User).all()

    def update_user(self,
                    user_id: int,
                    name: Optional[str] = None,
                    email: Optional[str] = None,
                    age: Optional[int] = None,
                    login: Optional[str] = None,
                    password: Optional[str] = None,
                    is_active: Optional[bool] = None,
                    is_blocked: Optional[bool] = None
                    ) -> None:
        user = self.get_user_by_id(user_id)
        if user:
            if name:
                user.name = name
            if email:
                user.email = email
            if age:
                user.age = age
            if login:
                user.login = login
            if password:
                user.password = password
            if is_active:
                user.is_active = is_active
            if is_blocked:
                user.is_blocked = is_blocked
            self.db.commit()
            self.db.refresh(user)

    def delete_user(self, user_id: int) -> None:
        user = self.get_user_by_id(user_id)
        if user:
            self.db.delete(user)
            self.db.commit()
