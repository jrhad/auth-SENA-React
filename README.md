# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
"""
└── 📁src
    └── 📁assets
        ├── react.svg
    └── 📁features
        └── 📁auth
            └── 📁components
                ├── Login.jsx
                ├── ProtectedRoute.jsx
            └── 📁hooks
                ├── UseAuth.jsx
        └── 📁cart
            └── 📁components
                ├── Cart.jsx
                ├── CartButton.jsx
            └── 📁hooks
                ├── CartContext.jsx
                ├── UseNotification.jsx
            └── 📁pages
                ├── CartPages.jsx
        └── 📁landing
            └── 📁components
                ├── CharCard.jsx
                ├── Dashboard.jsx
                ├── StructureCard.jsx
            └── 📁hooks
                ├── CharacterContext.jsx
            └── 📁pages
                ├── LandingPages.jsx
    └── 📁shared
        └── 📁components
            ├── Footer.jsx
            ├── Header.jsx
            ├── Section.jsx
        └── 📁hooks
            ├── CharService.jsx
        └── 📁styles
            ├── CartStyles.css
            ├── main.css
    ├── App.jsx
    └── main.jsx
"""
