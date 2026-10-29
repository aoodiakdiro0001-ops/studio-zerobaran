#!/usr/bin/env python3
"""
Gumroad Automated Publisher & Sync Tool
Author: Baran Avisat
Studio-ZeroBaran Arsenal Suite

This script uses the Gumroad REST API to automatically sync and publish
all tools from the repository to https://baranavi.gumroad.com.
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
        "name": "Studio-ZeroBaran — منظومة الإنتاج البرمجي والأتمتة الذاتية",
        "permalink": "studio-zerobaran",
        "description": "استوديو الإنتاج البرمجي والمرئي والترسانة السيبرانية اللامركزية — نبتكر مشاريع عظيمة وأكثر من 1,000,000 منتج وترخيص رقمي بدعم الدفع بالبيتكوين والتحويل البنكي.\n\nالمستودع الرسمي على GitHub: https://github.com/aoodiakdiro0001-ops/studio-zerobaran\nالدعم الفني المباشر: baranavisat@gmail.com | واتساب: +90 531 326 3722",
        "price": 4900,
        "tags": ["studio", "ai", "automation", "zerobaran"]
    },
    {
        "name": "Baran-Security-Arsenal — الحزمة الأمنية الكاملة لأدوات Bug Bounty",
        "permalink": "baran-security-arsenal-suite",
        "description": "الحزمة الأمنية الشاملة الكاملة: تضم أكثر من 67 أداة وسكربت للاستطلاع السيبراني، وفحص الثغرات، وأتمتة البحث عن مكافآت الثغرات.\n\nالمطور: Baran Avisat\nالدعم: baranavisat@gmail.com | +90 531 326 3722",
        "price": 19900,
        "tags": ["security", "bugbounty", "recon", "arsenal"]
    },
    {
        "name": "BaranFlash MoE Engine — محرك الذكاء الاصطناعي المحلي (1M Context)",
        "permalink": "baranflash-moe-engine",
        "description": "محرك ذكاء اصطناعي محلي خفيف يعمل بكفاءة بسياق ذاكرة ضخم يصل إلى مليون رمز مع استهلاك فائق الانخفاض.\n\nالمطور: Baran Avisat\nالدعم: baranavisat@gmail.com",
        "price": 12000,
        "tags": ["ai", "moe", "local-llm", "baranflash"]
    },
    {
        "name": "Baran FatoraBox OS — نظام الفوترة الإلكترونية الذاتي (ZATCA)",
        "permalink": "baran-fatorabox-os",
        "description": "نظام الفوترة الإلكترونية السحابي والذاتي المتوافق 100% مع معايير هيئة الزكاة والضريبة (ZATCA)، ملف واحد بدون تبعيات.\n\nالمطور: Baran Avisat",
        "price": 3900,
        "tags": ["zatca", "invoicing", "arabic", "pwa"]
    },
    {
        "name": "Baran PromptOS Suite — مكتبة هندسة الأوامر والبرومبتات الخارقة",
        "permalink": "baran-prompt-os-suite",
        "description": "مكتبة هندسة الأوامر والبرومبتات الخارقة الأكثر شمولاً، تحتوي على أكثر من 60 نموذج هندسي متقدم عبر 6 مسارات احترافية.\n\nالمطور: Baran Avisat",
        "price": 2900,
        "tags": ["prompt-engineering", "ai", "enterprise", "prompts"]
    }
]

def get_existing_products(token):
    existing = {}
    url = f"https://api.gumroad.com/v2/products?access_token={token}"
    while url:
        try:
            req = urllib.request.Request(url)
            with urllib.request.urlopen(req) as resp:
                data = json.loads(resp.read().decode('utf-8'))
                for p in data.get('products', []):
                    permalink = p.get('custom_permalink') or p.get('short_url', '').split('/')[-1]
                    existing[permalink] = p
                    existing[p.get('name')] = p
                next_url = data.get('next_page_url')
                if next_url:
                    url = f"https://api.gumroad.com{next_url}&access_token={token}"
                else:
                    url = None
        except Exception as e:
            print(f"Error fetching existing products: {e}")
            break
    return existing

def publish_product(prod, token):
    url = "https://api.gumroad.com/v2/products"
    headers = {
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json"
    }
    payload = {
        "name": prod["name"],
        "price": prod["price"],
        "description": prod["description"],
        "custom_permalink": prod.get("permalink"),
        "tags": prod.get("tags", [])
    }
    data = json.dumps(payload).encode('utf-8')
    req = urllib.request.Request(url, data=data, headers=headers, method="POST")
    try:
        with urllib.request.urlopen(req) as resp:
            res_data = json.loads(resp.read().decode('utf-8'))
            if res_data.get("success"):
                p = res_data.get("product", {})
                print(f"✅ تم النشر بنجاح: {p.get('name')}")
                print(f"   الرابط المباشر: {p.get('short_url')}")
                return p
            else:
                print(f"❌ خطأ: {res_data.get('message')}")
                return None
    except urllib.error.HTTPError as e:
        err = e.read().decode('utf-8')
        print(f"❌ خطأ HTTP {e.code}: {err}")
        return None

def main():
    print("=" * 65)
    print("🚀 Gumroad Automated Publisher — Baran Avisat Arsenal")
    print(f" المتجر المستهدف: {STORE_URL}")
    print("=" * 65)

    if not GUMROAD_TOKEN:
        print("\n❌ GUMROAD_ACCESS_TOKEN غير موجود في ملف .env")
        return

    print("\n🔍 جاري التحقق من المنتجات الحالية على المتجر...")
    existing = get_existing_products(GUMROAD_TOKEN)
    print(f"ℹ️ عدد المنتجات الموجودة حالياً: {len(existing)}")

    print("\n🚀 جاري فحص ومزامنة الأدوات والمنتجات الجديدة...")
    for prod in PRODUCTS_CATALOG:
        perm = prod.get("permalink")
        name = prod.get("name")
        if perm in existing or name in existing:
            print(f"⚡ المنتج موجود بالفعل: {name} (تخطي)")
            continue
        print(f"📦 جاري نشر: {name}...")
        publish_product(prod, GUMROAD_TOKEN)

    print("\n✅ تمت المزامنة بنجاح!")

if __name__ == "__main__":
    main()
