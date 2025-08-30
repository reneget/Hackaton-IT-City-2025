from typing import List, Optional, Type

from sqlalchemy.orm import Session

from DataBase.models import User


class UserRepo:
    def __init__(self, db: Session):
        self.db = db

    def create_user(self, name: str, email: str, age: Optional[int] = None) -> User:
        user = User(name=name, email=email, age=age)
        self.db.add(user)
        self.db.commit()
        self.db.refresh(user)
        return user

    def get_user_by_id(self, user_id: int) -> Optional[User]:
        return self.db.query(User).filter(User.id == user_id).first()

    def get_all_users(self) -> list[Type[User]]:
        return self.db.query(User).all()

    def update_user(self, user_id: int, name: Optional[str] = None,
                    email: Optional[str] = None, age: Optional[int] = None) -> Optional[User]:
        user = self.get_user_by_id(user_id)
        if user:
            if name is not None:
                user.name = name
            if email is not None:
                user.email = email
            if age is not None:
                user.age = age
            self.db.commit()
            self.db.refresh(user)
        return user

    def delete_user(self, user_id: int) -> bool:
        user = self.get_user_by_id(user_id)
        if user:
            self.db.delete(user)
            self.db.commit()
            return True
        return False
