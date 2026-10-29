# Aman Jain — Personal Portfolio

**Finance × Technology × Communication**

Source code for [amanmalu.me](https://amanmalu.me), the personal portfolio of Aman Jain, a BBA student studying Finance & Marketing Analytics at CHRIST (Deemed to be University), Bengaluru.

The site uses the warm, editorial **Modular Universe** design system: cream surfaces, restrained orange accents, pastel Finance / Build / Create cards, an editorial serif paired with Manrope, a portrait-led introduction and compact section spacing. The visual system is shared across all routes.

## Routes

- \`/\` — Intro, three areas of interest, the Fokus feature, clearly-labelled finance-work placeholders, YouTube feed, recruiter overview and contact.
- \`/work\` — Fokus case study and selected finance-work placeholders. Product screenshots and project-specific personal notes are explicitly marked TODO where source material is not in the repository.
- \`/creator\` — Creator hub with a server-rendered long-form YouTube feed.
- \`/recruiters\` — Education, internship experience, CFA candidate status, skills and credentials.
- \`/resources\` — Resource ideas, visibly marked as placeholders until downloadable files are added.
- \`/contact\` — Accessible email-draft helper and outbound social links.
- \`/api/youtube\` — Cached YouTube Data API feed for integrations that need JSON.

## Stack

- Next.js 16 App Router, React 19 and TypeScript
- Tailwind CSS v4 with one CSS-first theme for the whole site
- Manrope, Newsreader and Caveat through \`next/font\`
- Lenis for restrained desktop wheel scrolling; IntersectionObserver reveals, short CSS transform/opacity transitions and reduced-motion support
- Vercel Web Analytics and Speed Insights components (enable both in the Vercel project dashboard to collect/display data)

## Local development

\`\`\`bash
npm ci
npm run dev
\`\`\`

Quality checks and production build:

\`\`\`bash
npm run lint
npx tsc --noEmit
npm run build
\`\`\`

## Automatic long-form YouTube feed

The homepage and Creator page use the shared server-side helper in \`src/lib/youtube.ts\`; the public JSON route remains available at \`/api/youtube\`. It looks up the uploads playlist for the \`@AmanJain-4\` channel, fetches video metadata, excludes videos of three minutes or less, and returns the newest three remaining videos. Titles, thumbnails, publication dates and links come from YouTube. API responses are cached for up to one hour.

One-time deployment setup:

1. In Google Cloud Console, create/select a project, enable **YouTube Data API v3**, and create an API key.
2. Add \`YOUTUBE_API_KEY\` to the Vercel project's environment variables for Production (and Preview if desired).
3. Redeploy once so the environment variable is available.

The key is read only on the server and is not sent to the browser. A sample environment file is included as \`.env.example\`. If no feed can be returned, the site presents a visitor-friendly link to the channel rather than exposing API setup details.

**Short-form policy:** uploads longer than 180 seconds are included; videos at or below three minutes are excluded to keep short-form uploads out of the showcase.

## Content placeholders to complete

- Add the current résumé at \`public/Aman-Jain-Resume.pdf\` to enable the résumé download button.
- Add real Fokus screenshots and verified notes on personal role / engineering lessons to the case study.
- Attach finished finance-work PDFs or Excel files and replace their \`TODO(Aman)\` takeaways.
- Replace resource-library placeholder cards with actual files and verified descriptions.

No outcomes, project metrics or downloadable files are claimed until they are supplied.

## Contact & links

- Website: [amanmalu.me](https://amanmalu.me)
- Email: [jain.aman3789@gmail.com](mailto:jain.aman3789@gmail.com)
- LinkedIn: [amanmalu](https://www.linkedin.com/in/amanmalu/)
- GitHub: [aman482006-beep](https://github.com/aman482006-beep)
- YouTube: [@AmanJain-4](https://www.youtube.com/@AmanJain-4)
- Instagram: [@aman.ja1n](https://www.instagram.com/aman.ja1n/)
