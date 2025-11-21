# GEMINI.md

This document provides guidance for interacting with the SOAR Labs Retrieval Augmented Generation Platform codebase.

## Project Overview

This project is a single-page marketing and informational website for the SOAR Labs Retrieval Augmented Generation Platform. It is built using React and Vite, with TypeScript for type safety. The website features a modern, animated design with a custom cursor and animated background. It is composed of several sections that describe the platform's features, use cases, and benefits.

**Key Technologies:**

* **Framework:** React
* **Build Tool:** Vite
* **Language:** TypeScript
* **Styling:** Tailwind CSS (inferred from class names like `min-h-screen`)
* **Animation:** Framer Motion
* **Icons:** Lucide React
* **Charting:** Recharts

## Development Commands

* **Install Dependencies:**

    ```bash
    npm install
    ```

* **Run Development Server:**

    ```bash
    npm run dev
    ```

* **Build for Production:**

    ```bash
    npm run build
    ```

* **Preview Production Build:**

    ```bash
    npm run preview
    ```

## High-Level Architecture

The application is a single-page website with a component-based architecture. The main `App.tsx` file serves as the entry point and composes the page from the following components:

* **`Navbar`**: The navigation bar.
* **`Hero`**: The main hero section.
* **`PipelineSection`**: A section describing a pipeline.
* **`FeaturesSection`**: A section highlighting features.
* **`UseCasesSection`**: A section for use cases.
* **`StatsSection`**: A section for statistics.
* **`CtaSection`**: A call-to-action section.
* **`Footer`**: The footer.
* **`CustomCursor`**: A custom cursor component.
* **`AnimatedBackground`**: An animated background component.

## Development Workflow

1. **Prerequisites:** Ensure you have Node.js installed.
2. **Clone the repository.**
3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Set up environment variables:** Create a `.env.local` file and add your Gemini API key:

    ```
    GEMINI_API_KEY=your-api-key
    ```

5. **Run the development server:**

    ```bash
    npm run dev
    ```

6. Open your browser to the URL provided by Vite (usually `http://localhost:5173`).

## Coding Standards

* **Component Structure:** Components are organized in the `components` directory.
* **File Naming:** Components use PascalCase (e.g., `Navbar.tsx`).
* **Styling:** Utility-first CSS with Tailwind CSS is used for styling.
* **Language:** TypeScript is used for all components.
* **Modularity:** The application is broken down into small, reusable components.
