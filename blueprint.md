
# Fact-Checking Website Blueprint

## Overview

This project is a fact-checking website designed to combat misinformation and disinformation in South Korean politics. It provides users with a platform to verify the accuracy of various claims and narratives, particularly those circulating on social media and online forums. The site aims to promote critical thinking and media literacy by presenting evidence-based information and encouraging users to question and analyze the information they encounter.

## Project Outline

### 1. **Initial Setup & Landing Page (`index.html`, `style.css`)**
    *   **Landing Page:** A clean and simple landing page with a prominent quote from Hannah Arendt about truth and politics.
    *   **"Fact Check" Button:** A clear call-to-action button that leads the user to the main content.
    *   **Styling:** A modern and visually appealing design that is easy to navigate.

### 2. **Main Content Page (`main.js`)**
    *   **Categories:** A list of categories on the left side of the page, covering major topics of misinformation.
        *   `부정선거음모론` (Election Fraud Conspiracy Theories)
        *   `이재명 가짜뉴스` (Lee Jae-myung Fake News)
        *   `기타` (Miscellaneous)
    *   **Questions & Answers:** Each category will contain a series of questions. Clicking on a question will reveal a detailed fact-check answer.
        *   **Answer Structure:** Each answer will be presented clearly and concisely, with a "References" section for further reading.
    *   **Data Structure:** A JavaScript object will store the categories, questions, answers, and references.

### 3. **Critical Thinking Section**
    *   **"비판적 사고력 기르기" (Developing Critical Thinking Skills):** A dedicated section at the bottom of the category list.
    *   **Content:** This section will provide practical tips and methods for developing critical thinking skills, including the Socratic method of questioning.

### 4. **Styling and Design (`style.css`)**
    *   **Layout:** A two-column layout for the main content page (categories on the left, Q&A on the right).
    *   **Typography:** Clear and readable fonts.
    *   **Color Scheme:** A professional and trustworthy color palette.
    *   **Dark Mode:** A toggle switch to allow users to switch between light and dark themes.

### 5. **Features**
    *   **Dark Mode:** Added a toggle for a dark theme to improve user experience in low-light environments.
    *   **Persistent Theme:** User's theme preference (light/dark) is saved in local storage.

## Current Plan

### Phase 1: Initial Scaffolding (Completed)
1.  **DONE** Create `blueprint.md` to establish project goals and structure.
2.  **DONE** Create `index.html` with the basic structure.
3.  **DONE** Create `style.css` to implement the initial design.
4.  **DONE** Create `main.js` with the core logic and content.
5.  **DONE** Test the basic functionality.

### Phase 2: Feature Enhancement
1.  **IN PROGRESS** Add a Dark Mode toggle to `index.html`.
2.  Implement dark mode styles in `style.css`.
3.  Add JavaScript logic in `main.js` to handle theme switching and persistence.
4.  Refine overall design and user experience.
