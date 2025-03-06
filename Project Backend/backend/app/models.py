from sqlalchemy import Column, Integer, String, Float, Boolean
from .database import Base

class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(String)
    price = Column(Float)
    img_path = Column(String)

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String(50))
    last_name = Column(String(50), nullable=True)
    email = Column(String(100), unique=True, index=True)
    phone = Column(String(20))
    hashed_password = Column(String)
    reset_code = Column(String(6))
    is_active = Column(Boolean, default=True)
    is_admin = Column(Boolean, default=False)