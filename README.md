# StellarRise HK Website (Upgraded to bilingual EN/中文)

## Local dev
```bash
npm install
npm run dev
```

Open:
- http://localhost:3000/en
- http://localhost:3000/zh

Root `/` redirects to `/en`.

## Deploy (Vercel)
- Import this repo/folder into Vercel
- Framework: Next.js
- Build: `npm run build`

## Domain (Namecheap -> Vercel)
- In Vercel: Project -> Settings -> Domains -> add `stellarrisehk.com`
- In Namecheap Advanced DNS:
  - A     @     76.76.21.21
  - CNAME www   cname.vercel-dns.com

## Contact email
- admin@stellarrisehk.com
