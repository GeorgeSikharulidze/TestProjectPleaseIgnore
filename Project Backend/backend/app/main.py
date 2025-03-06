from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os
from app.database import engine, SessionLocal
from app import models

# Initialize database
models.Base.metadata.create_all(bind=engine)

load_dotenv()

app = FastAPI()

# CORS Configuration
origins = os.getenv("ALLOW_ORIGINS", "").split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Use the configured origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Welcome to the FastAPI backend!"}

# Include routers
from app.routers import api, products, users
# app.include_router(api.router, prefix="/api")
app.include_router(products.router, prefix="/products")
app.include_router(users.router)

# Dependency (keep this if needed elsewhere, otherwise remove)
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()