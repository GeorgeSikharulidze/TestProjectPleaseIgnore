from pydantic import BaseModel

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