# LoanCalc Lab

Calculator-first personal loan, EMI & debt payoff decision lab (Phase 1 foundation).

**Stack:** Next.js App Router · TypeScript · Tailwind CSS v4 · `en-GB`  
**Accent:** `#c8102e` (sparingly) · soft `#fde8ec`  
**Site path on box:** `/workspace/loancalc-lab`  
**Domain placeholder:** loancalclab.com

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

## Build

```bash
npm run build
npm start   # production server
```

## Zip for delivery (exclude node_modules / .next)

From the parent folder:

```bash
cd /workspace
zip -r loancalc-lab.zip loancalc-lab \
  -x "loancalc-lab/node_modules/*" \
  -x "loancalc-lab/.next/*" \
  -x "loancalc-lab/.git/*"
```

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

Or unzip the delivery artefact and push from that tree. **Do not push from the agent unless asked.**

## Environment

No required env vars for Phase 1. Calculator maths runs client-side.

Optional future: set AdSense publisher IDs only after enabling `adsenseEnabled` and adding a consent mechanism.

## Disclaimer

Illustrative only — not personalised financial advice and not a credit offer. Rates, fees and terms vary by lender and country. Check the lender’s disclosure before you borrow.

## Licence

Private / all rights reserved unless otherwise stated by the owner.
