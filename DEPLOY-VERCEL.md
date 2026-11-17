# Deploy to Vercel

The design and all front-end code are unchanged. Only hosting files were added
(`vercel.json`, `api/index.js`, root `package.json`) and the Express app was split
so it can run as a Vercel serverless function.

1. **Database:** create a free MongoDB Atlas cluster. Under Network Access allow `0.0.0.0/0`
   (Vercel uses dynamic IPs). Copy the connection string.
2. **Seed once from your computer** (fills menu, gallery, settings, admin user):
   ```
   npm install
   copy .env.example .env      (edit MONGO_URI, JWT_SECRET, ADMIN_EMAIL, ADMIN_PASSWORD)
   npm run seed
   ```
3. **Push to GitHub** (or run `vercel` with the Vercel CLI) and import the project in Vercel.
   Leave the framework as "Other" - `vercel.json` sets everything.
4. **Environment variables** (Project -> Settings -> Environment Variables):
   `MONGO_URI`, `JWT_SECRET`, and optionally `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`,
   `SMTP_USER`, `SMTP_PASS`, `MAIL_FROM`. (`CLIENT_URL` is not needed - site and API share one domain.)
5. Deploy. Check `https://your-site.vercel.app/api/health` returns `{"ok":true}`.

Local development still works: `npm run install:all`, `npm run seed`, `npm run dev`.
