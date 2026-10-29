#!/usr/bin/env python3
"""
Gumroad Automated Publisher & Sync Tool
Author: Baran Avisat
Studio-ZeroBaran Arsenal Suite

This script uses the Gumroad REST API (https://api.gumroad.com/v2/products)
to automatically publish tools and products to https://baranavi.gumroad.com.
"""

import os
import sys
import json
import urllib.request
import urllib.parse
from pathlib import Path

# Load environment variables from .env
env_file = Path(__file__).resolve().parent.parent / '.env'
env_vars = {}
if env_file.exists():
    with open(env_file, 'r', encoding='utf-8') as f:
        for line in f:
            line = line.strip()
            if line and not line.startswith('#') and '=' in line:
                k, v = line.split('=', 1)
                env_vars[k.strip()] = v.strip()

GUMROAD_TOKEN = env_vars.get('GUMROAD_ACCESS_TOKEN', '')
STORE_URL = env_vars.get('GUMROAD_STORE_URL', 'https://baranavi.gumroad.com/')

PRODUCTS_CATALOG = [
    {
        "name": "PhantomLogic Recon Pro — Autonomous Attack Surface Engine",
        "description": "Enterprise-grade reconnaissance engine with automated subdomain enumeration, WAF posture mapping, and secret leak detection.\n\nAuthor: Baran Avisat\nSupport: baranavisat@gmail.com\nTelegram / WhatsApp: +90 531 326 3722",
        "price": 7900,  # in cents = $79.00
        "currency": "usd",
        "tags": ["recon", "cybersecurity", "bugbounty", "osint"],
    },
    {
        "name": "Elite Gungnir Auditor — Smart Contract Security Suite",
        "description": "Autonomous defensive code auditor for EVM smart contracts. Detects reentrancy, price oracle manipulation, and logic flaws.\n\nAuthor: Baran Avisat\nSupport: baranavisat@gmail.com",
        "price": 9900,  # $99.00
        "currency": "usd",
        "tags": ["blockchain", "solidity", "audit", "security"],
    },
    {
        "name": "Code-Shield ZeroBaran — Source Code & Secret Leak Redactor",
        "description": "Pre-commit and CI/CD secret redactor preventing credentials, private keys, and API tokens from ever leaking to public git.\n\nAuthor: Baran Avisat",
        "price": 4900,  # $49.00
        "currency": "usd",
        "tags": ["git", "devops", "security", "secrets"],
    },
    {
        "name": "Baran FatoraBox OS — ZATCA Phase-1 Arabic Invoicing Engine",
        "description": "Arabic-first self-hosted invoicing system with byte-exact ZATCA Phase-1 TLV QR codes. Single file, zero dependencies, offline PWA ready.\n\nAuthor: Baran Avisat",
        "price": 3900,  # $39.00
        "currency": "usd",
        "tags": ["zatca", "invoicing", "arabic", "pwa"],
    },
    {
        "name": "BaranFlash MoE Engine — 1M Context Local AI",
        "description": "Sparse MoE-style local AI inference engine with 1M-context memory, asymmetric prefill/decode, and low RAM consumption.\n\nAuthor: Baran Avisat",
        "price": 12000,  # $120.00
        "currency": "usd",
        "tags": ["ai", "moe", "local-llm", "python"],
    },
    {
        "name": "Baran Security Arsenal Full Suite (67+ Tools Pack)",
        "description": "The complete arsenal of 67+ tools, scripts, and autonomous scanners for security research and bug bounty hunters.\n\nAuthor: Baran Avisat",
        "price": 19900,  # $199.00
        "currency": "usd",
        "tags": ["arsenal", "security", "pentest", "bugbounty"],
    }
]

def publish_product(prod, token):
    url = "https://api.gumroad.com/v2/products"
    data = {
        "access_token": token,
        "name": prod["name"],
        "description": prod["description"],
        "price": str(prod["price"]),
        "currency": prod["currency"],
        "tags": ",".join(prod.get("tags", [])),
    }
    encoded = urllib.parse.urlencode(data).encode("utf-8")
    req = urllib.request.Request(url, data=encoded, method="POST")
    try:
        with urllib.request.urlopen(req) as resp:
            res_data = json.loads(resp.read().decode("utf-8"))
            if res_data.get("success"):
                p = res_data.get("product", {})
                print(f"✅ Published: {p.get('name')} -> {p.get('short_url')}")
                return True
            else:
                print(f"❌ Failed: {res_data.get('message')}")
                return False
    except urllib.error.HTTPError as e:
        err = e.read().decode("utf-8")
        print(f"❌ HTTP Error {e.code}: {err}")
        return False

def main():
    print("=" * 60)
    print("🚀 Gumroad Tool Publisher — Studio-ZeroBaran")
    print(f"Target Store: {STORE_URL}")
    print("=" * 60)

    if not GUMROAD_TOKEN:
        print("\n⚠️ GUMROAD_ACCESS_TOKEN is not set in .env")
        print("\n📋 للبدء بنشر جميع المنتجات تلقائياً على متجرك في Gumroad:")
        print("1. سجّل الدخول إلى حسابك في Gumroad (https://baranavi.gumroad.com)")
        print("2. اذهب إلى الإعدادات المتقدمة: https://app.gumroad.com/settings/advanced")
        print("3. تحت قسم 'Applications' أو 'Developer API'، أنشئ Access Token جديد.")
        print("4. أضف التوكن إلى ملف .env بالشكل التالي:")
        print("   GUMROAD_ACCESS_TOKEN=your_token_here")
        print("5. أعد تشغيل هذا السكربت: python3 scripts/gumroad_publisher.py\n")
        print("✅ سنقوم فوراً برفع كافة الأدوات وتوليد صفحات البيع بمتجرك مباشرة!")
        return

    print(f"\nPublishing {len(PRODUCTS_CATALOG)} products...")
    for prod in PRODUCTS_CATALOG:
        publish_product(prod, GUMROAD_TOKEN)

if __name__ == "__main__":
    main()
