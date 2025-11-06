# Written Exposure Therapy Website

## Project info

**URL**: https://writtenexposuretherapy.org

## Local Development Setup

This project consists of a **Vite/React frontend** and a **Node.js/Express backend** for handling the contact form. To run the project locally, you will need to run both parts simultaneously.

### Step 1: Install Dependencies

First, install the necessary npm packages for both the frontend and backend.

```sh
# Navigate to the project directory
cd Written_Exposure_Therapy

# Install all dependencies from package.json
npm install
```

## Repository annotations & non-functional cleanup

During a documentation pass the codebase was annotated with non-functional header comments in source files to indicate:

- Purpose of the file
- What it is influenced by (top-level imports or external systems)
- What it influences (exports, routes, or other modules)

This pass did not change any runtime behavior. It touched mostly `*.ts`, `*.tsx`, `*.js`, `*.css`, and `*.html` files. If you run into any tooling errors related to CSS/Tailwind directives after pulling these changes, you may need to ensure your local dev environment has the Tailwind/PostCSS toolchain and the correct VS Code/IDE plugins enabled.

Note: A macOS `.DS_Store` file was detected inside `public/assets` and was flagged for removal; if it exists in your local checkout you can safely delete it (it is a metadata file and not needed by the project).

### Step 2: Configure the Backend Environment

The backend server sends emails and requires credentials that must be stored securely.

1.  In the root of the project, create a new file named `.env`.
2.  Copy the following content into your new `.env` file and fill it with your own email provider's information.

```env
# .env

# Your Email Provider Credentials (Example is for Gmail)
# IMPORTANT: For Gmail, you must use a special "App Password", not your regular password.
# See Google's guide: https://support.google.com/accounts/answer/185833
EMAIL_USER="your-email@gmail.com"
EMAIL_PASS="your-16-digit-app-password"

# The Email Address to Receive the Form Submissions
RECIPIENT_EMAIL="client-email-of-your-choice@example.com"
```

> **Note:** The `.env` file is included in `.gitignore` and should **never** be committed to version control. It is for local development only.

### Step 3: Run the Application

You will need to open **two separate terminals** to run the frontend and backend servers.

**Terminal 1: Start the Frontend (Vite)**

```sh
# This command starts the React development server, usually on http://localhost:5173
npm run dev
```

**Terminal 2: Start the Backend (Node.js)**

```sh
# This command starts the Express API server, which will run on http://localhost:3001
node server.js
```

Once both servers are running, you can open your browser to the Vite development URL to view the website and test the contact form.

## Project Technologies

This project is built with:

#### **Frontend**

- Vite - Next Generation Frontend Tooling
- TypeScript - JavaScript with syntax for types
- React - JavaScript library for building user interfaces
- shadcn/ui - High-quality UI components
- Tailwind CSS - Utility-first CSS framework

#### **Backend**

- Node.js - JavaScript runtime environment
- Express - Web framework for Node.js
- Nodemailer - Module to send emails
- CORS - Middleware for enabling cross-origin requests

## Deployment

The frontend site is deployed to writtenexposuretherapy.org through continuous deployment. When changes are pushed to the `main` branch, the static site will automatically build and deploy.

**Note on Backend Deployment:** The `server.js` file is for development and is **not** part of the current automated deployment pipeline. To deploy the contact form functionality to production, the Node.js server must be hosted separately on a service like Render, Heroku, or a VPS.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
