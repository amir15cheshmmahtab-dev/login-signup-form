

-----

# User Authentication App (React.js)

## Overview

This project is a modern, single-page application (SPA) built with **React.js** that demonstrates a robust user authentication flow, featuring separate pages for **Sign Up** and **Login**. It includes client-side form validation, state management using React Hooks, and a component-based structure using **React Router DOM** for navigation.

The application uses **CSS Modules** for component-specific styling and **React Toastify** for user feedback on form submission and validation.

✨ Key Features

  * **Client-Side Validation:** Real-time form input validation for fields like name, email, password length, and password confirmation.
  * **Routing:** Seamless navigation between the Login and Sign Up pages using **React Router DOM**.
  * **State Management:** Utilizes the `useState` and `useEffect` React Hooks for managing form data, errors, and touch state.
  * **Styled Components:** Uses **CSS Modules** for local scope styling to ensure a clean, maintainable, and modern user interface.
  * **User Feedback:** Implements **React Toastify** to provide clear success or error notifications upon form submission.
  * **Default Route:** The root path (`/`) automatically redirects to the Login page.

## 🛠️ Technologies Used

  * **React**
  * **React Router DOM**
  * **React Toastify**
  * **CSS Modules**

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

You need to have **Node.js** and **npm** (or **Yarn**) installed on your system.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone [Your Repository URL Here]
    cd [Your Project Folder Name]
    ```

2.  **Install dependencies:**
    This project relies on `react-router-dom` and `react-toastify`, which need to be installed.

    ```bash
    npm install
    # or 
    # yarn install
    ```

### Running the App

Start the application in development mode:

```bash
npm start
# or 
# yarn start
```

The application should open automatically in your browser at `http://localhost:3000`.

## 📂 Project Structure

| File/Folder | Description |
| :--- | :--- |
| `src/App.js` | Main application component; sets up the routing for `/login`, `/signup`, and the root path (`/`). |
| `src/index.js` | Renders the main app component, wrapping it with `<BrowserRouter>` for routing. |
| `src/component/SignUp.js` | Component for user registration, including form state, validation, and submission logic. |
| `src/component/Login.js` | Component for user login, handling form state, validation, and submission. |
| `src/component/SignUp.module.css` | Stylesheet using CSS Modules for the Sign Up and Login forms. |
| `src/component/Validation.js` | Contains the core `validateInput` function used by both forms to check data integrity. |
| `src/component/Toastify.js` | Utility function (`notify`) for showing SUCCESS or ERROR toasts. |

## Contribution

Feel free to fork the repository and contribute\! Whether it's feature enhancements, bug fixes, or improvements to the documentation, all contributions are welcome.
