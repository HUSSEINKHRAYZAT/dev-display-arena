
import ProjectCard, { Project } from './ProjectCard';

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured online shopping platform with product listings, cart functionality, and secure checkout process.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600",
    demoUrl: "https://example.com/demo1",
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    tags: ["React", "Node.js", "MongoDB", "Stripe"]
  },
  {
    id: 2,
    title: "Weather Dashboard",
    description: "Real-time weather application showing forecasts, historical data, and interactive maps for locations worldwide.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600",
    demoUrl: "https://example.com/demo2",
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    tags: ["JavaScript", "OpenWeather API", "Chart.js"]
  },
  {
    id: 3,
    title: "Task Management App",
    description: "Collaborative project management tool with task assignments, progress tracking, and team communication features.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600",
    demoUrl: "https://example.com/demo3",
    githubUrl: "https://github.com/yourusername/task-manager",
    tags: ["React", "Firebase", "Tailwind CSS"]
  },
  {
    id: 4,
    title: "Fitness Tracker",
    description: "Mobile-responsive application for tracking workouts, setting fitness goals, and visualizing progress over time.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600",
    demoUrl: "https://example.com/demo4",
    githubUrl: "https://github.com/yourusername/fitness-tracker",
    tags: ["TypeScript", "React", "D3.js", "Express"]
  }
];

const ProjectList = () => {
  return (
    <section id="projects" className="section-padding bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent development projects showcasing my technical skills and problem-solving abilities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
