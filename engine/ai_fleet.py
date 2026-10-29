"""
Studio-ZeroBaran Multi-Model AI Fleet Engine
Orchestrates free open-source and free-tier coding models:
- OpenRouter (DeepSeek R1 free, Qwen 2.5 Coder free, Llama 3.3 free)
- Groq (Llama 3.3 70B, Qwen 2.5 Coder free)
- Google AI Studio (Gemini 2.0 Flash free tier)
- Hugging Face Inference API (FLUX, Code Models)
- Local OpenCode / Ollama nodes
"""

import json
import urllib.request
import urllib.error
from engine.config import ENV

class ModelProvider:
    def __init__(self, name, base_url, api_key):
        self.name = name
        self.base_url = base_url.rstrip('/')
        self.api_key = api_key

    def chat_completion(self, model, messages, temperature=0.7, max_tokens=4096):
        if not self.api_key:
            raise ValueError(f"API key for {self.name} is missing in .env")
        
        url = f"{self.base_url}/chat/completions"
        headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json"
        }
        if "openrouter" in self.base_url:
            headers["HTTP-Referer"] = "https://baranavi.gumroad.com"
            headers["X-Title"] = "Studio-ZeroBaran AI Fleet"

        payload = {
            "model": model,
            "messages": messages,
            "temperature": temperature,
            "max_tokens": max_tokens
        }
        data = json.dumps(payload).encode('utf-8')
        req = urllib.request.Request(url, data=data, headers=headers, method="POST")
        try:
            with urllib.request.urlopen(req) as resp:
                res = json.loads(resp.read().decode('utf-8'))
                choices = res.get('choices', [])
                if choices:
                    return choices[0].get('message', {}).get('content', '')
                return ''
        except urllib.error.HTTPError as e:
            err = e.read().decode('utf-8')
            raise RuntimeError(f"[{self.name}] Error {e.code}: {err}")


class AIFleet:
    """Master AI Fleet combining all specialized open models."""

    FREE_MODELS = {
        # OpenRouter 100% Free Tiers
        "architect": "deepseek/deepseek-r1:free",
        "coder": "qwen/qwen-2.5-coder-32b-instruct:free",
        "fast_coder": "meta-llama/llama-3.3-70b-instruct:free",
        "vision_reasoning": "google/gemini-2.0-flash-exp:free",
        
        # Groq Free Tiers
        "groq_coder": "llama-3.3-70b-versatile",
        "groq_fast": "llama-3.1-8b-instant"
    }

    def __init__(self):
        self.openrouter_key = ENV.get('OPENROUTER_API_KEY', '')
        self.groq_key = ENV.get('GROQ_API_KEY', '')
        self.gemini_key = ENV.get('GEMINI_API_KEY', '')
        self.hf_token = ENV.get('HUGGINGFACE_TOKEN', '')

        # Setup Providers
        self.openrouter = ModelProvider("OpenRouter", "https://openrouter.ai/api/v1", self.openrouter_key)
        self.groq = ModelProvider("Groq", "https://api.groq.com/openai/v1", self.groq_key)

    def plan_architecture(self, project_idea: str) -> str:
        """Role: Lead Software Architect (DeepSeek-R1 / Gemini)"""
        prompt = (
            "You are the Lead Software Architect at Studio-ZeroBaran. "
            "Design an extraordinary, complete, production-ready software project specification "
            f"for this idea: '{project_idea}'.\n"
            "Include: System architecture, file structure, database schema, security hardening, "
            "and feature checklist."
        )
        messages = [{"role": "user", "content": prompt}]
        return self._dispatch(["architect", "fast_coder"], messages)

    def generate_code(self, module_name: str, spec: str) -> str:
        """Role: Expert Polyglot Developer (Qwen 2.5 Coder 32B)"""
        prompt = (
            f"Write the complete, bug-free, production-ready implementation for module '{module_name}'.\n"
            f"Specification:\n{spec}\n"
            "Rules: DO NOT use placeholders, stubs, or 'TODO'. Provide 100% working, self-contained code."
        )
        messages = [{"role": "user", "content": prompt}]
        return self._dispatch(["coder", "groq_coder", "fast_coder"], messages)

    def security_audit(self, code: str) -> str:
        """Role: Defensive Security Auditor (Code-Shield)"""
        prompt = (
            "Audit this code for security vulnerabilities, secret leaks, and logic flaws. "
            "Suggest concrete fixes or patches:\n\n" + code
        )
        messages = [{"role": "user", "content": prompt}]
        return self._dispatch(["fast_coder", "coder"], messages)

    def generate_marketing_copy(self, project_name: str, features: str) -> dict:
        """Role: Marketing Copywriter & Gumroad Strategist"""
        prompt = (
            f"Write a bilingual (Arabic & English) high-converting sales description for '{project_name}' on Gumroad.\n"
            f"Key features: {features}\n"
            "Format as JSON with keys: title_ar, title_en, description_ar, description_en, tags, suggested_price_usd."
        )
        messages = [{"role": "user", "content": prompt}]
        raw = self._dispatch(["fast_coder", "architect"], messages)
        try:
            # clean json fences if any
            clean = raw.strip()
            if "```json" in clean:
                clean = clean.split("```json")[1].split("```")[0].strip()
            elif "```" in clean:
                clean = clean.split("```")[1].split("```")[0].strip()
            return json.loads(clean)
        except Exception:
            return {
                "title_ar": project_name,
                "title_en": project_name,
                "description_ar": raw,
                "description_en": raw,
                "tags": ["software", "ai", "zerobaran"],
                "suggested_price_usd": 49
            }

    def _dispatch(self, preferred_roles, messages):
        """Dispatches to available provider with graceful fallback."""
        for role in preferred_roles:
            model = self.FREE_MODELS.get(role)
            try:
                if "groq" in role and self.groq_key:
                    return self.groq.chat_completion(model, messages)
                elif self.openrouter_key:
                    return self.openrouter.chat_completion(model, messages)
            except Exception as e:
                print(f"⚠️ Fallback from {role} ({model}): {e}")
                continue
        
        # If external API keys not yet set, we inform caller
        return "[Local AI Master]: Ready to orchestrate. Provide OPENROUTER_API_KEY or GROQ_API_KEY to activate cloud inference."

ai_fleet = AIFleet()
