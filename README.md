# Valentine's Card

A playful, interactive Valentine's Day invitation where the "No" button is just a little too shy to be clicked.

## Features

- **Runaway "No" Button** - The "No" button detects when your cursor gets close and flees to a new position, making it impossible to reject
- **Personalized Message** - Set the recipient's name via URL (`?name=Ananya`), the in-page form, or the API—no rebuild or redeploy
- **Multi-language Support** - Available in English and Danish
- **Beautiful Animations**
  - Floating heart emojis drifting across the screen
  - Sparkle trail following your cursor
  - Pulsing "Yes" button with glow effect
  - Shifting gradient background
- **Celebration Screen** - Confetti explosion and heart burst animation when "Yes" is clicked
- **Dynamic Messages** - The message changes based on how many times the user tries to click "No"
- **Mobile Support** - Touch events supported for mobile devices
- **Custom Cursor** - Heart emoji cursor for extra romance

## Tech Stack

- React 18
- TypeScript
- Vite
- CSS Animations

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/valentines-card.git
   cd valentines-card
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. (Optional) Set language in `.env`: `VITE_LANGUAGE=EN` or `VITE_LANGUAGE=DA`.

4. Start the development server (runs the name API + Vite):
   ```bash
   npm run dev
   ```

5. Open http://localhost:5173 in your browser. Use **http://localhost:5173/?name=Ananya** to set the name via URL.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready to deploy to any static hosting service.

## Dynamic name (no redeploy)

The card name is **dynamic**. No env vars or rebuilds needed.

| Method | Example |
|--------|--------|
| **URL param** | `yoursite.com/?name=Ananya` |
| **API** | `GET /api/name` returns `{ "name": "…" }`. `POST /api/name` with body `{ "name": "Ananya" }` sets it. The UI polls the API every 5s so changes show up. |

Fallback when no name is set: **Valentine**.

## Configuration

| Variable | Description | Default | Options |
|----------|-------------|---------|---------|
| `VITE_LANGUAGE` | UI language | `EN` | `EN`, `DA` |

## How It Works

The "No" button uses mouse position tracking to detect when the cursor approaches within 120 pixels. When triggered, it:

1. Calculates a new random position on the screen
2. Ensures the new position doesn't overlap with the "Yes" button
3. Ensures the new position isn't too close to the current cursor
4. Keeps the button within screen boundaries (60px padding from edges)
5. Animates smoothly to the new position

The more times you try to click "No", the more desperate the messages become!

## Message Progression

| Attempts | English | Danish |
|----------|---------|--------|
| 0 | "{Name}, will you be my Valentine?" | "{Name}, vil du være min Valentine?" |
| 1-2 | "Are you sure you want to say no?" | "Er du sikker på du vil sige nej?" |
| 3-5 | "Please? Pretty please?" | "Please? Søde dig?" |
| 6-9 | "I won't give up on you!" | "Jeg giver ikke op!" |
| 10-14 | "That button is too shy to be clicked!" | "Den knap er for genert til at blive trykket på!" |
| 15+ | "Just say YES already!" | "Sig bare JA!" |

## Deployment

- **Static (URL-only name)**  
  Deploy the Vite build (`npm run build` → `dist/`) to Vercel, Netlify, or GitHub Pages. The name can still be set via the URL: `yoursite.com/?name=Ananya`. No API needed.

- **With dynamic name API**  
  Deploy the frontend and run `server.js` (e.g. on the same host or a small Node server) so `GET/POST /api/name` work. Point the frontend’s `/api` proxy to that server in production.

## License

MIT License - Feel free to use this for your own Valentine!

---

Made with love for that special someone who just can't say no.
