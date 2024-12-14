type Project = {
  image: string;
  title: string;
  description: string;
  tags: string[];
  live: string;
  github: string;
};

const ProjectArray: Project[] = [
  {
    image: "/images/Portfolio.png",
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management and secure payment integration.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    live: "https://ecommerce-example.com",
    github: "https://github.com/yourusername/ecommerce-project",
  },
  {
    image: "/images/project2.jpg",
    title: "Task Management App",
    description:
      "A responsive task management application with drag-and-drop functionality and team collaboration features.",
    tags: ["Vue.js", "Firebase", "Vuex", "Tailwind CSS"],
    live: "https://task-manager-example.com",
    github: "https://github.com/yourusername/task-manager",
  },
  {
    image: "/images/project3.jpg",
    title: "Weather Forecast Dashboard",
    description:
      "An interactive weather dashboard that provides real-time forecasts and historical weather data visualization.",
    tags: ["React", "D3.js", "OpenWeatherMap API", "Styled Components"],
    live: "https://weather-dashboard-example.com",
    github: "https://github.com/yourusername/weather-dashboard",
  },
];

export default ProjectArray;
