# Aman Jain — Personal Portfolio

**Finance × Technology × Communication**

This is the source code for [amanmalu.me](https://amanmalu.me), the personal website of Aman Jain, a BBA student studying Finance & Marketing Analytics at CHRIST (Deemed to be University), Bengaluru.

The site uses a warm, editorial **Modular Universe** design: cream surfaces, restrained orange accents, pastel Finance / Build / Create cards, a photo-led introduction, a single Focus project feature, long-form YouTube videos, recruiter information, and contact links. The same visual tokens are shared across the site's other pages.

## Routes

- `/` — Homepage, areas of interest, the Focus app, recent long-form videos, recruiter snapshot, and contact form.
- `/work` — Focus app case page; the only featured project for now.
- `/creator` — Creator hub with an automatically refreshed long-form YouTube feed.
- `/recruiters` — Education, internships, CFA candidate status, skills, and credentials.
- `/resources` — Resource library.
- `/contact` — Contact options and outbound social links.

## Stack

- Next.js 16 App Router + React 19 + TypeScript
- Tailwind CSS v4 and shared custom CSS design tokens
- Framer Motion / GSAP / Lenis dependencies retained where existing components need them
- Vercel deployment

## Local development

```bash
npm install
npm run dev
```

For a production build:

```bash
npm run build
npm run lint
```

## Automatic long-form YouTube feed

The homepage and Creator page use the same server endpoint, `/api/youtube`. It calls the YouTube Data API, looks up the channel's upload playlist from the `@AmanJain-4` handle, obtains video metadata, filters out videos of three minutes or less, and returns the newest three remaining videos. Titles, thumbnails, publication dates, and links come directly from YouTube. API responses are cached for up to one hour, so new public long-form videos appear without editing the website.

One-time deployment setup:

1. In Google Cloud Console, create/select a project, enable **YouTube Data API v3**, and create an API key.
2. Add `YOUTUBE_API_KEY` to the site's Vercel environment variables for Production (and Preview if desired).
3. Redeploy once so the environment variable is available.

The key is read only on the server and is not sent to the browser. A sample environment file is included as `.env.example`. Until the key is configured, the page shows a graceful feed-unavailable message with a direct link to the channel.

**Short-form policy:** uploads longer than 180 seconds are included; videos at or below three minutes are excluded to keep short-form uploads out of the showcase.

## Contact & links

- Website: [amanmalu.me](https://amanmalu.me)
- Email: [jain.aman3789@gmail.com](mailto:jain.aman3789@gmail.com)
- LinkedIn: [amanmalu](https://www.linkedin.com/in/amanmalu/)
- GitHub: [aman482006-beep](https://github.com/aman482006-beep)
- YouTube: [@AmanJain-4](https://www.youtube.com/@AmanJain-4)
- Instagram: [@aman.ja1n](https://www.instagram.com/aman.ja1n/)
