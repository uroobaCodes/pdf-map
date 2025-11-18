# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

A React-based PDF editing application built with Vite, using Supabase for backend services, pdf-lib and pdfjs-dist for PDF manipulation, Zustand for state management, and Tailwind CSS for styling.

## Commands

### Development
```powershell
npm run dev          # Start development server with HMR
npm run preview      # Preview production build locally
```

### Build
```powershell
npm run build        # Build for production (outputs to dist/)
```

### Code Quality
```powershell
npm run lint         # Run ESLint on all JavaScript/JSX files
```

### Package Management
```powershell
npm install          # Install all dependencies
```

## Architecture

### Technology Stack
- **Framework**: React 19 with Vite 7 for fast development and HMR
- **Backend**: Supabase (configured via environment variables)
- **PDF Libraries**: 
  - `pdf-lib` for PDF creation and modification
  - `pdfjs-dist` for PDF rendering and parsing
- **State Management**: Zustand for lightweight global state
- **Routing**: React Router DOM v7
- **Styling**: Tailwind CSS v4 with Vite plugin
- **Linting**: ESLint with React Hooks and React Refresh plugins

### Project Structure
- **src/**: Main application code
  - `main.jsx`: Application entry point with React StrictMode
  - `App.jsx`: Root component
  - `index.css`: Global styles including Tailwind directives
  - `assets/`: Static assets
- **public/**: Public static files served directly
- **dist/**: Build output (gitignored)

### Configuration Files
- **vite.config.js**: Vite configuration with path alias `@` → `./src`
- **eslint.config.js**: ESLint flat config with React-specific rules
  - Custom rule: unused vars starting with uppercase or underscore are ignored
- **.env**: Contains Supabase configuration (URL and anon key)

### Key Patterns
- **Path Aliases**: Use `@/` to import from src directory (e.g., `import Foo from '@/components/Foo'`)
- **Environment Variables**: Access Vite env vars with `import.meta.env.VITE_*` prefix (note: .env uses `REACT_APP_*` pattern, may need migration)
- **ESLint**: Flat config format, excludes `dist/` directory, targets ES2020+

### Supabase Integration
The project uses Supabase with credentials stored in `.env`. When working with Supabase:
- URL: `REACT_APP_SUPABASE_URL`
- Anon Key: `REACT_APP_ANON_KEY`
- Note: These should be prefixed with `VITE_` for Vite compatibility (currently uses `REACT_APP_` pattern)

### Development Notes
- The project uses ES modules (`"type": "module"` in package.json)
- React 19 is in use, which includes new features and breaking changes from React 18
- No test framework is currently configured
- No TypeScript - uses plain JavaScript with JSX
