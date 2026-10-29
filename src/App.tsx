import React, { useState, useEffect } from 'react';
import {
  Zap, Eye, Palette, Send, Bot, Cpu, Layers, Rocket,
  Mail, Phone, Globe, Shield, Clock, Sparkles,
  ArrowRight, CheckCircle, Star, Code, Image, Type,
  Share2, BarChart3, Workflow, Database, Cloud,
  Github, ExternalLink, Menu, X, ChevronDown,
  Monitor, Smartphone, ShoppingBag, Video, Music,
  FileText, Lock, Heart, Award, TrendingUp, Users,
  Play, ArrowUpRight, Hexagon, Triangle, Circle,
  Boxes, Brain, Wand2, Paintbrush, Camera,
  Megaphone, Target, Lightbulb, Flame, Gem,
  Bitcoin, Coins, Wallet, CreditCard, Copy, Check,
  QrCode, Building2, ShieldCheck, Search, Filter
} from 'lucide-react';

// ============ COPY TO CLIPBOARD HELPER ============
function CopyButton({ text, label = 'نسخ' }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <button
      onClick={handleCopy}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 ${
        copied
          ? 'bg-green-500/20 text-green-400 border border-green-500/40 shadow-sm'
          : 'bg-white/10 text-gray-200 hover:bg-white/20 hover:text-white border border-white/10'
      }`}
      title="نسخ إلى الحافظة"
    >
      {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
      <span>{copied ? 'تم النسخ!' : label}</span>
    </button>
  );
}

// ============ ANIMATED BACKGROUND ============
function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[#050510]"></div>
      <div className="absolute top-0 left-1/4 w-[550px] h-[550px] bg-purple-600/10 rounded-full filter blur-[160px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full filter blur-[150px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-[450px] h-[450px] bg-amber-500/5 rounded-full filter blur-[140px] animate-pulse" style={{ animationDelay: '4s' }}></div>
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }}></div>
    </div>
  );
}

// ============ NAVBAR ============
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '#store', label: 'المتجر والترسانة' },
    { href: '#payments', label: 'طرق الدفع والبيتكوين' },
    { href: '#projects', label: 'المشاريع الـ 12' },
    { href: '#capabilities', label: 'أسطول الذكاء' },
    { href: '#referrals', label: 'الشركاء والإحالات' },
    { href: '#contact', label: 'تواصل' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#050510]/90 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-purple-500/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/30">
              <Hexagon className="w-5 h-5 text-white" />
            </div>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 blur-lg opacity-50 group-hover:opacity-80 transition-opacity"></div>
          </div>
          <div>
            <span className="font-black text-white text-lg block leading-none">Studio</span>
            <span className="text-[10px] text-purple-400 font-medium tracking-widest">ZEROBARAN</span>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm font-medium px-3.5 py-2 rounded-lg hover:bg-white/5">
              {link.label}
            </a>
          ))}
          <a
            href="https://baranavi.gumroad.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-3 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:shadow-lg hover:shadow-purple-500/30 transition-all flex items-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            متجر Gumroad
          </a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white p-2 rounded-lg bg-white/5 border border-white/10">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-[#0a0a18]/95 backdrop-blur-2xl border-b border-white/10 px-4 py-4 space-y-2">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-white py-2.5 px-4 rounded-lg hover:bg-white/5 text-sm font-medium">
              {link.label}
            </a>
          ))}
          <a
            href="https://baranavi.gumroad.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-3 rounded-xl text-center font-bold mt-2"
          >
            زيارة متجر Gumroad الرسمي
          </a>
        </div>
      )}
    </nav>
  );
}

// ============ HERO SECTION ============
function HeroSection() {
  const [count, setCount] = useState({ projects: 0, tools: 0, catalog: 0 });

  useEffect(() => {
    const targets = { projects: 12, tools: 67, catalog: 1000000 };
    const duration = 1800;
    const steps = 50;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCount({
        projects: Math.floor(targets.projects * progress),
        tools: Math.floor(targets.tools * progress),
        catalog: Math.floor(targets.catalog * progress),
      });
      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-28 pb-16">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-8 backdrop-blur-md">
            <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-ping"></span>
            <span className="text-gray-200 text-sm font-medium">منظومة أتمتة وترسانة برمجية لا مركزية — تعمل 24/7</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight leading-[1.15]">
            نبتكر ونبني أدوات
            <br />
            <span className="relative inline-block mt-2">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                سـابـقـة لعـصـرهـا
              </span>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            استوديو الإنتاج البرمجي والمرئي والسيبراني — نضع بين يديك أكثر من <span className="text-purple-400 font-bold">1,000,000 منتج وترخيص رقمي</span> مع إمكانية الدفع المباشر بالبيتكوين لحفظ خصوصيتك الكاملة أو عبر التحويل البنكي والعملات المستقرة.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center items-center mb-16">
            <a
              href="#store"
              className="group relative bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 flex items-center gap-3"
            >
              <ShoppingBag className="w-5 h-5" />
              تصفح متجر الأدوات والترسانة
              <ArrowRight className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </a>
            <a
              href="#payments"
              className="border border-amber-500/40 bg-amber-500/10 text-amber-300 px-7 py-4 rounded-2xl font-bold text-lg hover:bg-amber-500/20 hover:border-amber-400 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
            >
              <Bitcoin className="w-5 h-5 text-amber-400" />
              الدفع بالبيتكوين والبنك
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
              <div className="text-3xl md:text-4xl font-black text-amber-400">
                +{count.catalog.toLocaleString()}
              </div>
              <div className="text-xs md:text-sm text-gray-400 mt-1 font-medium">منتج وترخيص وكود متاح بالشبكة</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
              <div className="text-3xl md:text-4xl font-black text-purple-400">
                +{count.tools}
              </div>
              <div className="text-xs md:text-sm text-gray-400 mt-1 font-medium">مستودع وأداة مفتوحة المصدر</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
              <div className="text-3xl md:text-4xl font-black text-cyan-400">
                100%
              </div>
              <div className="text-xs md:text-sm text-gray-400 mt-1 font-medium">دفع مجهول وآمن عبر البيتكوين</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ PRODUCT TYPE & DATA ============
interface StoreProduct {
  id: string;
  name: string;
  nameEn: string;
  category: 'cybersecurity' | 'ai' | 'crypto' | 'productivity' | 'systems';
  description: string;
  priceUSD: number;
  priceBTC: string;
  features: string[];
  gumroadSlug?: string;
  badge?: string;
  gradient: string;
}

const PRODUCTS_DATA: StoreProduct[] = [
  {
    id: 'studio-zerobaran-platform',
    name: 'Studio-ZeroBaran — منظومة الإنتاج الذاتي',
    nameEn: 'Autonomous Creative & Production OS Suite',
    category: 'systems',
    description: 'استوديو الإنتاج البرمجي والمرئي والترسانة السيبرانية اللامركزية — نبتكر مشاريع عظيمة وأكثر من 1,000,000 منتج وترخيص رقمي.',
    priceUSD: 49,
    priceBTC: '0.0007 BTC',
    features: ['12 Autonomous Engines', 'Multi-Agent Support', 'Zero Monthly Cost', 'Lifetime Updates'],
    gumroadSlug: 'studio-zerobaran',
    badge: 'النظام الأساسي 🚀',
    gradient: 'from-purple-600 via-pink-600 to-cyan-500'
  },
  {
    id: 'baran-security-arsenal',
    name: 'Baran Security Arsenal Full Suite',
    nameEn: 'All-in-One Bug Bounty & Recon Super Pack',
    category: 'cybersecurity',
    description: 'الحزمة الشاملة الكاملة: تضم أكثر من 67 أداة وسكربت للاستطلاع السيبراني، وفحص الثغرات، وأتمتة البحث عن مكافآت الثغرات.',
    priceUSD: 199,
    priceBTC: '0.0030 BTC',
    features: ['Full Arsenal (67+ Tools)', 'Lifetime Updates', 'Private Telegram Group', 'Source Code Access'],
    gumroadSlug: 'baran-security-arsenal-suite',
    badge: 'الحزمة الشاملة 👑',
    gradient: 'from-violet-600 via-fuchsia-600 to-amber-500'
  },
  {
    id: 'phantomlogic-recon',
    name: 'PhantomLogic Recon Pro',
    nameEn: 'Autonomous Attack Surface & Recon Engine',
    category: 'cybersecurity',
    description: 'محرك الاستطلاع السيبراني واكتشاف الثغرات وتتبع الأصول الرقمية، مجهز بمصفوفة كشف دفاعات متقدمة وفحص شامل.',
    priceUSD: 79,
    priceBTC: '0.0012 BTC',
    features: ['Auto Subdomain Takeover', 'WAF Posture Mapping', 'Secret Leak Hunting', 'Telegram Alerts'],
    gumroadSlug: 'phantomlogic-recon-pro',
    badge: 'الأكثر مبيعاً 🔥',
    gradient: 'from-red-600 to-amber-600'
  },
  {
    id: 'elite-gungnir',
    name: 'Elite Gungnir Auditor',
    nameEn: 'Smart Contract & Defensive Security Suite',
    category: 'cybersecurity',
    description: 'مدقق عقود ذكية وشيفرات دفاعية ذاتي، يكشف ثغرات Reentrancy والتلاعب بأسعار الأوراكل وثغرات الأذونات بدقة بالغة.',
    priceUSD: 99,
    priceBTC: '0.0015 BTC',
    features: ['EVM Static Audit', 'Formal Logic Checks', 'Automated Patch Generator', 'Gas Optimization'],
    gumroadSlug: 'elite-gungnir-auditor',
    badge: 'احترافي 🛡️',
    gradient: 'from-blue-600 to-purple-600'
  },
  {
    id: 'code-shield-zero',
    name: 'Code-Shield ZeroBaran',
    nameEn: 'Autonomous Secret Redaction & Vulnerability Auditor',
    category: 'cybersecurity',
    description: 'أداة تدقيق وفحص أمني مستقلة لشيفرات المصدر، تحمي الرموز السرية والمفاتيح الخاصة وتمنع تسريبها قبل الرفع.',
    priceUSD: 49,
    priceBTC: '0.0008 BTC',
    features: ['Zero False Positives', 'Pre-commit Hooks', 'Redaction Engine', 'CI/CD Ready'],
    gumroadSlug: 'baranexcalibur',
    gradient: 'from-emerald-600 to-teal-600'
  },
  {
    id: 'baran-fatorabox',
    name: 'Baran FatoraBox OS',
    nameEn: 'Arabic-first Self-Hosted Invoicing OS (ZATCA Phase-1)',
    category: 'productivity',
    description: 'نظام الفوترة الإلكترونية السحابي والذاتي المتوافق 100% مع معايير هيئة الزكاة والضريبة (ZATCA)، ملف واحد بدون تبعيات.',
    priceUSD: 39,
    priceBTC: '0.0006 BTC',
    features: ['ZATCA TLV QR byte-exact', 'Zero Dependencies', 'Offline PWA Ready', 'Instant PDF Engine'],
    gumroadSlug: 'baran-fatorabox-os',
    badge: 'مُعتمد 📜',
    gradient: 'from-purple-600 to-indigo-600'
  },
  {
    id: 'baran-flash-ai',
    name: 'BaranFlash MoE Engine',
    nameEn: '1M-Context Local Sparse Mixture-of-Experts Engine',
    category: 'ai',
    description: 'محرك ذكاء اصطناعي محلي خفيف يعمل بكفاءة على الأجهزة العادية بسياق ذاكرة ضخم يصل إلى مليون رمز مع استهلاك فائق الانخفاض.',
    priceUSD: 120,
    priceBTC: '0.0018 BTC',
    features: ['1M Context Memory', 'Asymmetric Prefill', 'Multimodal Intake', 'Self-Hosted & Private'],
    gumroadSlug: 'baranflash-moe-engine',
    badge: 'فائق السرعة ⚡',
    gradient: 'from-yellow-500 to-red-600'
  },
  {
    id: 'baran-prompt-os',
    name: 'Baran PromptOS Suite',
    nameEn: 'Engineered Enterprise Prompt Library & Engine',
    category: 'ai',
    description: 'مكتبة هندسة الأوامر والبرومبتات الخارقة الأكثر شمولاً، تحتوي على أكثر من 60 نموذج هندسي متقدم عبر 6 مسارات احترافية.',
    priceUSD: 29,
    priceBTC: '0.0005 BTC',
    features: ['60 Engineered Prompts', '227 Variables', 'Zero Dependencies', 'Marketing & Code Ops'],
    gumroadSlug: 'baran-prompt-os-suite',
    gradient: 'from-pink-600 to-purple-600'
  },
  {
    id: 'akdiro-nexus',
    name: 'AKDIRO-NEXUS',
    nameEn: 'Target-Aware Scraping & Posture Orchestrator',
    category: 'systems',
    description: 'منظومة جمع بيانات واستطلاع ذكية تعتمد بصمات Chrome uTLS ومصفوفة التوجيه الشبكي المتقدمة لجمع البيانات المفتوحة بأمان.',
    priceUSD: 65,
    priceBTC: '0.0010 BTC',
    features: ['uTLS Chrome Fingerprints', 'AIMD Rate Governor', 'SHA-256 Chain Verification', 'Resilient Network'],
    gumroadSlug: 'excalibur-nexus-tracker',
    gradient: 'from-cyan-600 to-blue-600'
  },
  {
    id: 'mev-shield',
    name: 'MEVShield & Gas Simulator',
    nameEn: 'DeFi Sandwich & Front-run Protection Suite',
    category: 'crypto',
    description: 'درع الحماية من هجمات تداول البلوكتشين (Sandwich Attacks & Frontrunning) ومحاكي رسوم الغاز الدقيق في الزمن الحقيقي.',
    priceUSD: 55,
    priceBTC: '0.0009 BTC',
    features: ['Mempool Monitoring', 'Slippage Guard', 'Private RPC Integration', 'Gas Optimizer'],
    gumroadSlug: 'elite-recon-engine',
    gradient: 'from-amber-600 to-yellow-500'
  }
];

// ============ STORE & ARSENAL SECTION ============
function StoreArsenalSection({ onSelectProduct }: { onSelectProduct: (p: StoreProduct) => void }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCat, setSelectedCat] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'جميع المنتجات والترسانة' },
    { id: 'cybersecurity', label: 'الأمن السيبراني والثغرات' },
    { id: 'ai', label: 'الذكاء الاصطناعي والأتمتة' },
    { id: 'crypto', label: 'البلوكتشين والعملات المشفرة' },
    { id: 'productivity', label: 'الفوترة والإنتاجية' },
    { id: 'systems', label: 'الأنظمة والشبكات' },
  ];

  const filtered = PRODUCTS_DATA.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCat === 'all' || p.category === selectedCat;
    return matchesSearch && matchesCat;
  });

  return (
    <section id="store" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-5 py-2 mb-4">
            <ShoppingBag className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-semibold">المتجر الرقمي والترسانة الحصرية</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-4">
            ترسانة المنتجات <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">والأدوات الذكية</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            مكتبة متكاملة تضم أكثر من <span className="text-amber-400 font-bold">1,000,000 أداة وترخيص رقمي</span> جاهزة للتسليم الفوري مع دعم الدفع المباشر بالبيتكوين أو التحويل البنكي.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-4 sm:p-6 mb-12 backdrop-blur-md">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-5">
            <div className="relative w-full md:w-96">
              <Search className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="ابحث عن أداة، سكربت، نظام..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl pr-12 pl-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/60 transition-all text-sm"
              />
            </div>
            <div className="text-sm text-gray-400 flex items-center gap-2">
              <Filter className="w-4 h-4 text-purple-400" />
              <span>عدد الأدوات المعروضة: <strong className="text-white">{filtered.length}</strong> أداة متطورة</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCat(c.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedCat === c.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md shadow-purple-500/20'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="group bg-white/[0.03] border border-white/10 hover:border-purple-500/40 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-500/30 to-pink-500/30 border border-purple-500/40 text-purple-200 text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md">
                  {product.badge}
                </div>
              )}

              <div>
                {/* Header Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-105 transition-transform`}>
                  <Code className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-500 font-mono mb-3">{product.nameEn}</p>
                <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                  {product.description}
                </p>

                {/* Features list */}
                <div className="space-y-2 mb-6">
                  {product.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                      <CheckCircle className="w-3.5 h-3.5 text-green-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & Action Bar */}
              <div className="pt-5 border-t border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-black text-white">${product.priceUSD}</span>
                    <span className="text-xs text-gray-500 mr-1.5">USD</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/30 px-2.5 py-1 rounded-lg text-amber-300 text-xs font-mono font-bold">
                    <Bitcoin className="w-3.5 h-3.5 text-amber-400" />
                    <span>{product.priceBTC}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`https://baranavi.gumroad.com/l/${product.gumroadSlug || ''}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 text-white py-2.5 px-3 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-all"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    متجر Gumroad
                  </a>
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white py-2.5 px-3 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-all shadow-md shadow-purple-500/20"
                  >
                    <Coins className="w-3.5 h-3.5" />
                    دفع مباشر (بيتكوين/بنك)
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Catalog Banner */}
        <div className="mt-14 bg-gradient-to-r from-purple-900/30 via-pink-900/20 to-blue-900/30 border border-purple-500/30 rounded-3xl p-8 text-center backdrop-blur-xl">
          <h3 className="text-2xl font-bold text-white mb-2">هل تبحث عن ترخيص خاص أو سكربت مخصص بالكامل؟</h3>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto mb-6">
            لدينا قدرة على توريد وترخيص أكثر من 1,000,000 كود وبرمجية وسكربتات استطلاع وتداول مخصصة لشركتك مع دعم فني مستمر.
          </p>
          <a
            href="https://wa.me/905313263722"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-7 py-3 rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-green-500/30 transition-all"
          >
            <Phone className="w-4 h-4" />
            اطلب أداة مخصصة عبر واتساب فوراً
          </a>
        </div>
      </div>
    </section>
  );
}

// ============ PAYMENT GATEWAY & BITCOIN HIGHLIGHT ============
function PaymentMethodsSection({ onOpenCheckout }: { onOpenCheckout: (method?: string) => void }) {
  const [activeTab, setActiveTab] = useState<'btc' | 'crypto' | 'bank'>('btc');

  return (
    <section id="payments" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-5 py-2 mb-4">
            <Bitcoin className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 text-sm font-semibold">بوابة الدفع اللامركزية والمتعددة</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-4">
            دفع آمن، مجهول، <span className="bg-gradient-to-r from-amber-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">وسابق لعصره</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto">
            حرية الاختيار لك: ادفع بالبيتكوين دون مشاركة أي معلومات شخصية، أو عبر التحويل البنكي المباشر بحساباتنا الرسمية، أو بواسطة العملات الرقمية المستقرة.
          </p>
        </div>

        {/* ============ FEATURED BITCOIN HERO CARD ============ */}
        <div className="mb-12 relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-950/40 via-[#130f07] to-purple-950/30 border-2 border-amber-500/50 p-6 sm:p-10 shadow-2xl shadow-amber-500/10">
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-amber-500/15 rounded-full filter blur-[100px] pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            <div className="max-w-xl text-center lg:text-right">
              <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-300 px-3.5 py-1.5 rounded-full text-xs font-bold mb-4">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>الخيار الأول للخصوصية المطلقة (100% Anonymous)</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-white mb-3">
                ادفع بالبيتكوين <span className="text-amber-400">(Bitcoin BTC)</span>
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                لا ترغب في إدخال بياناتك البنكية أو معلومات بطاقتك الائتمانية؟ وفرنا لك الدفع المباشر عبر شبكة البيتكوين الأصلية. لا وسيط، لا تسجيل، ومعالجة فورية وتأكيد مباشر على البلوكتشين بمجرد الإرسال.
              </p>

              {/* BTC Address Box */}
              <div className="bg-black/60 border border-amber-500/30 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-right">
                <div className="overflow-hidden w-full sm:w-auto">
                  <div className="text-[11px] text-amber-400 font-semibold mb-1">عنوان محفظة البيتكوين (Native SegWit / BTC):</div>
                  <div className="font-mono text-xs sm:text-sm text-white select-all break-all" dir="ltr">
                    bc1q8dhtdrndxsl70e97t8grydfe6pjue37zrhzf6c
                  </div>
                </div>
                <CopyButton text="bc1q8dhtdrndxsl70e97t8grydfe6pjue37zrhzf6c" label="نسخ العنوان" />
              </div>
            </div>

            {/* Visual Icon / QR Representation */}
            <div className="flex flex-col items-center justify-center bg-black/40 border border-amber-500/30 rounded-2xl p-6 w-full lg:w-72 shrink-0 text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-300 flex items-center justify-center text-black mb-4 shadow-xl shadow-amber-500/20">
                <Bitcoin className="w-12 h-12" />
              </div>
              <span className="text-white font-bold text-sm mb-1">دفع فوري ومشفر</span>
              <span className="text-gray-400 text-xs mb-4">شبكة Bitcoin Mainnet</span>
              <button
                onClick={() => onOpenCheckout('btc')}
                className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-black font-bold py-2.5 px-4 rounded-xl text-xs transition-all shadow-md"
              >
                تأكيد الدفع بالبيتكوين الآن
              </button>
            </div>
          </div>
        </div>

        {/* ============ NAVIGATION TABS FOR OTHER METHODS ============ */}
        <div className="flex justify-center gap-3 mb-8">
          <button
            onClick={() => setActiveTab('btc')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
              activeTab === 'btc'
                ? 'bg-amber-500/20 border border-amber-500/50 text-amber-300'
                : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white'
            }`}
          >
            <Bitcoin className="w-4 h-4 text-amber-400" />
            البيتكوين (BTC)
          </button>
          <button
            onClick={() => setActiveTab('crypto')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
              activeTab === 'crypto'
                ? 'bg-cyan-500/20 border border-cyan-500/50 text-cyan-300'
                : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white'
            }`}
          >
            <Coins className="w-4 h-4 text-cyan-400" />
            العملات الرقمية (USDT / SOL / EVM)
          </button>
          <button
            onClick={() => setActiveTab('bank')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
              activeTab === 'bank'
                ? 'bg-purple-500/20 border border-purple-500/50 text-purple-300'
                : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white'
            }`}
          >
            <Building2 className="w-4 h-4 text-purple-400" />
            التحويل البنكي (TRY / USD)
          </button>
        </div>

        {/* ============ TAB CONTENT: CRYPTO WALLETS ============ */}
        {activeTab === 'crypto' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
            {/* USDT TRC-20 */}
            <div className="bg-white/[0.03] border border-emerald-500/30 rounded-2xl p-6 relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <Coins className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-white text-lg mb-1">USDT (TRC-20)</h4>
              <p className="text-gray-400 text-xs mb-4">شبكة ترون (Tron Network) — رسوم تحويل ضئيلة وسرعة إيداع فورية.</p>

              <div className="bg-black/50 border border-white/5 rounded-xl p-3 mb-4">
                <div className="text-[10px] text-emerald-400 mb-1">عنوان المحفظة:</div>
                <div className="font-mono text-xs text-white break-all select-all" dir="ltr">
                  TLWdTjqqogkXNEXGiPWsGdjFP6ioycxeWW
                </div>
              </div>
              <div className="flex justify-end">
                <CopyButton text="TLWdTjqqogkXNEXGiPWsGdjFP6ioycxeWW" />
              </div>
            </div>

            {/* EVM Address */}
            <div className="bg-white/[0.03] border border-blue-500/30 rounded-2xl p-6 relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                <Wallet className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-white text-lg mb-1">EVM Multi-Chain</h4>
              <p className="text-gray-400 text-xs mb-4">Ethereum, BNB Chain (BSC), Polygon, Arbitrum.</p>

              <div className="bg-black/50 border border-white/5 rounded-xl p-3 mb-4">
                <div className="text-[10px] text-blue-400 mb-1">عنوان المحفظة:</div>
                <div className="font-mono text-xs text-white break-all select-all" dir="ltr">
                  0xDda2b17Dc7437700DE7EeFe564610a6a1976de6c
                </div>
              </div>
              <div className="flex justify-end">
                <CopyButton text="0xDda2b17Dc7437700DE7EeFe564610a6a1976de6c" />
              </div>
            </div>

            {/* Solana Address */}
            <div className="bg-white/[0.03] border border-purple-500/30 rounded-2xl p-6 relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-white text-lg mb-1">Solana (SOL)</h4>
              <p className="text-gray-400 text-xs mb-4">شبكة سولانا — المعاملات فائقة السرعة مع رسوم أجزاء من السنت.</p>

              <div className="bg-black/50 border border-white/5 rounded-xl p-3 mb-4">
                <div className="text-[10px] text-purple-400 mb-1">عنوان المحفظة:</div>
                <div className="font-mono text-xs text-white break-all select-all" dir="ltr">
                  8tNBdGZneouj7MDJwX9GwLhujkEJTQHgUaJXTgRCsVyq
                </div>
              </div>
              <div className="flex justify-end">
                <CopyButton text="8tNBdGZneouj7MDJwX9GwLhujkEJTQHgUaJXTgRCsVyq" />
              </div>
            </div>
          </div>
        )}

        {/* ============ TAB CONTENT: BANK TRANSFERS ============ */}
        {activeTab === 'bank' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
            {/* TRY Bank Account */}
            <div className="bg-white/[0.03] border border-purple-500/30 rounded-3xl p-7 relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">حساب الليرة التركية (TRY)</h4>
                  <p className="text-xs text-gray-400">Ziraat Bankasi — Türkiye</p>
                </div>
              </div>

              <div className="space-y-3 bg-black/40 border border-white/5 rounded-2xl p-4 text-xs">
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-gray-400">اسم المستفيد:</span>
                  <span className="text-white font-bold">Baran Avisat</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-gray-400">رمز السويفت (SWIFT / BIC):</span>
                  <span className="text-white font-mono font-bold">TCZBTR2A</span>
                </div>
                <div>
                  <div className="text-gray-400 mb-1">رقم الآيبان (IBAN):</div>
                  <div className="bg-white/5 p-2.5 rounded-xl font-mono text-xs text-purple-300 break-all select-all" dir="ltr">
                    TR10 0001 0090 1008 4013 0050 01
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <CopyButton text="TR100001009010084013005001" label="نسخ الآيبان التركي" />
              </div>
            </div>

            {/* USD Bank Account */}
            <div className="bg-white/[0.03] border border-cyan-500/30 rounded-3xl p-7 relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <CreditCard className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">حساب الدولار الأمريكي (USD)</h4>
                  <p className="text-xs text-gray-400">Ziraat Bankasi — USD Account</p>
                </div>
              </div>

              <div className="space-y-3 bg-black/40 border border-white/5 rounded-2xl p-4 text-xs">
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-gray-400">اسم المستفيد:</span>
                  <span className="text-white font-bold">Baran Avisat</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-gray-400">رمز السويفت (SWIFT / BIC):</span>
                  <span className="text-white font-mono font-bold">TCZBTR2A</span>
                </div>
                <div>
                  <div className="text-gray-400 mb-1">رقم الآيبان (IBAN):</div>
                  <div className="bg-white/5 p-2.5 rounded-xl font-mono text-xs text-cyan-300 break-all select-all" dir="ltr">
                    TR80 0001 0090 1008 4013 0050 02
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <CopyButton text="TR800001009010084013005002" label="نسخ آيبان الدولار" />
              </div>
            </div>
          </div>
        )}

        {/* ============ TAB CONTENT: BITCOIN DETAILS ============ */}
        {activeTab === 'btc' && (
          <div className="bg-white/[0.02] border border-amber-500/20 rounded-3xl p-6 sm:p-8 animate-fadeIn text-center">
            <h4 className="text-xl font-bold text-white mb-2">تعليمات الدفع المباشر بالبيتكوين</h4>
            <p className="text-gray-400 text-sm max-w-xl mx-auto mb-6">
              أرسل قيمة المنتج إلى عنوان البيتكوين أعلاه، ثم اضغط على زر تأكيد الدفع لإرسال معرف المعاملة (TXID) ونقوم بتسليمك الترخيص وملف الشيفرة المصدرية فوراً.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => onOpenCheckout('btc')}
                className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold px-6 py-3 rounded-xl text-sm transition-all hover:shadow-lg"
              >
                تأكيد إرسال البيتكوين وطلب الترخيص
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// ============ REFERRALS & PARTNERS SECTION ============
function ReferralsSection() {
  return (
    <section id="referrals" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-5 py-2 mb-4">
            <Award className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-300 text-sm font-semibold">منصات الشركاء والفرص الحصرية</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-3">
            روابط الشركاء <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">والإحالات الحصرية</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            احصل على بونص تداول ومكافآت تسجيل خاصة عند الانضمام عبر روابطنا الرسمية المعتمدة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Binance CPA */}
          <div className="bg-gradient-to-br from-yellow-500/10 via-white/[0.02] to-transparent border border-yellow-500/30 rounded-3xl p-7 flex flex-col justify-between hover:border-yellow-500/50 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-black text-yellow-400">BINANCE</span>
                <span className="bg-yellow-500/20 text-yellow-300 text-xs font-bold px-3 py-1 rounded-full border border-yellow-500/30">
                  CPA Bonus 🎁
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">منصة بينانس الرسمية لتداول العملات الرقمية</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                سجل حسابك الآن عبر رابط الإحالة الرسمي المعتمد واحصل على خصم على رسوم التداول وبونص تسجيل حصري للبدء بتداول البيتكوين والعملات المشفرة.
              </p>
            </div>
            <a
              href="https://www.binance.com/activity/referral-entry/CPA?ref=CPA_006Q5UBO64"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-bold py-3 px-5 rounded-xl text-center text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-yellow-500/20 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              انضم لبينانس واحصل على المكافأة
            </a>
          </div>

          {/* Pocket Friends */}
          <div className="bg-gradient-to-br from-pink-500/10 via-white/[0.02] to-transparent border border-pink-500/30 rounded-3xl p-7 flex flex-col justify-between hover:border-pink-500/50 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-black text-pink-400">Pocket Friends</span>
                <span className="bg-pink-500/20 text-pink-300 text-xs font-bold px-3 py-1 rounded-full border border-pink-500/30">
                  Exclusive Reward 🚀
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">منصة Pocket Friends التفاعلية</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                انضم إلى منصة Pocket Friends عبر كود الدعوة الخاص واستمتع بكافة الميزات الحصرية والجوائز الترحيبية المباشرة.
              </p>
            </div>
            <a
              href="https://pocket-friends.co/r/hvb4v0f1tt"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold py-3 px-5 rounded-xl text-center text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-pink-500/20 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              تسجيل الدخول في Pocket Friends
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ PROJECT CARD & 12 PROJECTS SECTION ============
interface Project {
  id: number;
  title: string;
  titleEn: string;
  description: string;
  category: string;
  icon: React.ReactNode;
  gradient: string;
  glowColor: string;
  features: string[];
  status: 'live' | 'beta' | 'coming';
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="group relative bg-white/[0.03] border border-white/10 rounded-3xl p-6 cursor-pointer hover:border-white/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
    >
      <div className={`absolute -top-20 -right-20 w-40 h-40 ${project.glowColor} rounded-full filter blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

      <div className="absolute top-4 left-4">
        {project.status === 'live' && (
          <span className="bg-green-500/20 text-green-400 text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
            LIVE
          </span>
        )}
        {project.status === 'beta' && (
          <span className="bg-yellow-500/20 text-yellow-400 text-[10px] font-bold px-2 py-1 rounded-full">BETA</span>
        )}
        {project.status === 'coming' && (
          <span className="bg-purple-500/20 text-purple-400 text-[10px] font-bold px-2 py-1 rounded-full">SOON</span>
        )}
      </div>

      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
        {project.icon}
      </div>

      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-all">
        {project.title}
      </h3>
      <p className="text-xs text-gray-500 font-mono mb-3">{project.titleEn}</p>
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.features.slice(0, 3).map((f, i) => (
          <span key={i} className="text-[10px] bg-white/5 text-gray-400 px-2 py-1 rounded-md border border-white/5">
            {f}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-white/5">
        <span className="text-xs text-gray-500">{project.category}</span>
        <div className="flex items-center gap-1 text-purple-400 text-sm font-medium group-hover:gap-2 transition-all">
          التفاصيل
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}

function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Studio-ZeroBaran',
      titleEn: 'Visual Production Studio',
      description: 'منظومة أتمتة وإنتاج محتوى مرئي وإعلاني متكاملة — تأخذ فكرة وتولّد صور ونصوص وتصاميم احترافية',
      category: 'إنتاج مرئي',
      icon: <Palette className="w-7 h-7" />,
      gradient: 'from-purple-500 to-pink-500',
      glowColor: 'bg-purple-500/30',
      features: ['Gemini API', 'Hugging Face', 'Pillow', 'Auto-Publish'],
      status: 'live',
    },
    {
      id: 2,
      title: 'CryptoVault Pro',
      titleEn: 'Multi-Chain Wallet Manager',
      description: 'محفظة رقمية متعددة السلاسل تدعم EVM و Solana و Bitcoin مع واجهة احترافية وتتبع المحفظة لحظياً',
      category: 'بلوكتشين',
      icon: <Gem className="w-7 h-7" />,
      gradient: 'from-cyan-500 to-blue-500',
      glowColor: 'bg-cyan-500/30',
      features: ['EVM', 'Solana', 'Bitcoin', 'Real-time'],
      status: 'live',
    },
    {
      id: 3,
      title: 'AI Copywriter',
      titleEn: 'Marketing Copy Generator',
      description: 'مولّد نصوص تسويقية ذكي — يكتب إعلانات، أوصاف منتجات، ومنشورات سوشيال ميديا باحترافية',
      category: 'ذكاء اصطناعي',
      icon: <Brain className="w-7 h-7" />,
      gradient: 'from-pink-500 to-red-500',
      glowColor: 'bg-pink-500/30',
      features: ['Gemini', 'Groq', 'Multi-lang', 'SEO'],
      status: 'live',
    },
    {
      id: 4,
      title: 'DesignForge',
      titleEn: 'AI Design Generator',
      description: 'مصمم جرافيك آلي — يولّد شعارات، بوسترات، وMockups منتجات بدقة احترافية خلال ثوانٍ',
      category: 'تصميم',
      icon: <Paintbrush className="w-7 h-7" />,
      gradient: 'from-orange-500 to-yellow-500',
      glowColor: 'bg-orange-500/30',
      features: ['Flux', 'Stable Diffusion', 'SVG', 'Export'],
      status: 'beta',
    },
    {
      id: 5,
      title: 'SocialPilot',
      titleEn: 'Auto Social Media Manager',
      description: 'مدير سوشيال ميديا آلي — ينشر محتوى مجدول على جميع المنصات ويحلل الأداء',
      category: 'تسويق',
      icon: <Megaphone className="w-7 h-7" />,
      gradient: 'from-green-500 to-emerald-500',
      glowColor: 'bg-green-500/30',
      features: ['Scheduler', 'Analytics', 'Multi-platform', 'AI'],
      status: 'beta',
    },
    {
      id: 6,
      title: 'VideoGen Studio',
      titleEn: 'Short Video Generator',
      description: 'مولّد فيديوهات قصيرة — يحول النصوص والصور لفيديوهات Reels وTikTok احترافية',
      category: 'فيديو',
      icon: <Video className="w-7 h-7" />,
      gradient: 'from-red-500 to-pink-500',
      glowColor: 'bg-red-500/30',
      features: ['FFmpeg', 'AI Voice', 'Templates', '4K'],
      status: 'coming',
    },
    {
      id: 7,
      title: 'CodeMentor AI',
      titleEn: 'AI Code Assistant',
      description: 'مساعد برمجة ذكي — يكتب، يراجع، ويصحح الأكواد بأكثر من 20 لغة برمجة',
      category: 'برمجة',
      icon: <Code className="w-7 h-7" />,
      gradient: 'from-indigo-500 to-purple-500',
      glowColor: 'bg-indigo-500/30',
      features: ['20+ Languages', 'Debug', 'Refactor', 'Tests'],
      status: 'live',
    },
    {
      id: 8,
      title: 'DataPulse',
      titleEn: 'Real-time Analytics Dashboard',
      description: 'لوحة تحكم تحليلية لحظية — تعرض بيانات المبيعات والأداء مع رسوم بيانية تفاعلية',
      category: 'تحليلات',
      icon: <BarChart3 className="w-7 h-7" />,
      gradient: 'from-teal-500 to-cyan-500',
      glowColor: 'bg-teal-500/30',
      features: ['Real-time', 'Charts', 'Export', 'API'],
      status: 'live',
    },
    {
      id: 9,
      title: 'EcomBoost',
      titleEn: 'E-commerce Automation',
      description: 'أتمتة متاجر إلكترونية — إدارة المنتجات، الطلبات، والعملاء بذكاء اصطناعي',
      category: 'تجارة',
      icon: <ShoppingBag className="w-7 h-7" />,
      gradient: 'from-amber-500 to-orange-500',
      glowColor: 'bg-amber-500/30',
      features: ['Auto-listing', 'Pricing AI', 'Inventory', 'Reports'],
      status: 'beta',
    },
    {
      id: 10,
      title: 'SecureVault',
      titleEn: 'Password & Secrets Manager',
      description: 'مدير كلمات مرور ومفاتيح آمن — تشفير محلي كامل مع مزامنة مشفرة ومحمية',
      category: 'أمان',
      icon: <Lock className="w-7 h-7" />,
      gradient: 'from-slate-500 to-gray-600',
      glowColor: 'bg-slate-500/30',
      features: ['AES-256', 'Zero-knowledge', 'Sync', '2FA'],
      status: 'live',
    },
    {
      id: 11,
      title: 'MusicLab AI',
      titleEn: 'AI Music & Sound Generator',
      description: 'مولّد موسيقى ومؤثرات صوتية — ينتج موسيقى خلفية وأصوات فريدة بدون حقوق ملكية',
      category: 'صوتيات',
      icon: <Music className="w-7 h-7" />,
      gradient: 'from-violet-500 to-purple-500',
      glowColor: 'bg-violet-500/30',
      features: ['Royalty-free', 'Custom', 'Stems', 'WAV/MP3'],
      status: 'coming',
    },
    {
      id: 12,
      title: 'DocuFlow',
      titleEn: 'Smart Document Processor',
      description: 'معالج مستندات ذكي — يستخرج البيانات من PDF والصور ويحوّلها لقواعد بيانات منظمة',
      category: 'إنتاجية',
      icon: <FileText className="w-7 h-7" />,
      gradient: 'from-blue-500 to-indigo-500',
      glowColor: 'bg-blue-500/30',
      features: ['OCR', 'PDF', 'Tables', 'Export'],
      status: 'live',
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-5 py-2 mb-4">
            <Flame className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">المشاريع المتكاملة الـ 12</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-4">
            مشاريع وأنظمة <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">جاهزة للإطلاق</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            12 مشروعاً احترافياً مستقلاً — مصممة للعمل ذاتياً وبصفر تكاليف تشغيل عبر الذكاء الاصطناعي.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
          <div className="relative bg-[#0a0a1a] border border-white/10 rounded-3xl max-w-lg w-full p-8 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedProject(null)} className="absolute top-4 left-4 text-gray-500 hover:text-white transition-colors">
              <X className="w-6 h-6" />
            </button>

            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${selectedProject.gradient} flex items-center justify-center text-white mb-6 shadow-2xl`}>
              {selectedProject.icon}
            </div>

            <h3 className="text-2xl font-black text-white mb-1">{selectedProject.title}</h3>
            <p className="text-sm text-gray-500 font-mono mb-4">{selectedProject.titleEn}</p>
            <p className="text-gray-400 mb-6">{selectedProject.description}</p>

            <div className="mb-6">
              <h4 className="text-white font-bold mb-3">المميزات:</h4>
              <div className="grid grid-cols-2 gap-2">
                {selectedProject.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                    <span className="text-sm text-gray-300">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <span className="text-xs text-gray-500 bg-white/5 px-3 py-1 rounded-full">{selectedProject.category}</span>
              <a href="https://baranavi.gumroad.com/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2 rounded-xl text-sm font-bold flex items-center gap-2">
                <ShoppingBag className="w-4 h-4" />
                الحصول على المشروع
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// ============ AI MODELS SECTION ============
function AIModelsSection() {
  const models = [
    { name: 'Google Gemini', type: 'نصوص + رؤية', color: 'from-blue-500 to-cyan-500', desc: 'صياغة نصوص تسويقية وتحليل صور' },
    { name: 'Groq (Llama)', type: 'نصوص فائقة السرعة', color: 'from-orange-500 to-red-500', desc: 'توليد محتوى نصي بسرعة خارقة' },
    { name: 'Hugging Face', type: 'توليد صور', color: 'from-yellow-500 to-orange-500', desc: 'Flux & Stable Diffusion للصور' },
    { name: 'Stable Diffusion', type: 'صور احترافية', color: 'from-purple-500 to-pink-500', desc: 'توليد صور بدقة 4K' },
    { name: 'FLUX.1', type: 'صور واقعية', color: 'from-pink-500 to-rose-500', desc: 'أحدث نموذج لتوليد الصور الواقعية' },
    { name: 'Whisper', type: 'تحويل صوت لنص', color: 'from-green-500 to-emerald-500', desc: 'تفريغ الصوتيات بدقة عالية' },
    { name: 'Bark', type: 'توليد صوت', color: 'from-indigo-500 to-blue-500', desc: 'تحويل النص لكلام طبيعي' },
    { name: 'Real-ESRGAN', type: 'تحسين جودة', color: 'from-teal-500 to-cyan-500', desc: 'رفع دقة الصور 4x بالذكاء' },
  ];

  return (
    <section id="capabilities" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-5 py-2 mb-4">
            <Brain className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm font-medium">أسطول الذكاء الاصطناعي المجاني</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">8+ نماذج ذكاء</span> تعمل بتكامل
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            منظومة مؤتمتة تجمع أفضل نماذج الذكاء الاصطناعي لإنتاج المحتوى، وفحص الأكواد، وتحليل البيانات دون تكاليف اشتراك.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {models.map((model, i) => (
            <div key={i} className="group bg-white/[0.03] border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${model.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white mb-1">{model.name}</h4>
              <p className="text-xs text-purple-400 font-medium mb-2">{model.type}</p>
              <p className="text-xs text-gray-500">{model.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ CONTACT SECTION ============
function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 rounded-full px-5 py-2 mb-4">
            <Lightbulb className="w-4 h-4 text-pink-400" />
            <span className="text-pink-300 text-sm font-medium">قنوات التواصل والدعم الفني المباشر</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
            تواصل معنا <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">الآن</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">جاهزون للرد على استفساراتك وتخصيص الأدوات وتأكيد الدفع 24/7</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {/* Email */}
          <a href="mailto:baranavisat@gmail.com" className="group bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-center hover:border-purple-500/40 transition-all hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-white mb-1">البريد الإلكتروني</h4>
            <p className="text-gray-400 text-sm break-all font-mono">baranavisat@gmail.com</p>
          </a>

          {/* WhatsApp / Phone */}
          <a href="https://wa.me/905313263722" target="_blank" rel="noopener noreferrer" className="group bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-center hover:border-green-500/40 transition-all hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-white mb-1">واتساب / هاتف مباشر</h4>
            <p className="text-gray-400 text-sm font-mono" dir="ltr">+90 531 326 3722</p>
          </a>

          {/* Store */}
          <a href="https://baranavi.gumroad.com/" target="_blank" rel="noopener noreferrer" className="group bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-center hover:border-pink-500/40 transition-all hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-400 mx-auto mb-4 group-hover:scale-110 transition-transform">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-white mb-1">المتجر الرسمي</h4>
            <p className="text-gray-400 text-sm font-mono">baranavi.gumroad.com</p>
          </a>
        </div>
      </div>
    </section>
  );
}

// ============ FOOTER ============
function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-4 bg-[#03030a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 flex items-center justify-center">
                <Hexagon className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-black text-white text-lg block leading-none">Studio</span>
                <span className="text-[10px] text-purple-400 font-medium tracking-widest">ZEROBARAN</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm max-w-md leading-relaxed mb-4">
              استوديو وترسانة البرمجيات الذاتية واللامركزية — نبتكر مشاريع استثنائية ونوفر أكثر من مليون أداة وترخيص مع دعم كامل للدفع المجهول بالبيتكوين لحماية خصوصية المستخدمين.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/aoodiakdiro0001-ops"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-all"
                title="حساب GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://baranavi.gumroad.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-all"
                title="متجر Gumroad"
              >
                <ShoppingBag className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/905313263722"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-all"
                title="واتساب مباشر"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 text-sm">الروابط السريعة</h4>
            <ul className="space-y-2">
              <li><a href="#store" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">المتجر والترسانة (+1M)</a></li>
              <li><a href="#payments" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">الدفع بالبيتكوين والبنك</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">المشاريع الـ 12</a></li>
              <li><a href="#referrals" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">عروض الشركاء والإحالات</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">قنوات التواصل</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 text-sm">بيانات المطور</h4>
            <ul className="space-y-2 text-xs text-gray-400 font-mono">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span className="break-all">baranavisat@gmail.com</span>
              </li>
              <li className="flex items-center gap-2" dir="ltr">
                <Phone className="w-3.5 h-3.5 text-green-400 shrink-0" />
                <span>+90 531 326 3722</span>
              </li>
              <li className="flex items-center gap-2">
                <Bitcoin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>BTC SegWit Supported</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Akhisar, Türkiye</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 Studio-ZeroBaran — Baran Avisat. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-2">
            <span>صُنع بـ</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>وذكاء اصطناعي لامركزي فائق التطور</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============ INTERACTIVE CHECKOUT & RECEIPT MODAL ============
function CheckoutModal({
  product,
  initialMethod = 'btc',
  onClose
}: {
  product: StoreProduct | null;
  initialMethod?: string;
  onClose: () => void;
}) {
  const [selectedMethod, setSelectedMethod] = useState<'btc' | 'usdt' | 'sol' | 'evm' | 'try' | 'usd'>(
    initialMethod === 'btc' ? 'btc' : 'usdt'
  );
  const [txHash, setTxHash] = useState('');
  const [buyerName, setBuyerName] = useState('');

  const productName = product ? product.name : 'أداة / خدمة برمجية مخصصة';
  const priceUSD = product ? product.priceUSD : 49;
  const priceBTC = product ? product.priceBTC : '0.0008 BTC';

  const addresses = {
    btc: { label: 'محفظة البيتكوين (BTC)', addr: 'bc1q8dhtdrndxsl70e97t8grydfe6pjue37zrhzf6c', note: 'الدفع المجهول المباشر بدون كشف هوية' },
    usdt: { label: 'محفظة USDT (TRC-20)', addr: 'TLWdTjqqogkXNEXGiPWsGdjFP6ioycxeWW', note: 'شبكة Tron' },
    sol: { label: 'محفظة سولانا (SOL)', addr: '8tNBdGZneouj7MDJwX9GwLhujkEJTQHgUaJXTgRCsVyq', note: 'شبكة Solana' },
    evm: { label: 'محفظة EVM (ETH / BSC / MATIC)', addr: '0xDda2b17Dc7437700DE7EeFe564610a6a1976de6c', note: 'شبكات Ethereum, BSC, Polygon' },
    try: { label: 'الآيبان التركي (TRY)', addr: 'TR100001009010084013005001', note: 'المستفيد: Baran Avisat | بنك Ziraat | سويفت: TCZBTR2A' },
    usd: { label: 'آيبان الدولار الأمريكي (USD)', addr: 'TR800001009010084013005002', note: 'المستفيد: Baran Avisat | بنك Ziraat | سويفت: TCZBTR2A' }
  };

  const current = addresses[selectedMethod];

  const handleSendWhatsApp = () => {
    const text = `مرحباً أخي باران، قمت بإجراء عملية دفع لطلب:
المنتج: ${productName}
طريقة الدفع: ${current.label}
القيمة: $${priceUSD} (${priceBTC})
المعرف/إيصال التحويل: ${txHash || 'قيد الإرسال'}
اسم المشتري: ${buyerName || 'مجهول (Anonymous)'}
يرجى إرسال ملفات الأداة ومفتاح الترخيص.`;
    window.open(`https://wa.me/905313263722?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md" onClick={onClose}>
      <div className="relative bg-[#0d0d1e] border border-white/15 rounded-3xl max-w-xl w-full p-6 sm:p-8 max-h-[92vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-5 left-5 text-gray-400 hover:text-white transition-colors p-1">
          <X className="w-6 h-6" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-purple-600 flex items-center justify-center text-white">
            <Coins className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">إتمام الدفع واستلام الأداة</h3>
            <p className="text-xs text-purple-300">{productName} — ${priceUSD} ({priceBTC})</p>
          </div>
        </div>

        {/* Payment method selector */}
        <div className="mb-5">
          <label className="text-xs text-gray-400 font-semibold mb-2 block">اختر وسيلة الدفع المفضلة:</label>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {[
              { id: 'btc', label: '₿ بيتكوين' },
              { id: 'usdt', label: '💎 USDT' },
              { id: 'sol', label: '⚡ Solana' },
              { id: 'evm', label: '🔷 EVM' },
              { id: 'try', label: '₺ بنك تركي' },
              { id: 'usd', label: '$ بنك دولار' },
            ].map((m) => (
              <button
                key={m.id}
                onClick={() => setSelectedMethod(m.id as any)}
                className={`py-2 px-1 rounded-xl text-xs font-bold transition-all text-center ${
                  selectedMethod === m.id
                    ? 'bg-amber-500/20 border border-amber-500/60 text-amber-300 shadow-sm'
                    : 'bg-white/5 border border-white/5 text-gray-400 hover:text-white'
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>

        {/* Address & Note Box */}
        <div className="bg-black/60 border border-white/10 rounded-2xl p-4 mb-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-amber-400 font-semibold">{current.label}:</span>
            <CopyButton text={current.addr} label="نسخ" />
          </div>
          <div className="font-mono text-xs sm:text-sm text-white select-all break-all bg-white/5 p-2.5 rounded-xl mb-2" dir="ltr">
            {current.addr}
          </div>
          <p className="text-[11px] text-gray-400">{current.note}</p>
        </div>

        {/* Receipt input fields */}
        <div className="space-y-3 mb-6">
          <div>
            <label className="text-xs text-gray-300 mb-1 block">رقم أو هاش المعاملة / إيصال التحويل (TXID):</label>
            <input
              type="text"
              placeholder="مثال: bfc7a4... أو رقم الحوالة"
              value={txHash}
              onChange={(e) => setTxHash(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
            />
          </div>
          <div>
            <label className="text-xs text-gray-300 mb-1 block">الاسم أو الاسم المستعار (اختياري):</label>
            <input
              type="text"
              placeholder="اتركه فارغاً للدفع المجهول"
              value={buyerName}
              onChange={(e) => setBuyerName(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
            />
          </div>
        </div>

        {/* Action button */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleSendWhatsApp}
            className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-green-500/20"
          >
            <Phone className="w-4 h-4" />
            تأكيد الطلب واستلام الأداة عبر واتساب
          </button>
          <a
            href={`mailto:baranavisat@gmail.com?subject=طلب شراء: ${encodeURIComponent(productName)}&body=مرحباً، قمت بالدفع عبر ${encodeURIComponent(current.label)}.%0D%0Aمعرف التحويل: ${encodeURIComponent(txHash)}%0D%0Aالمشتري: ${encodeURIComponent(buyerName)}`}
            className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-all text-center"
          >
            <Mail className="w-4 h-4" />
            تأكيد عبر الإيميل
          </a>
        </div>
      </div>
    </div>
  );
}

// ============ MAIN APP ROOT ============
export default function App() {
  const [selectedProductForCheckout, setSelectedProductForCheckout] = useState<StoreProduct | null>(null);
  const [checkoutMethod, setCheckoutMethod] = useState<string>('btc');
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleOpenCheckout = (method: string = 'btc', product?: StoreProduct) => {
    setCheckoutMethod(method);
    setSelectedProductForCheckout(product || PRODUCTS_DATA[0]);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#050510] text-white selection:bg-purple-500 selection:text-white" dir="rtl" style={{ fontFamily: "'Tajawal', sans-serif" }}>
      <AnimatedBackground />
      <Navbar />
      <HeroSection />
      <StoreArsenalSection onSelectProduct={(p) => handleOpenCheckout('btc', p)} />
      <PaymentMethodsSection onOpenCheckout={(m) => handleOpenCheckout(m || 'btc')} />
      <ProjectsSection />
      <AIModelsSection />
      <ReferralsSection />
      <ContactSection />
      <Footer />

      {isCheckoutOpen && (
        <CheckoutModal
          product={selectedProductForCheckout}
          initialMethod={checkoutMethod}
          onClose={() => setIsCheckoutOpen(false)}
        />
      )}
    </div>
  );
}
