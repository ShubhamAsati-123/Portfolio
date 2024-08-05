interface Project {
  image: string;
  title: string;
  description: string;
  tags: string[];
  live: string;
  github: string;
}

const ProjectsArray: Project[] = [
  {
    image: "/images/Portfolio.png",
    title: "My Portfolio",
    description: "This is my Portfolio made for showcasing my Work and Skills.",
    tags: ["HTML", "CSS", "JS", "Nextjs", "Shadcn UI"],
    live: "https://live-link.com",
    github: "https://github.com/ShubhamAsati-123/Portfolio",
  },
  {
    image: "/path/to/image.jpg",
    title: "My Portfolio",
    description: "This is my Portfolio made for showcasing my Work and Skills.",
    tags: ["JS", "Nextjs", "Shadcn UI"],
    live: "https://live-link.com",
    github: "https://github.com/repo-link",
  },
];

export default ProjectsArray;