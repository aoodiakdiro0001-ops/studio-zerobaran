"""
Studio-ZeroBaran Autonomous Engine Configuration
Loads and validates credentials from .env
"""

import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
ENV_PATH = BASE_DIR / '.env'

def load_env():
    env = {}
    if ENV_PATH.exists():
        with open(ENV_PATH, 'r', encoding='utf-8') as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith('#') and '=' in line:
                    k, v = line.split('=', 1)
                    env[k.strip()] = v.strip()
    return env

ENV = load_env()

# Core Credentials
GITHUB_TOKEN = ENV.get('GITHUB_TOKEN', '')
GITHUB_USERNAME = ENV.get('GITHUB_USERNAME', 'aoodiakdiro0001-ops')
GUMROAD_TOKEN = ENV.get('GUMROAD_ACCESS_TOKEN', '')
GUMROAD_STORE_URL = ENV.get('GUMROAD_STORE_URL', 'https://baranavi.gumroad.com/')

# Cryptographic Wallets
EVM_WALLET = ENV.get('EVM_WALLET_ADDRESS', '')
SOLANA_WALLET = ENV.get('SOLANA_WALLET_ADDRESS', '')
BITCOIN_WALLET = ENV.get('BITCOIN_WALLET_ADDRESS', '')
USDT_TRC20_WALLET = ENV.get('USDT_TRC20_WALLET_ADDRESS', '')

# Contacts
CONTACT_EMAIL = ENV.get('CONTACT_EMAIL', 'baranavisat@gmail.com')
CONTACT_PHONE = ENV.get('CONTACT_PHONE', '+905313263722')
MODE = ENV.get('MODE', 'live')
