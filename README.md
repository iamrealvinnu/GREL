# Marss Elite - Enterprise Real Estate Platform

A comprehensive, enterprise-grade real estate web application designed for premium property listings. This project combines a modern, responsive frontend with a powerful and flexible Drupal CMS backend, providing a robust platform for both clients and administrators.

## 1. Project Overview

This repository contains the full codebase for the Marss Elite platform. It is structured as a professional Drupal CMS project with a "decoupled-style" frontend theme.

- **`/cms` Directory:** Contains the complete Drupal backend, managed via Composer. This is the heart of the application, handling data, business logic, and content management.
- **Root Directory Assets (`/css`, `/js`, `*.html`):** These files represent the static frontend assets and HTML mockups. They serve as the foundational blueprint for the custom Drupal theme that will render the user-facing site.

The platform is designed for real estate agencies specializing in luxury properties, offering features for property showcasing, advanced searching, lead generation, and content management.

---

## 2. Technology Stack

This project utilizes a modern, robust, and scalable technology stack.

### Backend

- **PHP:** Version 8.1+
- **Web Server:** Apache or Nginx
- **Database:** MySQL 8+, MariaDB 10.4+, or PostgreSQL 12+
- **CMS:** **Drupal 11**
- **Dependency Management:** **Composer**
- **Key Drupal Modules:**
    - **Content & Data:** `Webform`, `Field Group`, `Address`, `Smart Date`
    - **Search & Filtering:** `Search API`, `Better Exposed Filters`
    - **Geospatial:** `Geocoder`, `Geofield`, `Leaflet` (for interactive maps)
    - **SEO & Marketing:** `Metatag`, `Pathauto`, `Simple Sitemap`, `Redirect`, `Google Tag`
    - **Media & UI:** `Focal Point`, `SVG Image`, `Gin` (Admin Theme), `Bootstrap5`
    - **AI & Automation:** `AI Agents`, `AI Provider OpenAI`, `Scheduler`
    - **Security:** `Captcha`, `Honeypot`
- **Development Tooling:**
    - **Drush (Drupal Shell):** For command-line administration.
    - **Recommended Local Dev:** DDEV or Lando for containerized environments.

### Frontend

- **Core:** HTML5, CSS3, JavaScript (ES6+)
- **Framework:** **Bootstrap 5**
- **Icons:** **Bootstrap Icons**

---

## 3. Project Structure

The repository is organized to separate the Drupal backend from the frontend theme's source files.

```
/
├── cms/                  # The Drupal CMS backend application
│   ├── composer.json     # Manages all PHP dependencies for Drupal
│   ├── composer.lock     # Locks dependency versions
│   ├── drush/            # Drush configuration and commands
│   ├── recipes/          # Drupal CMS recipes for pre-configuration
│   ├── vendor/           # Composer packages (Drupal core, modules, etc.)
│   └── web/              # The Drupal web root (application entry point)
│       ├── index.php
│       ├── core/
│       ├── modules/      # Contributed and custom Drupal modules
│       ├── profiles/
│       ├── sites/        # Configuration, files, and services for each site
│       └── themes/       # Contributed and custom Drupal themes
│
├── css/                  # Custom CSS stylesheets for the frontend theme
│   └── style.css
├── js/                   # Custom JavaScript for the frontend theme
│   └── script.js
│
├── *.html                # Static HTML files (index.html, buy.html, etc.)
│                         # These serve as mockups for the Drupal theme templates.
│
└── README.md             # This file
```

---

## 4. Getting Started: Full Setup Guide

### Prerequisites

- **PHP** (version 8.1 or higher) with required extensions for Drupal.
- **Composer 2.x**
- **Database Server:** MySQL, MariaDB, or PostgreSQL.
- **Web Server:** Apache or Nginx.
- **(Recommended)** A local development tool like **DDEV** or **Lando**.

### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd <repository-directory>
```

### Step 2: Set Up the Drupal Backend

All backend commands should be run from the `/cms` directory.

1.  **Navigate to the CMS directory:**
    ```bash
    cd cms
    ```

2.  **Install PHP Dependencies:**
    Run Composer to download Drupal core and all required modules.
    ```bash
    composer install
    ```

3.  **Create a Database:**
    In your database server, create a new database and a user with full permissions for it.

4.  **Install Drupal:**
    - **Configure your web server** to use `cms/web` as the document root.
    - **Visit your local domain** in a browser. You will be redirected to the Drupal installation screen.
    - **Follow the on-screen instructions.** When prompted, provide the database name, username, and password you created.
    - **Complete the site configuration** by setting up the site name and admin user account.

### Step 3: Integrate the Frontend Theme

The static assets in the root directory must be integrated into a custom Drupal theme.

1.  **Create a Custom Theme Directory:**
    - `cms/web/themes/custom/marss_elite`

2.  **Create the `.info.yml` File:**
    - Create `cms/web/themes/custom/marss_elite/marss_elite.info.yml`. This file defines your theme.
    ```yaml
    name: Marss Elite
    type: theme
    base theme: bootstrap5
    description: 'Custom theme for the Marss Elite real estate platform.'
    core_version_requirement: ^10 || ^11
    libraries:
      - marss_elite/global-styling
    regions:
      # Define your theme regions here
      header: Header
      content: Content
      footer: Footer
    ```

3.  **Create the `.libraries.yml` File:**
    - Create `cms/web/themes/custom/marss_elite/marss_elite.libraries.yml`. This file links your CSS and JS.
    ```yaml
    global-styling:
      version: 1.0.0
      css:
        theme:
          /css/style.css: {} # Path relative to Drupal root
      js:
        /js/script.js: {} # Path relative to Drupal root
      dependencies:
        - core/jquery
    ```
    *Note: The paths are relative to the Drupal web root (`/cms/web`). You may need to adjust your project structure or build process to place the assets in the correct location for Drupal to find them.*

4.  **Convert HTML to Twig Templates:**
    - Copy the `*.html` files into the `cms/web/themes/custom/marss_elite/templates` directory.
    - Rename them according to Drupal's Twig naming conventions (e.g., `index.html` might become `page--front.html.twig`).
    - Edit the `.twig` files to replace static content with dynamic Drupal variables (e.g., `{{ page.content }}`).

5.  **Enable the Theme:**
    - Log in to your Drupal admin dashboard.
    - Navigate to **Appearance** (`/admin/appearance`).
    - Find "Marss Elite", click **"Install and set as default"**.

---

## 5. Development and Coding Standards

- **Backend:** All PHP code should adhere to the Drupal coding standards.
- **Frontend:** Follow standard best practices for HTML, CSS, and JavaScript.
- **Commits:** Write clear and descriptive commit messages.

## 6. Deployment

A typical deployment process would involve:
1. Running `composer install --no-dev --optimize-autoloader` in the `cms/` directory.
2. Deploying the `cms/web` directory to the production server's document root.
3. Migrating configuration changes from development to production via Drupal's Configuration Management system.
4. Ensuring the production server has the correct file permissions and is configured to handle clean URLs.

---

## 7. License

The Drupal CMS and its contributed modules are licensed under the [GPL-2.0-or-later](https://www.gnu.org/licenses/gpl-2.0.html). The custom theme assets (HTML, CSS, JS) are proprietary unless specified otherwise.