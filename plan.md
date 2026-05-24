# Derek Yendoh — Portfolio Website Design Plan
**Role:** AI/ML Software Engineer · HealthTech · EdTech  
**Aesthetic:** Dark & cinematic (Vercel/Linear-inspired)  
**Audience:** General & open — engineers, founders, clinicians, educators, recruiters, collaborators  
**Purpose:** Personal showcase — skills, thinking, and real-world impact

---

## What I Know About You (Researched)

From your GitHub:
- You're based in **Accra, Ghana**
- Your standout project is **DiaTrack** — a full-stack clinical decision support system for Type 2 Diabetes risk prediction, built with FastAPI, Next.js, Flutter, PostgreSQL, and a stacked ensemble ML model (CatBoost + HistGradientBoosting + TabNet → XGBoost meta-learner) with SHAP interpretability. AUC of 0.978.
- You have a **Machine Learning mentorship repo** from Pyclub — HuggingFace model card enrichment and feature engineering work
- You have a web design repo (`Exponent-Web-design`) showing frontend exposure
- Your existing GitHub Pages site is live at `yendoh-derek.github.io`
- You work across **Python, TypeScript, Dart (Flutter), HTML/SCSS**

This is more than enough to build a compelling story. DiaTrack alone is a flagship project — it shows HealthTech focus, full-stack ML, production deployment (Render), and real clinical thinking.

---

## Strategic Positioning

Your identity is not just "ML engineer." It's more specific and more interesting:

> *"I build AI systems that solve real problems in health and education — from model to production."*

That framing works for:
- A clinician or hospital CTO evaluating a HealthTech collaboration
- A startup founder looking for an ML engineer who ships, not just researches
- A recruiter at a HealthTech or EdTech company
- An engineer or researcher who wants to understand your work
- A fellow Ghanaian/African tech builder looking for inspiration

**Own your context.** Building DiaTrack from Accra, Ghana — for a local clinical problem, with a dual-language future roadmap (English + Twi) — is a differentiator, not a limitation. Lead with it.

---

## Site Architecture

Single-page, smooth scroll, deep-linked sections. Mobile-first.

```
/ (root)
├── #hero          — Who you are, instantly
├── #about         — Your story and what drives you
├── #projects      — The work (DiaTrack leads)
├── #skills        — Your technical toolkit
├── #experience    — Education + community (Pyclub)
└── #contact       — One-click reach
```

> **Note on #writing:** Hold this section. You don't have public posts yet. Add it when you have 2–3 pieces ready. An empty writing section hurts more than no section.

---

## Section-by-Section Plan

---

### 1. `#hero` — Who You Are

**Goal:** Communicate your identity and domain focus in under 5 seconds, to anyone — technical or not.

#### Layout
- Full viewport height
- Left: your name large, identity tags below, CTAs at the bottom
- Right: animated visual — a simplified, stylised version of the DiaTrack pipeline (Patient → ML Engine → Risk Score → Clinician). Not a code block — a visual. This immediately communicates HealthTech + ML to a non-technical visitor.

#### Copy (exact wording suggestions)

**Name:**
```
Derek Yendoh
```

**Headline (display, large):**
```
AI/ML Software Engineer
```

**Sub-identity line (smaller, muted, monospace font):**
```
HealthTech  ·  EdTech  ·  MLOps
```

**One-line pitch (body text, below subline):**
```
I build AI systems that work in the real world —
from model training to clinical deployment.
```

**Why this works:** It's jargon-light enough for a founder or clinician, but specific enough for a technical reviewer. "Clinical deployment" signals seriousness without being impenetrable.

#### CTAs
- `See My Work` → scrolls to #projects (primary)
- `GitHub ↗` → `https://github.com/Yendoh-Derek` (secondary, opens new tab)

#### Background
- Base: `#080808`
- Animated noise grain texture overlay (CSS or SVG feTurbulence, opacity ~5%)
- Subtle animated particle graph fading in slowly — nodes loosely connected, low opacity (~0.06). Pure atmosphere.

---

### 2. `#about` — Your Story

**Goal:** Make the visitor understand *who* Derek is, not just *what* he builds. This section converts a curious visitor into someone who wants to collaborate or hire.

