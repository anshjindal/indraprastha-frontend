# Indraprastha Sewa Samiti

Official website of Indraprastha Sewa Samiti, a registered NGO in New Delhi (founded 2018) and organiser of the annual **Ramleela & Dusshera Mohotsav Sagarpur** at DDA Ground, Sagarpur.

## Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS
- Vercel Analytics

## Updating content

- Organisation details, phones, email, WhatsApp number, social links, festival dates: `src/lib/site.ts`
- Day-by-day Ramleela schedule: `src/lib/schedule.ts` (poster at `public/images/schedule-2026.jpg`)
- Photo gallery and open tenders: `src/lib/content.ts`

## Instagram reels

The home and Social Media pages show reels from [@indraprasthasewa](https://www.instagram.com/indraprasthasewa), in this order of preference:

1. **Automatic feed** — set `INSTAGRAM_ACCESS_TOKEN` (in `.env.local` locally and in Vercel → Project → Settings → Environment Variables). The latest posts and reels are fetched from the Instagram API and refreshed every hour.
   - The account must be an Instagram **Business or Creator** account.
   - Create an app at [developers.facebook.com](https://developers.facebook.com), add the **Instagram API with Instagram Login** product, add the account as a tester and generate a long-lived access token with the `instagram_business_basic` permission.
   - Long-lived tokens last 60 days. Refresh before expiry with
     `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=TOKEN`.
2. **Hand-picked reels** — paste reel/post links into `instagramPosts` in `src/lib/content.ts`; they are shown with Instagram's official embed.
3. Otherwise a "Follow us on Instagram" card is shown.

## Local development

```bash
npm install
npm run dev
```
