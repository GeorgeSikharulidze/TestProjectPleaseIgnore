# from fastapi import APIRouter, HTTPException
# from pydantic import BaseModel, ConfigDict  

# router = APIRouter()

# class SampleResponse(BaseModel):
#     id: int
#     name: str
#     description: str
#     image_id: str

#     model_config = ConfigDict(strict=True)

# products = {
#     1: {"id": 1, "name": "Test Item 1", "description": "123345", "image_id": "juicer"},
#     2: {"id": 2, "name": "Test Item 2", "description": "678910", "image_id": "mug_warmer"},
#     3: {"id": 3, "name": "Test Item 3", "description": "111213", "image_id": "toaster"},
# }

# @router.get("/product/{id}", response_model=SampleResponse)
# async def get_product(id:int):
#     # Fetch the product from the mock data
#     product = products.get(id)
#     if product is None:
#         return {"error": "Product not found"}
#     return product

# @router.post("/process")
# async def process_data(data: dict):
#     # Example using httpx
#     import httpx
#     try:
#         async with httpx.AsyncClient() as client:
#             response = await client.post("https://api.example.com/process", json=data)
#             return response.json()
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))