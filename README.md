# Written Exposure Therapy Website

**Live URL**: [https://writtenexposure.com](https://writtenexposure.com])

## Project Overview

This is a web platform for Written Exposure Therapy (WET). The codebase consists of a **React/Vite frontend** and a **Serverless Node.js backend** (hosted on Vercel) for handling contact forms and newsletter subscriptions.

### Architecture (Free Tier Strategy)

To keep hosting completely free while supporting backend logic:

1.  **Frontend & Backend:** Hosted on **Vercel** (Free Tier).
2.  **Domain:** Registered on **GoDaddy**, pointing to Vercel via Nameservers.
3.  **Backend Logic:** Uses Vercel Serverless Functions (`/api` directory) instead of a traditional running `server.js` process.

## Technologies

**Frontend:**

- Vite (Build tool)
- TypeScript
- React
- Tailwind CSS
- shadcn/ui (Components)

**Backend:**

- Vercel Serverless Functions (Node.js)
- Nodemailer (Email transport)

---

## 🛠 Local Development Setup

Follow these steps to run the project on your machine.

### 1. Install Dependencies

```sh
cd Written_Exposure_Therapy
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory. These variables are required for the contact form to work locally.

```env
# .env

# Gmail Configuration (Requires App Password: https://support.google.com/accounts/answer/185833)
EMAIL_USER="your-email@gmail.com"
EMAIL_PASS="your-16-digit-app-password"

# Where form submissions should be sent
RECIPIENT_EMAIL="doctor-email@example.com"
```

### 3. Run the Application

**Option A: Standard Development (Frontend Only)**
If you are only working on UI changes:

```sh
npm run dev
```

**Option B: Full Stack Development (Frontend + API)**
To test API endpoints locally (like the contact form), usage depends on if you are testing the legacy `server.js` or Vercel functions.

- **Legacy:** Open a second terminal and run `node server.js`.
- **Vercel:** Install Vercel CLI (`npm i -g vercel`) and run `vercel dev`.

---

## 🚀 Deployment Guide

The site uses **Continuous Deployment**. Any change pushed to the `main` branch on GitHub will automatically trigger a build and deploy on Vercel.

### 1. How to Deploy Updates

1.  Make changes to your code.
2.  Commit and push to GitHub:
    ```sh
    git add .
    git commit -m "Description of changes"
    git push origin main
    ```
3.  Visit the [Vercel Dashboard](https://vercel.com/dashboard) to watch the build.

### 2. Domain Configuration (GoDaddy + Vercel)

The domain is connected via Nameservers. If you ever need to reconnect it:

1.  **In Vercel:** Go to Settings > Domains > Add `writtenexposuretherapy.org`.
2.  **In GoDaddy:**
    - Go to DNS Management.
    - Change **Nameservers** to Custom.
    - Set them to:
      - `ns1.vercel-dns.com`
      - `ns2.vercel-dns.com`

### 3. Production Environment Variables

The `.env` file is not uploaded to GitHub. You must set these variables in Vercel:

1.  Go to Vercel Project Settings > **Environment Variables**.
2.  Add the following keys (same as your local .env):
    - `EMAIL_USER`
    - `EMAIL_PASS`
    - `RECIPIENT_EMAIL`
3.  **Redeploy** for changes to take effect.

---

## 🚧 Maintenance Mode

The application has a built-in "Under Construction" screen to hide the site content while you are working on it.

**To Enable Maintenance Mode:**

1.  Open `src/App.tsx`.
2.  Locate the constant at the top of the file:
    ```typescript
    const IS_MAINTENANCE_MODE = true; // Set to true to hide site
    ```
3.  Commit and push the change.

**To Disable Maintenance Mode:**

1.  Set the variable to `false`.
2.  Commit and push.

---

## ⚠️ Backend Important Notes

### Serverless Limitations (The "Database" Issue)

Because Vercel is "serverless," the backend code wakes up for a second to handle a request and then shuts down. **It cannot save files to the disk.**

- **Problem:** Writing to `subscribers.json` (as done in the original local version) **will not work** in production. The file will be reset every time the server sleeps.
- **Solution:** You must use an external database or service for the newsletter.
  - _Option A (Recommended):_ Connect the form to **Mailchimp** or **ConvertKit**.
  - _Option B (Advanced):_ Connect the API to **MongoDB Atlas** (Free Tier).

### API Routes

The production site uses the `/api` directory for backend logic, mapped automatically by Vercel.

- `api/contact.js` -> Endpoint: `/api/contact`
- `api/newsletter.js` -> Endpoint: `/api/newsletter`

---

## Repository Annotations

During documentation passes, non-functional header comments were added to source files to indicate purpose and influence. A macOS `.DS_Store` file was detected inside `public/assets` and can be safely deleted.
