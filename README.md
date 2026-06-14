# GitHub Issues Tracker

A clean, responsive issue-tracking dashboard built with HTML, Tailwind CSS, DaisyUI, and vanilla JavaScript. The app provides a simple demo login, fetches issue data from a remote API, and lets users browse, filter, search, and inspect project issues in a polished dashboard interface.

## Overview

GitHub Issues Tracker is a front-end practice project that recreates the core experience of browsing repository issues. It includes a login screen, issue summary view, status filters, live search, priority and label badges, loading states, and a details modal for each issue.

## Features

- Demo authentication with predefined credentials
- Responsive dashboard layout for desktop and mobile screens
- Issue list loaded from a remote API
- Filter issues by `All`, `Open`, and `Closed`
- Search issues by keyword
- Dynamic issue count
- Priority badges for high, medium, and low priority issues
- Label badges for issue categories
- Issue details modal with status, author, date, assignee, priority, and description
- Loading spinner while data is being fetched

## Tech Stack

- **HTML5** for page structure
- **CSS3** for custom styling
- **JavaScript** for DOM interaction and API handling
- **Tailwind CSS** for utility-first styling
- **DaisyUI** for ready-made UI components
- **Font Awesome** for icon support
- **Google Fonts** for typography

## Project Structure

```text
Github-Issue-Tracker/
+-- assets/
|   +-- Aperture.png
|   +-- Closed-Status.png
|   +-- github-logo.png
|   +-- Open-Status.png
+-- javaScript/
|   +-- dashboard.js
|   +-- index.js
+-- dashboard.html
+-- index.html
+-- style.css
+-- tailwind.config.js
+-- README.md
```

## Demo Credentials

Use the following credentials to access the dashboard:

```text
Username: admin
Password: admin123
```

## Getting Started

Because this is a static front-end project, no build step is required.

1. Clone the repository:

   ```bash
   git clone https://github.com/Hossain-Mahmud40/Github-issue-Tracker.git
   ```

2. Open the project folder:

   ```bash
   cd Github-issue-Tracker
   ```

3. Open `index.html` in your browser.

For the best local development experience, you can also run the project with a local server such as the VS Code Live Server extension.

## API Endpoints

The dashboard uses the following API endpoints:

```text
GET https://phi-lab-server.vercel.app/api/v1/lab/issues
GET https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q={searchText}
GET https://phi-lab-server.vercel.app/api/v1/lab/issue/{id}
```

## How It Works

1. The login page checks the entered username and password against the demo credentials.
2. After successful login, the user is redirected to `dashboard.html`.
3. The dashboard fetches all issues from the API and renders them as cards.
4. Filter buttons update the visible issues based on status.
5. The search input calls the API search endpoint and displays matching issues.
6. Clicking an issue card opens a modal with detailed issue information.

## Screens

- **Login Page:** Simple sign-in screen with demo credentials.
- **Dashboard:** Issue cards, search, status filters, issue count, and visual status indicators.
- **Issue Details Modal:** Expanded view of a selected issue.

## Future Improvements

- Add real GitHub OAuth authentication
- Connect directly to the GitHub Issues API
- Add issue creation from the dashboard
- Add pagination or infinite scrolling
- Add sorting by date, priority, or status
- Improve error handling for failed API requests

## Author

Developed by [Hossain Mahmud](https://github.com/Hossain-Mahmud40).

## License

This project is open source and available for learning, practice, and personal use.