#### Layout
- Left column (60%): editorial paragraphs, pull quote
- Right column (40%): 3–4 "snapshot" items — concise facts that anchor your identity

#### Copy guidance

**Opening paragraph:**
Don't open with "I am a software engineer." Open with context.

*Suggested draft:*
> I'm a software engineer and machine learning practitioner from Accra, Ghana. My work sits at the intersection of AI research and real-world systems — building tools that don't just predict, but actually help people make decisions.

**Second paragraph — the DiaTrack story in plain language:**
> My most significant project to date is DiaTrack, a clinical decision support system for Type 2 Diabetes risk prediction. I built it end-to-end: the ML pipeline, the FastAPI backend, the clinician dashboard, and the patient-facing mobile app. It's the kind of problem that doesn't fit neatly into a Kaggle competition — it required thinking about doctors, patients, data privacy, and deployment all at once.

**Third paragraph — vision and domain focus:**
> I'm especially interested in AI applications in healthcare and education — domains where the gap between what's technically possible and what's actually deployed is still very wide. I want to help close that gap.

**Pull quote (large type, breakout):**
> "The gap between what AI can do and what actually helps people — that's where I want to work."

#### Right column snapshot items:
```
📍  Accra, Ghana
🎓  [Your degree/institution — fill in]
🔬  Focus: HealthTech · EdTech
🌍  Building for African contexts
```

---

### 3. `#projects` — The Work

**Goal:** Show real, complete projects with enough depth that any visitor — technical or not — understands what you built and why it matters.

**Critical framing rule:** Lead with the problem and the impact. The technology is supporting evidence, not the headline.

---

#### Featured Project: DiaTrack

This is your flagship. Give it the most space.

**Card header:**
```
[HealthTech]  [Featured]
─────────────────────────────────────────
DiaTrack — Clinical Decision Support for Type 2 Diabetes
```

**Non-technical one-liner (for founders, clinicians, general visitors):**
```
An AI system that helps clinicians assess diabetes risk — and helps
patients understand their own health — built for real clinical use.
```

**Technical one-liner (for engineers, shown on expand):**
```
Stacked ensemble (CatBoost + HistGradientBoosting + TabNet → XGBoost)
with SHAP interpretability, served via FastAPI, with a Next.js clinician
dashboard and Flutter patient app.
```

**Key result callout (large, accent colour):**
```
AUC: 0.978   ·   Accuracy: 98%
```

**Stack tags:** `PyTorch` `FastAPI` `Next.js` `Flutter` `PostgreSQL` `SHAP` `XGBoost` `Render`

**Links:** `[GitHub: Backend ↗]` `[GitHub: Web App ↗]` `[GitHub: Mobile App ↗]`

**Expanded write-up (revealed on click):**

Section: *The Problem*
> Type 2 Diabetes is a growing crisis, especially in sub-Saharan Africa, where early diagnosis infrastructure is limited. DiaTrack was built to give clinicians a fast, explainable risk assessment tool — and to give patients a direct window into their own health data.

Section: *What I Built*
> Three interconnected systems: a clinician-facing web dashboard (Next.js) for patient management and risk review; a patient-facing mobile app (Flutter) for viewing predictions and recommendations; and a FastAPI backend handling authentication, database operations, ML inference, and SHAP explanations. The ML pipeline uses a stacked ensemble approach — base models generate predictions which feed into an XGBoost meta-learner — with a LightGBM surrogate for SHAP interpretability.

Section: *The Hard Part*
> Getting explainability right was the most challenging piece. A risk score alone isn't useful to a clinician — they need to know *why*. Using a LightGBM surrogate model to generate SHAP values that were faithful enough to the stacked ensemble's logic, while still being fast enough for real-time API responses, required significant iteration.

Section: *What's Next*
> Automated lab data ingestion, offline prediction mode for the mobile app, and multi-language support (English + Twi) for broader accessibility in Ghana.

---

#### Secondary Projects

**Project 2: ML Model Card Enrichment (Machine-Learning repo)**

```
[ML Research]  [Open Source]
─────────────────────────────────────────
HuggingFace Model Card Feature Engineering
```

**Non-technical one-liner:**
```
A pipeline that automatically enriches AI model documentation
from the HuggingFace Hub — making models easier to discover and evaluate.
```

