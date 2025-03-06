from pydantic import BaseModel, EmailStr, Field
from typing import Optional

# Product
class ProductBase(BaseModel):
    name: str
    description: str | None = None
    price: float
    img_path: str

class ProductCreate(ProductBase):
    pass

class ProductUpdate(BaseModel):
    name: str | None = None
    description: str | None = None
    price: float | None = None
    img_path: str | None = None

class Product(ProductBase):
    id: int

    class Config:
        from_attributes = True

# User Schemas
class UserBase(BaseModel):
    email: EmailStr
    phone: str = Field(..., min_length=5, max_length=20)
    first_name: str = Field(..., min_length=1, max_length=50)
    last_name: Optional[str] = Field(None, max_length=50)

class UserCreate(UserBase):
    password: str = Field(..., min_length=8)

class UserUpdate(BaseModel):
    first_name: Optional[str] = Field(None, min_length=1, max_length=50)
    last_name: Optional[str] = Field(None, max_length=50)
    phone: Optional[str] = Field(None, min_length=5, max_length=20)
    password: Optional[str] = Field(None, min_length=8)
    reset_code: Optional[str] = Field(None, min_length=6, max_length=6)
    is_active: Optional[bool] = None
    is_admin: Optional[bool] = None

class UserResponse(UserBase):
    id: int
    is_active: bool
    is_admin: bool

    class Config:
        from_attributes = True