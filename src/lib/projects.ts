interface Project {
  name: string;
  description?: string;
  tech: string[];
  link: string;
}

const projects: Project[] = [
  {
    name: "Domain Manager",
    description:
      "A domain management app that tracks registration and expiry dates, DNS records, and SSL certificate details",
    tech: ["React", "TanStack Router", "SWR", "Express", "TailwindCSS"],
    link: "https://github.com/mohammedyh/domain-manager",
  },
  {
    name: "npr - node script runner",
    description:
      "A CLI tool that lets you browse and run local project scripts using npm, pnpm, yarn, bun or deno",
    tech: ["Go", "BubbleTea"],
    link: "https://github.com/mohammedyh/npr",
  },
  {
    name: "Pokemon Finder",
    description: "An app to search and view information about different Pokemon",
    tech: ["React", "Tanstack Query", "Chakra UI"],
    link: "https://github.com/mohammedyh/pokemon-finder",
  },
  {
    name: "Shopify Dev Clone",
    description: "A clone of the shopify.dev website",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/mohammedyh/shopify-dev-clone",
  },
  {
    name: "TailwindCSS Agency Website",
    description: "A minimal and responsive agency landing page website",
    tech: ["HTML", "TailwindCSS", "JavaScript"],
    link: "https://github.com/mohammedyh/tailwind-agency-site",
  },
];

export default projects;
