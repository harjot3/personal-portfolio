# Personal Portfolio

Harjot Singh's portfolio. React + TypeScript, built with Vite, deployed on Vercel.

Live: https://harjot-singh-personal-portfolio.dev

## Development

```bash
npm install
npm run dev
```

Content (education, experience, projects, skills) lives in [`src/content.ts`](src/content.ts).

Contact email is injected at build time via the `VITE_CONTACT_EMAIL` env var (see `.env.example`) rather than committed to source.