**Technical one-liner:**
```
Python pipeline using the HuggingFace API for metadata extraction,
feature engineering (binning, ratios, risk flags), and parquet-based storage.
```

**Stack tags:** `Python` `HuggingFace` `Pandas` `Feature Engineering` `Jupyter`

**Context note:** *Built during Pyclub Mentorship Program — a peer ML learning community.*

---

**Project 3: [EdTech project — placeholder]**

If you have or are building anything EdTech-related (a tutoring tool, adaptive quiz system, learning analytics dashboard), add it here. Even a work-in-progress with a clear problem statement is better than an empty slot.

If not yet, label it clearly:
```
[EdTech]  [In Progress]
─────────────────────────────────────────
[Project Name] — Coming Soon
Brief description of what you're building and why.
```

This signals direction and intent. It's honest and forward-looking.

---

**Project count rule:** 3 is the right number right now. DiaTrack as flagship, ML repo as depth signal, one more (EdTech ideally). Do not pad with placeholder repos.

---

### 4. `#skills` — The Toolkit

**Goal:** Scannable by both a technical hiring manager and a non-technical founder. Clusters tell a story; a flat tag cloud does not.

#### Layout
Three clusters. Monospaced font for tool names. Badge pills with hover glow. No percentage bars.

| Cluster Label | Tools |
|---|---|
| **Machine Learning** | PyTorch, Scikit-learn, XGBoost, CatBoost, TabNet, SHAP, HuggingFace Transformers |
| **MLOps & Backend** | FastAPI, MLflow, Docker, PostgreSQL, Alembic, Pydantic, Render, Uvicorn |
| **Frontend & Mobile** | Next.js, TypeScript, Tailwind CSS, Flutter, Dart, HTML/SCSS |

#### Non-technical reading
Consider adding a one-line plain-English label above each cluster for general visitors:

```
Machine Learning       → "The AI and prediction layer"
MLOps & Backend        → "The infrastructure that makes it run"
Frontend & Mobile      → "The interfaces people interact with"
```

These can be shown subtly in muted text — they help a clinician or educator understand what each cluster *does*, not just what it's called.

---

### 5. `#experience` — Background

**Goal:** Quick credibility pass. Education, community, any formal roles.

#### Layout
Vertical timeline, left-aligned dates, right-aligned content. Clean, no decoration except the thin glowing timeline line.

#### What to include
- Your degree / institution (fill in)
- Pyclub Mentorship Program — frame this as: *"Peer ML learning community — contributed curriculum notebooks and mentored participants in Python and ML fundamentals."* It's real community involvement, not just a hobby.
- Any internships, contract roles, or collaborations from LinkedIn

#### Copy tone
Short and factual. 1–2 lines per entry maximum. Let the projects do the heavy lifting.

---

### 6. `#contact` — The Close

**Goal:** Zero friction. Works for a recruiter, a clinician wanting to collaborate, a fellow builder, or a student.

#### Layout
Centred, generous whitespace. Not a form.

#### Copy

**Opening line:**
```
Let's build something meaningful.
```

**Sub-line (muted text):**
```
Open to collaborations in HealthTech, EdTech, and applied ML —
and always happy to talk to fellow builders.
```

**Links:**
- Email with one-click copy button
- `GitHub ↗` → `https://github.com/Yendoh-Derek`
- `LinkedIn ↗` → `https://www.linkedin.com/in/derek-yendoh-4a6174275`

**No contact form unless you build the FastAPI backend for it** — and if you do, one field only (message + email).

---

## Edge Cases & Copy Rules

These apply across every section of the site.

### Audience Translation Rule
For every piece of technical copy, ask: *"Would a clinician or school administrator understand this?"* If not, add a plain-English companion line. You don't have to dumb it down — just add a layer.

**Example:**
- Technical: `Stacked ensemble with SHAP interpretability`
- Plain: `An AI model that shows clinicians not just the prediction, but the reasoning behind it`

Show both. Let the visitor choose their depth.

### Jargon Boundaries
**Use freely** (general tech-literate audience will know): AI, machine learning, API, model, dashboard, mobile app, prediction, deployment  
**Explain briefly**: ensemble model, SHAP, MLOps, stacked classifier  
**Avoid without context**: meta-learner, ASGI, Alembic, Uvicorn, parquet — these are implementation details, not portfolio copy

