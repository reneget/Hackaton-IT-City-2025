from typing import Optional, Type

from sqlalchemy.orm import Session

from DataBase.models import Admin, User


class AdminRepo:
    def __init__(self, db: Session):
        self.db = db

    def add_admin(self, user_id: int) -> None:
        user = self.db.query(User).filter(User.user_id == user_id).first()
        admin = self.db.query(Admin).filter(Admin.user_id == user_id).first()
        if user and not admin:
            self.db.add(Admin(user_id=user_id))
            self.db.commit()
            self.db.refresh(user)

    def is_admin(self, user_id: int) -> bool:
        return self.db.query(Admin).filter(Admin.user_id == user_id).first() is not None

    def get_all_admins(self) -> list[Type[Admin]]:
        return self.db.query(Admin).all()

    def delete_admin(self, user_id: int) -> None:
        admin = self.db.query(Admin).filter(Admin.user_id == user_id).first()
        if admin:
            self.db.delete(admin)
            self.db.commit()
