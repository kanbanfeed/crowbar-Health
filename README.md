# Crowbar Health

Healthcare that understands you. A modern, responsive healthcare platform built with Node.js and Tailwind CSS.

## Features

- **Glassmorphism Design**: Modern, clean UI with backdrop blur effects
- **Responsive Layout**: Works seamlessly on all devices
- **Animated Counters**: Dynamic health statistics with smooth animations
- **Interactive Cards**: Hover effects on service cards
- **Real-time Data**: Node.js API endpoint for health statistics
- **3D Vitals Dashboard**: Floating card with heart rate visualization

## Tech Stack

- **Backend**: Node.js with Express
- **Frontend**: HTML, Tailwind CSS, Vanilla JavaScript
- **Styling**: Glassmorphism with emerald-600 primary color

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

3. Open your browser and navigate to:
```
http://localhost:3000
```

## API Endpoints

### GET /api/health-stats
Returns health statistics:
```json
{
  "activeDoctors": 120,
  "patientsHelped": 5000,
  "appointmentsToday": 45,
  "satisfactionRate": 98,
  "telemedSessions": 320,
  "prescriptionsFilled": 890
}
```

## Design Features

- **Color Palette**:
  - Primary: emerald-600 (Trust/Medical)
  - Background: slate-50 (Clean white/grey)
  - Text: slate-800

- **Glassmorphism Effects**: 
  - `backdrop-blur-md` and `bg-white/70` on cards
  - Modern, clean aesthetic

- **Hover Effects**:
  - Care cards lift up on hover (`-translate-y-1`)
  - Border changes to emerald-500 on hover

## Project Structure

```
crowbar-Health/
├── server.js          # Express server
├── package.json       # Dependencies
├── tailwind.config.js # Tailwind configuration
├── public/
│   ├── index.html     # Main HTML file
│   └── app.js         # Client-side JavaScript
└── README.md          # This file
```

## License

ISC

