from sqlalchemy import Column, Integer, String, Boolean

from DataBase.core.db_connection import Base


class User(Base):
    __tablename__ = 'users'

    user_id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=True)
    email = Column(String, unique=True, nullable=True)
    login = Column(String, unique=True, nullable=False)
    password = Column(String, unique=False, nullable=False)
    is_active = Column(Boolean, nullable=False, default=True)
    is_blocked = Column(Boolean, nullable=False, default=False)
    moder = Column(Integer, nullable=True, default=None)

    def __repr__(self):
        return f"<User(user_id={self.id}, name='{self.name}', email='{self.email}', login='{self.login}', password='{self.password}', is_active='{self.is_active}', is_blocked='{self.is_blocked}')>"
