# 📚 EBOOK-SQUAD: AI-Powered Book Creation Framework

[![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)](https://github.com/axelpro-system/bestseller-squad)
[![Language](https://img.shields.io/badge/Language-Portuguese%20%7C%20English-blue?style=flat-square)](README.md)
[![Framework](https://img.shields.io/badge/Framework-Synkra%20AIOX-orange?style=flat-square)](https://github.com/axelpro-system/bestseller-squad)
[![License](https://img.shields.io/badge/License-All%20Rights%20Reserved-red?style=flat-square)](LICENSE)

An intelligent, agent-driven system for creating **bestselling ebooks** using specialized AI agents, structured workflows, and proven 7-step methodologies. Built on the **Synkra AIOX Framework** for autonomous AI orchestration.

**🌍 Languages:** Portuguese (PT-BR) | English (coming soon)

---

## 📋 Table of Contents

- [Quick Start](#-quick-start)
- [Features](#-features)
- [The 7-Step Methodology](#-the-7-step-methodology)
- [Directory Structure](#-directory-structure)
- [Installation](#-installation)
- [Usage Guide](#-usage-guide)
- [Completed Works](#-completed-works)
- [Documentation](#-documentation)
- [Learning Paths](#-learning-paths)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Quick Start

### For Bestseller Authors

Start creating your bestselling book in **3 steps**:

```bash
# 1. Navigate to the Bestseller Squad
cd squads/axelpro-system/bestseller-squad

# 2. Read the comprehensive beginner's guide
cat GUIA_INICIANTES.md

# 3. Start with market analysis
@market-analyst Analisar meu nicho de mercado...
```

**📖 Essential Resources:**
| Resource | Purpose | Time |
|----------|---------|------|
| [Guia-Iniciantes-Bestseller-Squad.docx](./guides/Guia-Iniciantes-Bestseller-Squad.docx) | Complete guide for first-time users | 30 min |
| [GUIA_INICIANTES.md](./squads/axelpro-system/bestseller-squad/GUIA_INICIANTES.md) | Detailed tutorial (10 sections) | 1 hour |
| [Squad README](./squads/axelpro-system/bestseller-squad/README.md) | Technical documentation | 45 min |

### For Developers & Framework Contributors

Explore the AIOX framework and extend its capabilities:

```bash
# Read the framework constitution
cat .aiox-core/constitution.md

# Check agent authority rules
cat .claude/rules/agent-authority.md

# Review agent workflows
ls .agent/workflows/
```

**🛠️ Developer Resources:**
| Resource | Purpose |
|----------|---------|
| [.claude/CLAUDE.md](./.claude/CLAUDE.md) | AI agent rules & guidelines |
| [.aiox-core/constitution.md](./.aiox-core/constitution.md) | Framework core principles |
| [.claude/rules/](./`. claude/rules/) | Detailed framework rules |

---

## ✨ Features

- ✅ **7-Step Methodology** - Proven process for ebook creation
- ✅ **7 Specialized Agents** - Expert AI agents for each phase
- ✅ **Automated Workflows** - Gate-controlled quality assurance
- ✅ **Complete Examples** - Real ebook projects included
- ✅ **Professional Tools** - DOCX/PDF generation scripts
- ✅ **Comprehensive Guides** - Portuguese & English documentation
- ✅ **Framework Governance** - Constitutional rules enforcement
- ✅ **Git Integration** - Built-in version control workflows

---

## 🚀 The 7-Step Methodology

Create your bestselling ebook using a **proven 7-step process**:

1. **📊 Market Analysis** - Research your target audience, competitors, and market opportunities
2. **💡 Promise Development** - Define your book's unique value proposition
3. **📐 Content Structure** - Organize your content strategically with clear architecture
4. **📝 Chapter Creation** - Generate high-quality, engaging chapter content
5. **✨ Engagement & Authority** - Enhance readability, add credibility, and establish authority
6. **🎨 Asset Strategy** - Create supporting graphics, visuals, and marketing materials
7. **🚀 Marketing Launch** - Prepare launch strategy, pricing, and distribution plan

**⏱️ Timeline:** 2-3 months with consistent weekly effort

---

## 🤖 The 7 Specialized Agents

Each phase is handled by an expert AI agent designed for that specific role:

| # | Agent | Role | Expertise |
|---|-------|------|-----------|
| 1️⃣ | 🔍 Market Analyst | Market research & insights | Competitive analysis, audience understanding |
| 2️⃣ | 💎 Promise Architect | Core book positioning | Value proposition, unique angle |
| 3️⃣ | 📋 Content Strategist | Information architecture | Structure, flow, organization |
| 4️⃣ | ✍️ Chapter Builder | Content creation | Writing, depth, examples, case studies |
| 5️⃣ | ⭐ Engagement Designer | Readability & interest | Hooks, storytelling, retention |
| 6️⃣ | 🏆 Authority Builder | Credibility & expertise | Evidence, citations, credentials |
| 7️⃣ | 🎯 Asset Strategist | Marketing materials | Visuals, cover, website, launch assets |

### How to Activate Agents

Use the `@agent-name` syntax to invoke agents:

```bash
# Analyze market
@market-analyst Analisar o mercado de livros sobre IA para profissionais jurídicos

# Define book promise
@promise-architect Definir a proposta de valor única para um ebook

# Structure content
@content-strategist Estruturar um livro com 14 capítulos sobre perícia aumentada
```

---

## 📁 Directory Structure

```
squad-ebook/
│
├── 📁 squads/                          ⭐ MAIN WORKSPACE
│   └── axelpro-system/
│       └── bestseller-squad/           (Follow GUIA_INICIANTES.md)
│           ├── GUIA_INICIANTES.md      ← Start here!
│           ├── README.md
│           ├── squad.yaml
│           ├── agents/                 (7 agent definitions)
│           ├── workflows/              (4-phase workflow)
│           ├── chapters/               (14 example chapters)
│           ├── data/                   (Project insights & metadata)
│           ├── templates/              (Content templates)
│           ├── checklists/             (Quality validation)
│           └── tasks/                  (Task workflows)
│
├── 📁 projects/                        ✅ EXAMPLE EBOOKS
│   └── ebooks/
│       ├── O-Perito-Aumentado-FINAL.docx      (115 KB - Word format)
│       ├── O-Perito-Aumentado-COMPLETO.pdf    (69 KB - PDF, 34 pages)
│       └── O-Perito-Aumentado-COMPLETO.txt    (201 KB - Plain text)
│
├── 📁 guides/                          📖 USER DOCUMENTATION
│   ├── Guia-Iniciantes-Bestseller-Squad.docx  (Professional guide)
│   └── Design-Systems-Engineering.md           (Advanced topic)
│
├── 📁 tools/                           🛠️ DEVELOPMENT TOOLS
│   ├── compile-complete-ebook.py       (Compile from chapters)
│   ├── convert-final-ebook-to-pdf.py   (DOCX → PDF)
│   └── create-professional-docx.js     (Generate DOCX)
│
├── 📁 .claude/                         ⚙️ CLAUDE CODE CONFIG
│   ├── CLAUDE.md                       (Agent rules & guidelines)
│   ├── rules/                          (Framework rules)
│   └── settings.json
│
├── 📁 .aiox-core/                      🏗️ FRAMEWORK CORE
│   ├── constitution.md                 (Core principles)
│   ├── core/                           (Framework engine)
│   └── development/                    (Development templates)
│
├── 📁 .agent/                          🤖 AGENT CONFIGS
│   └── workflows/                      (Agent workflow definitions)
│
├── 📄 README.md                        (This file)
├── 📄 .gitignore
└── 📄 package.json
```

---

## ⚡ Installation

### Requirements

- **Node.js** 16+ (for DOCX generation)
- **Python** 3.8+ (for compilation & PDF conversion)
- **npm** (for package management)
- **Git** (for version control)

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/axelpro-system/bestseller-squad.git
cd squad-ebook

# 2. Install dependencies
npm install

# 3. Verify Python environment
python --version  # Should be 3.8+
pip --version

# 4. Navigate to Bestseller Squad
cd squads/axelpro-system/bestseller-squad

# 5. Read the guide
cat GUIA_INICIANTES.md
```

---

## 📖 Usage Guide

### For Your First Ebook

Follow these steps in sequence:

#### Step 1: Understand the System (15 minutes)
```bash
cd squads/axelpro-system/bestseller-squad
cat GUIA_INICIANTES.md
```

#### Step 2: Run Market Analysis (1-2 hours)
```
@market-analyst Analisar meu mercado específico e público-alvo...
```

#### Step 3: Develop Your Promise (1-2 hours)
```
@promise-architect Definir a proposta de valor e ângulo único do meu livro...
```

#### Step 4: Structure Content (2-3 hours)
```
@content-strategist Estruturar o conteúdo em capítulos bem organizados...
```

#### Step 5-7: Create & Launch
Continue through phases 5-7 following the methodology.

### Using Development Tools

```bash
# Compile all chapters into a single text file
python tools/compile-complete-ebook.py

# Convert DOCX to PDF
python tools/convert-final-ebook-to-pdf.py

# Generate professional DOCX from text
node tools/create-professional-docx.js
```

---

## 🚀 The Bestseller Squad System

### The 7 Steps:


## 📖 Completed Works

### O Perito Aumentado
**Status:** ✅ Complete (30,382 words - 14 chapters)

Portuguese ebook about using Claude AI for judicial expertise.

**Available in:**
- 📄 DOCX - Professional formatted with TOC
- 📕 PDF - Ready for distribution
- 📝 TXT - Full content extraction

**Location:** `projects/ebooks/`

---

## 🛠️ Tools & Scripts

Convert markdown chapters to professional documents:

```bash
# Compile chapters
python tools/compile-complete-ebook.py

# Convert to PDF
python tools/convert-final-ebook-to-pdf.py

# Create DOCX
node tools/create-professional-docx.js
```

### Requirements
- Node.js 16+
- Python 3.8+
- npm

---

## 📚 Documentation

### 🎯 For Squad Users

Start with these resources in order:

1. **[GUIA_INICIANTES.md](./squads/axelpro-system/bestseller-squad/GUIA_INICIANTES.md)** (10 sections)
   - What is Bestseller Squad
   - How the 7 agents work
   - Detailed 7-step process
   - Complete examples

2. **[Guia-Iniciantes-Bestseller-Squad.docx](./guides/Guia-Iniciantes-Bestseller-Squad.docx)** (Professional guide)
   - Formatted Word document
   - Printable version
   - Quick reference

3. **[Squad README](./squads/axelpro-system/bestseller-squad/README.md)**
   - Technical details
   - Configuration options
   - Troubleshooting

### 🛠️ For Framework Contributors

Deep dive into the AIOX framework:

| Document | Purpose | Audience |
|----------|---------|----------|
| [.claude/CLAUDE.md](./.claude/CLAUDE.md) | Agent rules & guidelines | Framework developers |
| [.aiox-core/constitution.md](./.aiox-core/constitution.md) | Core principles & gates | All contributors |
| [.claude/rules/](./. claude/rules/) | Detailed framework rules | Experienced developers |
| [.aiox-core/core/README.md](./.aiox-core/core/README.md) | Framework architecture | System architects |

### 📖 Documentation Map

```
Documentation Structure:
├── User Level
│   ├── GUIA_INICIANTES.md (Portuguese)
│   ├── guides/*.docx (Formatted)
│   └── squads/*/README.md (Squad-specific)
│
├── Developer Level
│   ├── .claude/CLAUDE.md
│   ├── .claude/rules/*.md
│   └── .aiox-core/core/README.md
│
└── Framework Level
    ├── .aiox-core/constitution.md
    ├── .aiox-core/core/ (Engine)
    └── .agent/workflows/ (Agent configs)
```

---

## 🎓 Learning Paths

Choose your path based on your goals:

### 📔 Path 1: Create Your First Ebook (3-4 weeks)

Perfect for: Content creators, authors, entrepreneurs

```
Week 1: Learn the System
  ├─ Read GUIA_INICIANTES.md (1 hour)
  ├─ Review Guia-Iniciantes-Bestseller-Squad.docx (30 min)
  └─ Explore squad structure (30 min)

Week 2-3: Execute Steps 1-4
  ├─ Run @market-analyst
  ├─ Run @promise-architect
  ├─ Run @content-strategist
  └─ Run @chapter-builder

Week 4: Execute Steps 5-7 & Launch
  ├─ Run @engagement-designer
  ├─ Run @authority-builder
  └─ Run @asset-strategist
```

### 🔧 Path 2: Extend the Framework (2-3 weeks)

Perfect for: Developers, system architects

```
Day 1-2: Understand Core
  ├─ Read AIOX Constitution
  ├─ Review agent authority rules
  └─ Explore .agent/workflows/

Day 3-4: Customize
  ├─ Create custom agents
  ├─ Modify workflows
  └─ Update templates

Day 5+: Contribute
  └─ Submit improvements
```

### 🎖️ Path 3: Master the System (4-6 weeks)

Perfect for: Leaders, architects, strategic users

```
Complete: Path 1 (3-4 weeks)
  └─ Create a working ebook

Then: Path 2 (2-3 weeks)
  └─ Understand framework architecture

Finally: Deep Dive
  ├─ Review all documentation
  ├─ Understand constitutional gates
  ├─ Master agent orchestration
  └─ Lead team implementations
```

---

## 📊 Project Status

| Component | Status | Location | Notes |
|-----------|--------|----------|-------|
| 🎯 Bestseller Squad | ✅ Active | `squads/axelpro-system/bestseller-squad/` | Ready to use |
| 📖 Beginner Guides | ✅ Complete | `guides/` | Markdown + DOCX |
| 🛠️ Tools & Scripts | ✅ Complete | `tools/` | Python + Node.js |
| 🏗️ Framework Core | ✅ Stable | `.aiox-core/` | Non-negotiable rules |
| 🤖 AI Agents | ✅ Configured | `.agent/` | 7 agents ready |
| 📚 Example Projects | ✅ Available | `projects/ebooks/` | 3 formats: DOCX/PDF/TXT |
| 📚 Documentation | ✅ Complete | Root + subdirs | Portuguese + English |

---

## ❓ FAQ

### How long does it take to create an ebook?
**2-3 months** with consistent weekly effort following the 7-step methodology.

### Do I need AI experience?
**No!** The system is designed for authors and content creators. Just follow the GUIA_INICIANTES.md step-by-step.

### Can I use this for non-Portuguese content?
**Yes!** The framework is language-agnostic. All agents can work in any language.

### What if I only have 4 weeks?
Use the **Fast Track** (YOLO mode) - follow the 7 steps without extensive revision cycles. Quality gates are optional.

### How do I customize it for my book type?
1. Copy the `bestseller-squad` directory
2. Customize `squad.yaml` with your domain
3. Modify agent prompts in `agents/` directory
4. Update `data/` files with your information
5. Follow the 7 steps

### Where's the code for the agents?
The agents are defined in `.agent/workflows/` and customize behavior through `.claude/CLAUDE.md` rules.

---

## 🤝 Contributing

We welcome contributions to improve the system!

### Contribution Areas

- 🌍 **Language Translations** - Help translate guides to other languages
- 🎨 **Design Templates** - Create new visual templates
- 📊 **Market Analysis Examples** - Add research templates
- 🧪 **Testing & QA** - Improve quality assurance
- 📝 **Documentation** - Enhance existing docs
- 🔧 **Tools & Scripts** - Optimize development tools

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit with clear messages (`git commit -m 'Add amazing feature'`)
5. Push to your branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Code of Conduct

- Be respectful and inclusive
- Provide clear commit messages
- Follow the existing code style
- Test your changes thoroughly

---

## 📞 Support & Resources

### Getting Help

1. **First Time?** → Read [GUIA_INICIANTES.md](./squads/axelpro-system/bestseller-squad/GUIA_INICIANTES.md)
2. **Got Questions?** → Check [Squad README](./squads/axelpro-system/bestseller-squad/README.md)
3. **Technical Issues?** → See [.claude/CLAUDE.md](./.claude/CLAUDE.md)
4. **Framework Questions?** → Review [AIOX Constitution](./.aiox-core/constitution.md)

### Useful Links

- 🌐 **Repository:** https://github.com/axelpro-system/bestseller-squad
- 📖 **Framework Docs:** See `.aiox-core/core/README.md`
- 🎓 **Learning Resources:** Start with GUIA_INICIANTES.md
- 🛠️ **Technical Details:** Check `.claude/rules/` directory

---

## 📜 License

**Synkra AIOX Framework**
All Rights Reserved © 2026

The framework, core system, and methodology are proprietary. Generated ebooks and customizations are owned by their creators.

---

## 🎉 Success Stories

### "O Perito Aumentado"
A **30,382-word Portuguese ebook** about using Claude AI for judicial expertise.

**Completed in:** 1 session
**Format:** DOCX (115 KB) + PDF (69 KB) + TXT (201 KB)
**Chapters:** 14 comprehensive chapters
**Status:** Ready for distribution

---

## 🚀 Ready to Start?

Choose your path:

```
Are you a content creator/author?
  → Start with: GUIA_INICIANTES.md
  → Then use: @market-analyst

Are you a developer?
  → Start with: .claude/CLAUDE.md
  → Then explore: .aiox-core/constitution.md

Are you a framework contributor?
  → Start with: .aiox-core/constitution.md
  → Then review: .claude/rules/
```

---

## 📈 Roadmap

- ✅ **Phase 1:** Core framework (complete)
- ✅ **Phase 2:** Bestseller Squad (complete)
- ✅ **Phase 3:** Documentation & Guides (complete)
- 🚀 **Phase 4:** Multi-language support (in progress)
- 🔜 **Phase 5:** Advanced customization tools
- 🔜 **Phase 6:** Community templates & examples

---

**Last Updated:** March 12, 2026
**Version:** 2.0 (Production Ready)
**Maintained By:** Synkra AIOX Team

---

<div align="center">

### 🌟 Star us on GitHub if you find this helpful!

[⭐ GitHub Repository](https://github.com/axelpro-system/bestseller-squad)

</div>
