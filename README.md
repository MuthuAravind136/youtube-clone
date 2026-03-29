# YouTube Clone

A high-fidelity, responsive YouTube clone built with **React**, **Next.js**, and **Tailwind CSS v4**.

![YouTube Clone Preview](https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop)

## Features

- **📺 Interactive Video Playback**: Click any video card to watch high-quality content via `react-player`.
- **🔍 Real-time Search**: Debounced search bar to filter videos by title or channel instantly.
- **📱 Fully Responsive**: Seamlessly transitions between mobile, tablet, and desktop views.
- **🌗 Dark Mode Support**: Automatically respects system theme preferences.
- **🧭 Dynamic Sidebar**: Multi-mode navigation (Full, Mini, and Mobile Drawer).
- **📂 Category Filtering**: Scrollable horizontal category bar for content discovery.
- **🎬 Watch Page**: Includes metadata, action buttons (Subscribe, Like, Share), and personalized suggestions.

## Tech Stack

- **Framework**: [Next.js (App Router)](https://nextjs.org/)
- **Language**: JavaScript (JSX)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Player**: [React Player](https://github.com/cookpete/react-player)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/MuthuAravind136/youtube-clone.git
   cd youtube-clone
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

### Running Locally

To start the development server (configured with Webpack for Windows compatibility):

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/`: Next.js App Router pages and global styles.
- `components/`: Reusable UI components (Header, Sidebar, VideoCard, WatchView, etc.).
- `mockData.js`: Centralized mock video data and metadata.
- `public/`: Static assets and icons.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

---
Created with ❤️ by Antigravity.
