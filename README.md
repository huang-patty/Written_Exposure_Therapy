# Written Exposure Therapy Website

**Live URL**: [https://writtenexposure.com](https://writtenexposure.com)

## Project Overview

This is a web platform for Written Exposure Therapy (WET). The codebase consists of a **React/Vite frontend** and a **Serverless Node.js backend** (hosted on Vercel) for handling contact forms and newsletter subscriptions.

### Architecture (Free Tier Strategy)

To keep hosting completely free while supporting backend logic:

1.  **Frontend & Backend:** Hosted on **Vercel** (Free Tier).
2.  **Domain:** Registered on **GoDaddy**, pointing to Vercel via Nameservers.
3.  **Database:** Uses **MongoDB Atlas** (Free Tier) to store newsletter subscribers.
4.  **Backend Logic:** Uses Vercel Serverless Functions to communicate between the frontend and the database.

## Technologies

**Frontend:**

- Vite (Build tool)
- TypeScript
- React
- Tailwind CSS
- shadcn/ui (Components)

**Backend:**

- Vercel Serverless Functions (Node.js)
- MongoDB Atlas (Cloud Database)
- Mongoose (ODM for MongoDB)
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

Create a `.env` file in the root directory. You need these variables for the database and emails to work.

> **Security Note:** Never commit your `.env` file to version control.

```env
# .env

# Gmail Configuration (Requires App Password: https://support.google.com/accounts/answer/185833)
EMAIL_USER="your-email@gmail.com"
EMAIL_PASS="your-app-password"

# Where contact form submissions should be sent
RECIPIENT_EMAIL="doctor-email@example.com"

# MongoDB Connection String (Get this from MongoDB Atlas Dashboard)
# Ensure the password in the string does not have special characters like @ or : unless URL encoded.
MONGODB_URI="mongodb+srv://<username>:<password>@<cluster-url>/?retryWrites=true&w=majority"

# Secret password to access the Admin CSV download page
# Generate a strong, random string for this value
ADMIN_SECRET="your-secure-random-token"
```

### 3. Run the Application

**Option A: Standard Development (Frontend Only)**
If you are only working on UI changes:

```sh
npm run dev
```

**Option B: Full Stack Development (Frontend + API)**
To test API endpoints locally (like the contact form or database), usage depends on if you are testing the legacy `server.js` or Vercel functions.

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

1.  **In Vercel:** Go to Settings > Domains > Add `writtenexposure.com`.
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
    - `MONGODB_URI`
    - `ADMIN_SECRET`
3.  **Redeploy** for changes to take effect.

---

## 👮 Admin & Newsletter Management

### Admin Dashboard

A protected administrative interface exists to download the subscriber list.

- **Access:** Requires the `ADMIN_SECRET` key defined in environment variables.
- **Features:** Authenticates via the secret key and generates a CSV export of the database.

### Newsletter Logic

The backend handles subscription logic securely via Serverless functions.

- **POST:** Adds a new email to the database (validates for duplicates).
- **DELETE:** Removes an email from the database.

---

## ⚙️ Configuration Files

### `vercel.json`

This file exists in the root directory to handle **SPA Routing**.

- **Purpose:** If a user visits a sub-page directly, Vercel normally throws a 404 error because the HTML file doesn't exist.
- **Fix:** This file configures rewrites to redirect non-API requests to `index.html`, allowing React Router to handle the navigation.

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

---

## ⚠️ Important Troubleshooting

### CORS Errors

If you change the domain name or add a new environment, you might get "Network Error" when submitting forms.

- **Fix:** Update the allow-list in the API files to include your new domain.

### Database Connection Errors

If forms fail with connection errors:

1.  Check that `MONGODB_URI` in Vercel settings matches your MongoDB Atlas string exactly.
2.  Ensure your IP address is allowed in MongoDB Atlas -> Network Access (Use `0.0.0.0/0` to allow Vercel).
3.  Ensure your database password does not contain special characters that break the URL format.
