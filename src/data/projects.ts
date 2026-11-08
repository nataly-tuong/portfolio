const asset = (name: string) => `${import.meta.env.BASE_URL}assets/${name}`;
export const projects = [
  {
    id: "01",
    title: "KokoSpeak",
    category: "LOCAL AI / AUDIO",
    image: asset("kokospeak.webp"),
    alt: "KokoSpeak studio with script editor, voice blending controls, and audio export",
    description:
      "A space for every voice. Write scripts, blend voices, shape their delivery, and export audio and subtitles. All on your own computer!",
    stack: ["React", "Python", "Kokoro", "TypeScript", "FastAPI"],
    detail:
      "A React interface backed by Python and the open-source Kokoro model. Revamped from the original application through architecture, installation, and deployment with Codex Sol.",
    note: "Development workflow · Codex Sol",
    github: "https://github.com/nataly-tuong/kokospeak",
    live: null,
  },
  {
    id: "02",
    title: "Stemcraft",
    category: "WEB / GENERATIVE AI",
    image: asset("stemcraft.webp"),
    alt: "Stemcraft bouquet planner showing a flower inventory and AI arrangement panel",
    description:
      "Start with the flowers you have. Get a full bouquet arrangement with a considered palette, balanced proportions, and the meaning behind every stem.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Groq", "Vercel"],
    detail:
      "Add flowers to your list and request an arrangement. An AI model turns your selection into a complete arrangement suggestion, including palette, proportion, and flower meanings.",
    note: "Development workflow · Claude API",
    github: "https://github.com/nataly-tuong/stemcraft",
    live: "https://stemcraft-psi.vercel.app/",
  },
  {
    id: "03",
    title: "Mothball",
    category: "FULL STACK / COLLABORATION",
    image: asset("mothball.webp"),
    alt: "Mothball shared closet landing page with inventory statuses and collaboration features",
    description:
      "One closet for multiple people. A shared inventory that keeps everyone in sync on what’s listed, what’s waiting, and what happens next.",
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Express",
      "PostgreSQL",
      "Prisma",
    ],
    detail:
      "A Vite frontend and Express API, with PostgreSQL and Prisma for data, Cloudinary for images, JWT authentication with Google OAuth, and Docker for local development.",
    note: "Also built with · Vite, Cloudinary, JWT, Google OAuth, Docker",
    github: null,
    live: null,
  },
  {
    id: "04",
    title: "This Portfolio",
    category: "WEB / INTERACTION",
    image: asset("portfolio.png"),
    alt: "",
    description: "Portfolio site",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    detail: "This portfolio. Cool like a gallery. Has projects.",
    note: "You’re here",
    github: "https://github.com/nataly-tuong/portfolio",
    live: null,
  },
];