### Tense & Voice Rules
- Project descriptions: **past tense** for what you built, **present tense** for what it does
  - ✅ "I built DiaTrack to help clinicians assess diabetes risk. It uses a stacked ensemble model..."
  - ❌ "I am building DiaTrack. It was using ensemble models..."
- About section: **present tense** throughout — you're describing who you are *now*
- Never write "I am passionate about..." — it's filler. Show the passion through specifics.
- Never write "I am proficient in..." — just list the tools and let the projects prove it.

### Ghanaian Context — Own It, Don't Hide It
- Accra, Ghana in your About section is a strength. You're building for a real local problem (diabetes in sub-Saharan Africa). Say that.
- The Twi language roadmap in DiaTrack is a detail that makes your project memorable. Include it in the write-up.
- Don't sanitise your location into "West Africa" or leave it out entirely.

### Mobile-first Edge Cases
- Hero terminal animation: **disable on mobile**, replace with a static code block image. Typewriter effects on mobile feel slow and block reading.
- Project card expand: On mobile, opens a **full-screen slide-up sheet**, not an inline expand or modal.
- Skills section: On mobile, clusters stack vertically. Badge pills wrap to 2 per row minimum.
- Navigation: Hamburger menu on mobile. Nav links hidden until toggled. Close on scroll.
- Contact links: Email, GitHub, LinkedIn are **large tap targets** (minimum 44×44px). No tiny icons.

### Empty State Rules
- `#writing` section: **Do not show** until you have 2+ posts. Hide the section entirely, not show "Coming soon."
- `#projects` EdTech slot: If empty, either fill with a clear "In Progress" card or remove the third slot entirely. **Never show an empty card.**
- Project GitHub links: If a repo is private or incomplete, link to your GitHub profile instead and note "code available on request" — don't link to a 404.

### Accessibility Minimum
- All text on dark background must pass **WCAG AA contrast** (4.5:1 ratio). `#F0F0F0` on `#080808` passes. `#888888` on `#111111` does NOT — use only for decorative/non-essential text.
- All interactive elements (cards, buttons, links) must be keyboard-navigable with visible focus ring.
- Project expand/modal must trap focus and close on `Escape`.
- Images (if any): always include `alt` text.

---

## Design System

### Colour Palette
```css
--bg-base:        #080808;
--bg-surface:     #111111;
--bg-elevated:    #191919;
--border:         #222222;
--border-light:   #2e2e2e;

--text-primary:   #F0F0F0;
--text-secondary: #999999;   /* Only for non-essential labels */
--text-muted:     #555555;   /* Decorative only — fails contrast for body */

--accent-cyan:    #00E5FF;   /* Primary: links, CTAs, active states */
--accent-violet:  #7B61FF;   /* Secondary: HealthTech/research highlights */
--accent-glow:    rgba(0, 229, 255, 0.10);
```

**Domain colour mapping:**
- `HealthTech` tag → accent violet (`#7B61FF`)
- `MLOps` tag → accent cyan (`#00E5FF`)
- `EdTech` tag → soft amber (`#F5A623`) — warm, educational feel
- `Featured` badge → white on `#1a1a1a` with cyan border

### Typography
```
Display / Hero:   "Syne"           — geometric, bold, memorable
                  Weights: 700, 800

Body:             "DM Sans"        — clean, readable
                  Weights: 400, 500

Monospace:        "JetBrains Mono" — code, skill badges, tags
                  Weights: 400, 500
```

