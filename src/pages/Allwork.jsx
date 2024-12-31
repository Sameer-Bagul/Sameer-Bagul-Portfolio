import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { ButtonPrimary } from '../components/Button';

const works = [
  {
    imgSrc: '/images/isha-girls-pg.png',
    title: 'Isha Girls PG',
    tags: ['Freelancing', 'React.js', 'Node.js'],
    projectLink: 'https://isha-girls-pg.vercel.app/',
  },
  {
    imgSrc: '/images/Geeta-for-all.png',
    title: 'Gita for all',
    tags: ['React.js', 'Spiritual', 'Personal Project'],
    projectLink: 'https://bhagwat-geeta-for-all.vercel.app/',
  },
  {
    imgSrc: '/images/portfolio.png',
    title: 'My Portfolio',
    tags: ['React.js', 'React Three Fiber', 'GSAP'],
    projectLink: 'https://sameer-bagul-portfolio.vercel.app/',
  },
  {
    imgSrc: '/images/web-mine-craft.png',
    title: 'Web Minecraft',
    tags: ['Three.js', 'Node.js', 'Web 3D Integration'],
    projectLink: 'https://github.com/Sameer-Bagul/web-mine-craft',
  },
  {
    imgSrc: '/images/prathamagro.png',
    title: 'Pratham Agro (ECommerce website)',
    tags: ['Freelancing', 'React.js', 'Node.js'],
    projectLink: 'https://pratham-agro.vercel.app/',
  },
  {
    imgSrc: '/images/UIUXAwardWinning.png',
    title: 'APP UI|UX 1st Prize',
    tags: ['App Design', 'Figma', 'UI/UX'],
    projectLink: 'https://www.figma.com/@sameer28',
  },
];

const Allwork = () => {
  const [searchTech, setSearchTech] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredWorks = works.filter(({ tags }) => {
    const matchesCategory = selectedCategory === 'All' || tags.includes(selectedCategory);
    const matchesSearch = tags.some((tag) =>
      tag.toLowerCase().includes(searchTech.toLowerCase())
    );
    return matchesCategory && matchesSearch;
  });

  const techStacks = Array.from(new Set(works.flatMap((work) => work.tags)));

  return (
    <div className="container mx-auto p-6">
      
      {/* Header Section */}
      <div className="flex flex-wrap items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-zinc-100">My Work</h2>
        <ButtonPrimary label="Back to Home" icon="arrow_back" href="/" />
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
          <input
            type="text"
            value={searchTech}
            onChange={(e) => setSearchTech(e.target.value)}
            placeholder="Search by tech stack..."
            className="w-full sm:w-1/2 px-4 py-2 border border-zinc-600 rounded-full bg-zinc-900 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500 "
          />

          {/* Tech Stack Filters */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-2 rounded-full border ${
              selectedCategory === 'All' ? 'bg-blue-500 text-white' : 'bg-zinc-800 text-zinc-300'
            } hover:bg-blue-400 hover:text-white`}
          >
            All
          </button>
          {techStacks.map((tech) => (
            <button
              key={tech}
              onClick={() => setSelectedCategory(tech)}
              className={`px-4 py-2 rounded-full border ${
                selectedCategory === tech ? 'bg-blue-500 text-white' : 'bg-zinc-800 text-zinc-300'
              } hover:bg-blue-400 hover:text-white`}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {filteredWorks.length > 0 ? (
          filteredWorks.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
            />
          ))
        ) : (
          <p className="text-zinc-400 text-center col-span-full">No projects found.</p>
        )}
      </div>
    </div>
  );
};

export default Allwork;
