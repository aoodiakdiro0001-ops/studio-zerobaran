"""
GitHub Autonomous Operations Module
Author: Baran Avisat / Studio-ZeroBaran
"""

import json
import urllib.request
import urllib.error
import subprocess
from pathlib import Path
from engine.config import GITHUB_TOKEN, GITHUB_USERNAME

def github_request(endpoint, method="GET", payload=None):
    if not GITHUB_TOKEN:
        raise ValueError("GITHUB_TOKEN is missing in .env")
    url = f"https://api.github.com/{endpoint.lstrip('/')}"
    headers = {
        "Authorization": f"token {GITHUB_TOKEN}",
        "Accept": "application/vnd.github.v3+json",
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
        raise RuntimeError(f"GitHub API Error {e.code}: {err_msg}")

def repo_exists(repo_name):
    try:
        res = github_request(f"/repos/{GITHUB_USERNAME}/{repo_name}")
        return res.get("id") is not None
    except RuntimeError as e:
        if "404" in str(e):
            return False
        raise

def create_repository(name, description="", private=False):
    if repo_exists(name):
        return f"https://github.com/{GITHUB_USERNAME}/{name}"
    payload = {
        "name": name,
        "description": description,
        "private": private,
        "auto_init": False
    }
    res = github_request("/user/repos", method="POST", payload=payload)
    return res.get("html_url")

def push_project_to_github(repo_name, project_dir):
    project_path = Path(project_dir).resolve()
    if not (project_path / ".git").exists():
        subprocess.run(["git", "init"], cwd=project_path, check=True)
    
    remote_url = f"https://{GITHUB_USERNAME}:{GITHUB_TOKEN}@github.com/{GITHUB_USERNAME}/{repo_name}.git"
    
    subprocess.run(["git", "remote", "remove", "origin"], cwd=project_path, stderr=subprocess.DEVNULL)
    subprocess.run(["git", "remote", "add", "origin", remote_url], cwd=project_path, check=True)
    subprocess.run(["git", "branch", "-M", "main"], cwd=project_path, check=True)
    subprocess.run(["git", "add", "."], cwd=project_path, check=True)
    
    # Commit if there are changes
    status = subprocess.run(["git", "status", "--porcelain"], cwd=project_path, capture_output=True, text=True)
    if status.stdout.strip():
        subprocess.run(["git", "commit", "-m", f"🚀 Autonomous release: {repo_name} by Baran Avisat Studio"], cwd=project_path, check=True)
    
    subprocess.run(["git", "push", "-u", "origin", "main"], cwd=project_path, check=True)
    return f"https://github.com/{GITHUB_USERNAME}/{repo_name}"
