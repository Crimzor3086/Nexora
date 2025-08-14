# Nexora MVP

A React + Vite + TailwindCSS prototype for Nexora with dark branding, gold accents, mock auth/data, charts, tooltips, toasts, drag-and-drop dashboard cards, and lazy-loaded routes.

## Tech Stack
- React 18, React Router 6
- Vite + @vitejs/plugin-react
- TailwindCSS 3
- Recharts (charts)
- @tippyjs/react (tooltips)
- dnd-kit (drag-and-drop)
- Vitest + RTL (tests)
- ESLint + Prettier

## Getting Started
1. Install
```bash
npm install
```
2. Dev server
```bash
npm run dev
```
3. Build & preview
```bash
npm run build
npm run preview
```
4. Lint/format/test
```bash
npm run lint
npm run format
npm run test
```

## Environment
Create `.env` (or copy `.env.example`):
```bash
VITE_API_BASE_URL=https://api.example.com
```
Note: The app uses mock auth and inline mock data by default. Configure real endpoints and replace mocks to go live.

## Project Structure
```
public/
  icons/           # SVG icons + favicon.svg
src/
  assets/          # backgrounds, illustrations (placeholders)
  components/      # UI components (Navbar, Sidebar, Card, Button, Modal, ToastProvider, etc.)
  pages/           # Route pages (Home, Dashboard, Identity, MultiChain, Settings, Profile, Verification, ApiDocs, Login, NotFound)
  styles/          # Tailwind globals + theme utilities
  utils/           # api client, auth context
  main.jsx         # entry
  App.jsx          # providers + routes (lazy-loaded)
```

## Features
- Theme: dark-first, gold accents, Montserrat (headings) + Open Sans (body)
- Navbar: search, notifications dropdown with badge, profile menu, theme toggle
- Sidebar: collapsible, active gold highlight
- Dashboard: cards with hover glow, Recharts area chart, drag-and-drop reordering (dnd-kit)
- Identity: step progress, file upload with simulated progress + toasts
- Verification: modal flow + toasts
- Multi-Chain: tabs for chains (placeholder data)
- Settings: local persistence via `AuthProvider.updateUser`
- Toasts: success/error/info with slide-in animation
- Tooltips: Tippy-based on nav items
- Code-splitting: React.lazy + Suspense per route

## UI/UX Guidelines (Applied)
- Colors: black `#0B0B0B`, surface `#1C1C1C`, gold `#FFD700`, text secondary `#B0B0B0`; success/error/info
- Microinteractions: hover glow, smooth transitions, modal Escape to close, focus management
- Accessibility: semantic roles on modal, keyboard close, high-contrast palette

## Routes
- Public: `/`, `/login`, `/apidocs`, `*` (NotFound)
- Protected: `/dashboard`, `/identity`, `/multichain`, `/settings`, `/profile`, `/verification`

## Mock Data / Auth
- Auth is mocked in `src/utils/auth.jsx` (fake token + user in localStorage)
- Dashboard/API data is inline mock
- Replace with `api.get(...)` calls in pages and set `VITE_API_BASE_URL`

## Development Notes
- Icons in `public/icons/` are placeholders; replace with final assets
- Consider persisting dashboard card order (localStorage)
- Add notification list management + unread count decrement
- Add real uploads + progress reporting (XHR/Fetch streams)
- Add sidebar tooltips when collapsed
- Add route-level guards for role-based access if needed

## Scripts
- `dev`: start development server
- `build`: production build
- `preview`: preview the build
- `lint`: run ESLint
- `format`: run Prettier
- `test`: run Vitest

## License
Proprietary – © Nexora. All rights reserved.
