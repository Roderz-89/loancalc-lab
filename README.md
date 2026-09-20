# LoanCalc Lab

Calculator-first personal loan, EMI & debt payoff decision lab (Phase 1 foundation).

**Stack:** Next.js App Router · TypeScript · Tailwind CSS v4 · `en-GB`  
**Accent:** `#c8102e` (sparingly) · soft `#fde8ec`  
**Site path on box:** `/workspace/loancalc-lab`  
**Domain:** [loancalclab.net](https://loancalclab.net) (canonical; `.com` is taken)

## Features (Phase 1)

- 7 working calculators (real reducing-balance maths, not stubs):
  - Personal loan / EMI payment
  - Amortisation schedule
  - Debt consolidation break-even
  - Snowball vs avalanche
  - Refinance break-even
  - APR / true cost of fees
  - Extra payment / early payoff
- Country modes: US / India-SEA / AU / CA / UK (currency + payment labels)
- Guides (6), glossary (+ term pages), About / Contact
- Trust/legal: Privacy, Cookie, Terms, Editorial, Advertising, Affiliate, Calculator disclaimer
- SEO: unique titles/descriptions, `robots.ts`, `sitemap.ts`, Open Graph, JSON-LD
- AdSense slots feature-flagged **OFF** (`SITE.adsenseEnabled` in `src/content/site.ts`); preview mocks only
- Static export (`output: "export"`) for Cloudflare Pages

## Run locally

```bash
cd loancalc-lab   # or /workspace/loancalc-lab on the agent box
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port printed if 3000 is busy).

```bash
# explicit port example
npm run dev -- -p 3002
```

## Build (static export)

```bash
npm run build
```

This writes a static site to **`out/`** (no Node server). Suitable for Cloudflare Pages.

Calculator maths runs client-side in the browser.

## Deploy — Cloudflare Pages

1. **Domain:** buy or point **loancalclab.net** via Cloudflare Registrar, or add the domain to Cloudflare DNS.
2. **Pages project:** connect GitHub repo `Roderz-89/loancalc-lab`
   - Build command: `npm run build`
   - Output directory: `out`
   - Node version: **20+**
3. Attach custom domain **loancalclab.net** in Pages → Custom domains (SSL automatic via Cloudflare).
4. Until the custom domain is attached, the `*.pages.dev` preview URL is fine. Vercel can remain as an interim host if already deployed.

Next.js static export emits per-route HTML, so SPA-style `_redirects` are usually unnecessary.

## Zip for delivery (exclude node_modules / .next / .git / out)

From the parent folder:

```bash
cd /workspace
zip -r loancalc-lab.zip loancalc-lab \
  -x "loancalc-lab/node_modules/*" \
  -x "loancalc-lab/.next/*" \
  -x "loancalc-lab/.git/*" \
  -x "loancalc-lab/out/*"
```

Run `npm run build` after unzip to regenerate `out/`.

## Push to empty GitHub remote

Owner creates an empty repo `Roderz-89/loancalc-lab`, then:

```bash
cd loancalc-lab
git init
git add .
git commit -m "Phase 1 foundation: LoanCalc Lab Next.js site"
git branch -M main
git remote add origin git@github.com:Roderz-89/loancalc-lab.git
git push -u origin main
```

Or unzip the delivery artefact and push from that tree.

## Environment

No required env vars for Phase 1. Calculator maths runs client-side.

Optional future: set AdSense publisher IDs only after enabling `adsenseEnabled` and adding a consent mechanism.

## Disclaimer

Illustrative only — not personalised financial advice and not a credit offer. Rates, fees and terms vary by lender and country. Check the lender’s disclosure before you borrow.

## Licence

Private / all rights reserved unless otherwise stated by the owner.
