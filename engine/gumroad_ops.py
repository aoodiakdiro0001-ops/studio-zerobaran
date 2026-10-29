"""
Gumroad Autonomous Operations Module
Author: Baran Avisat / Studio-ZeroBaran
"""

import json
import urllib.request
import urllib.error
from engine.config import GUMROAD_TOKEN

def gumroad_request(endpoint, method="GET", payload=None):
    if not GUMROAD_TOKEN:
        raise ValueError("GUMROAD_ACCESS_TOKEN is missing in .env")
    url = f"https://api.gumroad.com/{endpoint.lstrip('/')}"
    headers = {
        "Authorization": f"Bearer {GUMROAD_TOKEN}",
        "User-Agent": "Studio-ZeroBaran-AI-Fleet"
    }
    data = None
    if payload is not None:
        data = json.dumps(payload).encode('utf-8')
        headers["Content-Type"] = "application/json"
    
    req = urllib.request.Request(url, data=data, headers=headers, method=method)
    try:
        with urllib.request.urlopen(req) as resp:
            return json.loads(resp.read().decode('utf-8'))
    except urllib.error.HTTPError as e:
        err_msg = e.read().decode('utf-8')
        raise RuntimeError(f"Gumroad API Error {e.code}: {err_msg}")

def publish_gumroad_product(name, description, price_usd, permalink=None, tags=None):
    payload = {
        "name": name,
        "description": description,
        "price": int(price_usd * 100),  # In cents
        "currency": "usd",
        "custom_permalink": permalink,
        "tags": tags or ["software", "ai", "tools"]
    }
    res = gumroad_request("/v2/products", method="POST", payload=payload)
    if res.get("success"):
        return res.get("product", {}).get("short_url")
    raise RuntimeError(f"Failed to publish product: {res.get('message')}")