**Google Fonts import:**
```html
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

**Type scale:**
```css
--text-hero:    clamp(48px, 7vw, 88px);
--text-display: clamp(32px, 4.5vw, 52px);
--text-title:   clamp(18px, 2vw, 26px);
--text-body:    16px;
--text-small:   14px;
--text-mono:    13px;
--line-height-body: 1.7;   /* Generous — improves readability for non-native English readers */
```

### Layout & Spacing
```css
--max-width:       1100px;
--section-pad-y:   110px;
--section-pad-y-mobile: 72px;
--card-pad:        28px;
--gap-grid:        20px;
--radius-card:     12px;
--radius-badge:    6px;
```

**Navigation:**
- Fixed top, `64px` height
- Transparent → `rgba(8,8,8,0.88)` + `backdrop-filter: blur(14px)` on scroll (10px threshold)
- Logo: initials `DY` or full name in Syne 700, left-aligned
- Links right: `About`, `Projects`, `Skills`, `Contact`
- Active section: `2px` cyan underline slides in from left

---

## Animation Plan

### Philosophy
> Every animation earns its place. It either directs attention, signals state change, or creates breathing room. Nothing performs for its own sake.

- Duration range: `250ms–600ms` for UI, `700ms–1000ms` for section reveals
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` — quick out, smooth landing
- **No bounce, no spring, no elastic** — this is a professional technical portfolio

---

### Page Load Sequence

```
0ms     → Nav fades in                    (opacity 0→1, 250ms)
80ms    → Name slides up + fades in       (translateY 20px→0, 550ms)
200ms   → Headline tag line               (same)
350ms   → Sub-identity tags               (same, stagger 60ms each)
500ms   → CTA buttons                     (same)
700ms   → Hero visual (pipeline diagram)  (opacity 0→1, 900ms, slow fade)
900ms   → Particle background             (opacity 0→0.06, 1200ms)
```

**CSS implementation:**
```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

.hero-name    { animation: fadeUp 550ms cubic-bezier(0.16,1,0.3,1) 80ms both; }
.hero-title   { animation: fadeUp 550ms cubic-bezier(0.16,1,0.3,1) 200ms both; }
.hero-tags    { animation: fadeUp 550ms cubic-bezier(0.16,1,0.3,1) 350ms both; }
.hero-ctas    { animation: fadeUp 550ms cubic-bezier(0.16,1,0.3,1) 500ms both; }
```

**Mobile override:** Reduce `translateY` to `12px`. Disable particle background entirely on mobile (performance).

---

### Scroll-triggered Reveals

All sections animate in as they enter the viewport using `IntersectionObserver`.

```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target); // animate once only
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
```

```css
.reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 500ms ease, transform 500ms cubic-bezier(0.16,1,0.3,1);
}
.reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}
```

**Per-section stagger:**

| Section | Behaviour |
|---|---|
| `#about` | Paragraph block fades up as one unit. Pull quote fades up 120ms after. |
| `#projects` | Featured card first (no delay). Grid cards stagger 90ms each. |
| `#skills` | Each cluster label fades in, then badges stagger 40ms per badge. |
| `#experience` | Timeline items reveal top-to-bottom, 100ms stagger. |
| `#contact` | Simple fade-in, no translate. |

**Mobile:** Use `threshold: 0.05` (trigger earlier, since viewport is smaller). Reduce `translateY` to `16px`.

---

### Hero Visual Animation (Pipeline Diagram)

Instead of a terminal code block, your hero visual is a simplified animated pipeline:

```
[ Patient Data ]  →  [ ML Engine ]  →  [ Risk Score ]  →  [ Clinician ]
```

**Animation:**
- Nodes fade in left-to-right, 200ms stagger
- Arrows draw in from left (SVG `stroke-dashoffset` animation)
- A subtle pulse on `[ ML Engine ]` node (scale 1→1.04→1, infinite, 2s interval)
- Entire diagram at ~70% opacity — present but not competing with your name

**Why this instead of code:** DiaTrack is your story. A HealthTech pipeline visual immediately communicates your domain to a clinician or founder who doesn't read code. Technical visitors will click through to GitHub.

---

### Project Card Interactions

**Hover:**
```css
.project-card {
  border: 1px solid var(--border);
  transition: border-color 200ms ease, transform 200ms ease, box-shadow 200ms ease;
}
.project-card:hover {
  border-color: rgba(0, 229, 255, 0.35);
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 229, 255, 0.07);
}
```

**Expand (click to open write-up):**
- Smooth slide-up modal on desktop: `transform: translateY(100%) → translateY(0)`, `400ms ease-out`
- Backdrop: `rgba(0,0,0,0.75)` + `backdrop-filter: blur(8px)`, fades in over `200ms`
- Modal content fades in `150ms` after modal finishes opening
- Close on: `✕` button, `Escape` key, clicking backdrop
- On mobile: full-screen sheet, slides up from bottom edge

