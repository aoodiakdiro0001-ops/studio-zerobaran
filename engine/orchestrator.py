"""
Studio-ZeroBaran AI Fleet Orchestrator
Master command module coordinating project design, GitHub release, and Gumroad publishing.
"""

from pathlib import Path
from engine.github_ops import create_repository, push_project_to_github
from engine.gumroad_ops import publish_gumroad_product
from engine.config import GITHUB_USERNAME, GUMROAD_STORE_URL

class AIFleetOrchestrator:
    def __init__(self):
        self.username = GITHUB_USERNAME
        self.store_url = GUMROAD_STORE_URL

    def release_project(self, project_dir, repo_name, description, price_usd, permalink=None, tags=None):
        """
        Executes end-to-end release:
        1. Verifies local directory.
        2. Creates GitHub repo under user account.
        3. Pushes source files to GitHub main branch.
        4. Publishes product on Gumroad store.
        """
        print(f"🚀 [AI Fleet] Starting autonomous release for: {repo_name}...")
        
        # 1. Create GitHub Repo
        print(f"🐙 [AI Fleet] Provisioning GitHub repository '{repo_name}'...")
        repo_url = create_repository(repo_name, description=description, private=False)
        print(f"✅ [AI Fleet] GitHub Repository ready: {repo_url}")

        # 2. Push Code
        print(f"📦 [AI Fleet] Pushing codebase from {project_dir} to GitHub main branch...")
        push_project_to_github(repo_name, project_dir)
        print(f"✅ [AI Fleet] Code successfully pushed to {repo_url}!")

        # 3. Publish to Gumroad
        print(f"🛒 [AI Fleet] Publishing digital product to Gumroad store...")
        gumroad_desc = f"{description}\n\nGitHub Source: {repo_url}\nOfficial Support: baranavisat@gmail.com\nWhatsApp: +90 531 326 3722"
        gumroad_url = publish_gumroad_product(
            name=repo_name,
            description=gumroad_desc,
            price_usd=price_usd,
            permalink=permalink,
            tags=tags or ["security", "software", "ai", "zerobaran"]
        )
        print(f"✅ [AI Fleet] Product published on Gumroad: {gumroad_url}")

        return {
            "status": "success",
            "repo_url": repo_url,
            "gumroad_url": gumroad_url
        }

fleet = AIFleetOrchestrator()
