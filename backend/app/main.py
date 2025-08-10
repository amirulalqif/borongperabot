from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional


app = FastAPI(title="Borong Perabot API", version="0.1.0")

# CORS for local dev and potential prod domains
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "*",  # relax for MVP; tighten in production
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Product(BaseModel):
    id: str
    name: str
    price: float
    currency: str = "MYR"
    image_url: Optional[str] = None
    category: Optional[str] = None
    featured: bool = False


# In-memory mock data for MVP
PRODUCTS: List[Product] = [
    Product(
        id="1",
        name="Sofa Fabrik Lux",
        price=1299.0,
        image_url="/images/sofa-fabrik-lux.jpg",
        category="Sofa",
        featured=True,
    ),
    Product(
        id="2",
        name="Meja Makan Kayu Padu",
        price=899.0,
        image_url="/images/meja-makan-kayu.jpg",
        category="Meja Makan",
        featured=True,
    ),
    Product(
        id="3",
        name="Kabinet TV Minimalis",
        price=499.0,
        image_url="/images/kabinet-tv-minimalis.jpg",
        category="Kabinet",
        featured=False,
    ),
]


@app.get("/products", response_model=List[Product])
def list_products() -> List[Product]:
    return PRODUCTS


@app.get("/")
def root():
    return {"status": "ok", "service": "borong-perabot-api"}