---

### Skill Badge Hover
```css
.skill-badge {
  font-family: 'JetBrains Mono', monospace;
  border: 1px solid var(--border-light);
  color: var(--text-secondary);
  transition: all 180ms ease;
}
.skill-badge:hover {
  border-color: rgba(0, 229, 255, 0.45);
  color: var(--accent-cyan);
  box-shadow: 0 0 10px rgba(0, 229, 255, 0.12);
}
```

---

### Navigation Active State (Scroll Spy)

As the user scrolls, the active section nav link updates:
```javascript
// Use IntersectionObserver on each section, update nav link class
// Active: full opacity + 2px cyan underline slides in from left (200ms)
// Inactive: 60% opacity, no underline
```

---

### Custom Cursor (Optional, High Impact)
- Small `5px` white dot follows mouse
- On hover over cards/links: expands to `28px` hollow ring, cyan border, `200ms` transition
- On click: ring pulses to `0.75` scale, `100ms`
- **Disable on touch/mobile devices** via `@media (pointer: coarse)`

---

## Tech Stack

| Concern | Recommendation | Reason |
|---|---|---|
| Framework | **Next.js** (App Router) | You already used it on DiaTrack Web App. Zero new learning curve. Best SEO. |
| Styling | **Tailwind CSS** + custom CSS for animations | You already use it. Consistent with your existing work. |
| Animations | **Framer Motion** | Best React animation library. Handles scroll reveals cleanly. |
| Deployment | **Vercel** | Free, instant, zero config. You're already likely familiar. |
| Contact | Your own **FastAPI** microservice | Real signal — you're using your own stack as infrastructure. |
| Domain | `derekyendoh.dev` or `yendohderek.com` | `.dev` signals engineer. Check availability. |

---

## Build Order

```
1.  Design tokens (CSS variables — all colours, fonts, spacing defined first)
2.  Global styles + typography
3.  Navigation (fixed, scroll behaviour)
4.  Hero section — name, headline, pipeline visual, CTAs
5.  Projects section — DiaTrack featured card first, then grid
6.  Project expanded write-up modal
7.  Skills section
8.  About section
9.  Experience timeline
10. Contact section
11. Animation pass — load sequence, scroll reveals, card hovers
12. Mobile responsive pass (test at 375px, 430px, 768px)
13. Accessibility pass (keyboard nav, contrast, focus rings)
14. Performance pass (Lighthouse > 90, lazy images)
15. SEO: meta tags, Open Graph image, sitemap
16. Deploy to Vercel, connect custom domain
```

---

## Launch Checklist

```
[ ] Favicon (DY monogram, dark background, cyan accent)
[ ] Open Graph image: 1200×630px — your name + "AI/ML Software Engineer · HealthTech · EdTech"
[ ] Meta description (~155 chars): "Derek Yendoh — AI/ML Software Engineer from Accra, Ghana. Building intelligent systems for HealthTech and EdTech."
[ ] All GitHub links tested and working
[ ] LinkedIn link tested
[ ] Email copy button works on mobile
[ ] No horizontal scroll on any viewport
[ ] Keyboard navigation tested end-to-end
[ ] Modal closes on Escape
[ ] Particle background disabled on mobile
[ ] Lighthouse score: Performance > 88, Accessibility > 95
[ ] Custom domain live and HTTPS
[ ] Google Search Console submitted
```

---

## What Makes This Site Derek's (Not a Template)

1. **DiaTrack pipeline as hero visual** — not a generic code block. It immediately says HealthTech.
2. **Dual-layer project copy** — plain English + technical detail. Works for clinicians AND engineers.
3. **Accra, Ghana — named and owned** — not hidden. The African context and Twi roadmap are memorable differentiators.
4. **Domain colour coding** — HealthTech in violet, EdTech in amber, MLOps in cyan. Tells a visual story of focus areas.
5. **No vanity metrics** — AUC 0.978 is real. Use it. Don't pad with fake percentage skill bars.

---

*Plan version: 2.0 — Personalised for Derek Yendoh*  
*Based on: GitHub profile review, DiaTrack project analysis*  
*Aesthetic: Dark & cinematic · Syne + DM Sans + JetBrains Mono*