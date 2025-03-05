from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, ConfigDict  

router = APIRouter()

class SampleResponse(BaseModel):
    id: int
    name: str
    value: float
    
    model_config = ConfigDict(strict=True)

@router.get("/test", response_model=SampleResponse)
async def test_endpoint():
    return {
        "id": 1,
        "name": "Test Item",
        "value": 3.14
    }

@router.post("/process")
async def process_data(data: dict):
    # Example using httpx
    import httpx
    try:
        async with httpx.AsyncClient() as client:
            response = await client.post("https://api.example.com/process", json=data)
            return response.json()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))