# Derek Yendoh — Portfolio

Personal portfolio site for [yendoh-derek.github.io](https://yendoh-derek.github.io/).

## Stack

- Next.js 15 (static export)
- TypeScript
- Tailwind CSS
- Framer Motion

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Static output is written to `out/`.

## Deploy to GitHub Pages

1. Create or rename your GitHub repo to **`Yendoh-Derek.github.io`**
2. Push this project to the `main` branch
3. In repo **Settings → Pages**, set source to **GitHub Actions**
4. The workflow in `.github/workflows/deploy.yml` builds and deploys automatically

## Customize content

Edit files in `src/content/`:

- `site.ts` — email, links, meta
- `about.ts` — bio copy
- `projects.ts` — project cards and detail content
- `skills.ts` — skill clusters
- `experience.ts` — timeline entries

Replace `[Your Institution]` placeholders before launch.
