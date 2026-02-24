# Personal Portfolio Website

A modern, professional, and responsive one-page portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **About Me**: Professional bio and background
- **Tech Stack**: Interactive grid showcasing skills and technologies
- **Projects**: Featured projects with descriptions and links
- **Experience & Education**: Timeline view of career progression
- **Contact Section**: Easy access to social links and email
- **Dark Mode**: Minimalist dark theme by default
- **Smooth Animations**: Framer Motion powered transitions and hover effects

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React (Icons)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
personal-website/
├── app/
│   ├── globals.css      # Global styles and Tailwind imports
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Main portfolio page
├── assets/
│   └── Ofek-Cofman-CV.pdf  # CV file for download
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Customization

The portfolio is designed to be easily customizable:

- **Personal Information**: Edit the content in `app/page.tsx`
- **Projects**: Update the `projects` array in `app/page.tsx`
- **Tech Stack**: Modify the `techStack` array in `app/page.tsx`
- **Experience**: Update the `experience` array in `app/page.tsx`
- **Styling**: Adjust colors and styles in `app/globals.css` and `tailwind.config.ts`

## Build for Production

```bash
npm run build
npm start
```

## License

Personal project - All rights reserved.

