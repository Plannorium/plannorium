import ProjectCard from "./ProjectCard";

const dummyProjects = [
  {
    id: 1,
    title: "Team Hub",
    subtitle: "Collaborative project management platform",
    image: "/teamhub.png",
    link: "https://teamhub-site.vercel.app/",
  },
  {
    id: 2,
    title: "Ivorry Finance",
    subtitle: "Innovative decentralized finance solutions",
    image: "/ivory.png",
    link: "https://ivory.finance/",
  },
  {
    id: 3,
    title: "Kanban Board UI",
    subtitle: "Elegant Intuitive Kanban Board",
    image: "/kanban.png",
    link: "https://kanban.sparkstrand.com/",
  },
  {
    id: 4,
    title: "Lendsqr Dashboard UI",
    subtitle: "A clean dashboard for data visualization",
    image: "/lendsqr.png",
    link: "https://mustapha-shuaibu-lendsqr-fe-test.vercel.app/",
  },
];

export default function PortfolioPreview() {
  return (
    <section className="py-20 bg-gradient-to-r from-black to-zinc-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-700 opacity-30 animate-pulse" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold mb-10 text-white text-center">
          Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dummyProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
