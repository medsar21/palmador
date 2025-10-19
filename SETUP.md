# Project Setup Guide

This is a React + Vite project with Supabase integration for a chocolate e-commerce website.

## Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager
- Supabase account (for database)

## Environment Configuration

### 1. Create Environment File

Create a `.env.local` file in the root directory with the following content:

```env
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_project_url_here
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key_here
```

### 2. Get Supabase Credentials

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Create a new project or select existing project
3. Go to Settings > API
4. Copy the following values:
   - **Project URL** → `VITE_SUPABASE_URL`
   - **anon public key** → `VITE_SUPABASE_PUBLISHABLE_KEY`

## Installation & Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

- `src/components/` - React components
- `src/pages/` - Page components
- `src/integrations/supabase/` - Supabase configuration
- `src/assets/` - Images and static assets
- `public/` - Public static files

## Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Supabase** - Backend and database
- **React Router** - Client-side routing

## Troubleshooting

### Port Already in Use
If port 8080 is already in use, you can change it in `vite.config.ts`:

```typescript
server: {
  host: "::",
  port: 3000, // Change to any available port
},
```

### Supabase Connection Issues
- Verify your environment variables are correct
- Check that your Supabase project is active
- Ensure the API keys have the correct permissions

