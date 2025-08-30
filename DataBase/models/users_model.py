from sqlalchemy import Column, Integer, String, Boolean

from DataBase.core.db_connection import Base


class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=True)
    email = Column(String, unique=True, nullable=True)
    login = Column(String, unique=True, nullable=False)
    password = Column(String, unique=False, nullable=False)
    is_active = Column(Boolean, nullable=False)
    is_blocked = Column(Boolean, nullable=False)

    def __repr__(self):
        return f"<User(id={self.id}, name='{self.name}', email='{self.email}', login='{self.login}', password='{self.password}', is_active='{self.is_active}', is_blocked='{self.is_blocked}')>"
