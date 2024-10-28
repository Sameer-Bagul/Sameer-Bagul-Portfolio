// src/pages/Allwork.jsx
import ProjectCard from '../components/ProjectCard'; // Import your ProjectCard component
import { ButtonPrimary } from '../components/Button'; // Assuming ButtonPrimary is in the components folder

const works = [
  {
    imgSrc: '/images/project-1.jpg',
    title: 'Isha Girls PG',
    tags: ['Freelancing', 'React.js', 'Node.js'],
    projectLink: ''
  },
  {
    imgSrc: '/images/project-2.jpg',
    title: 'Gita for all',
    tags: ['React.js', 'Spiritual', 'Personal Project'],
    projectLink: ''
  },
  {
    imgSrc: '/images/project-3.jpg',
    title: 'My Portfolio',
    tags: ['React.js', 'React three Fiber', 'GSAP'],
    projectLink: ''
  },
  {
    imgSrc: '/images/project-4.jpg',
    title: 'Web Minecraft ',
    tags: ['three.js', 'Node.js', 'Web 3D Integration'],
    projectLink: ''
  },
  {
    imgSrc: '/images/project-5.jpg',
    title: 'Pratham Agro (ECommerce website)',
    tags: ['Freelancing', 'React.js', 'Node.js'],
    projectLink: ''
  },
  {
    imgSrc: '/images/project-6.jpg',
    title: 'APP UI|UX 1st Prize ',
    tags: ['APP-design', 'Figma','UI|UX'],
    projectLink: ''
  },
];

const Allwork = () => {
  return (
    <div className="container">
      <div className="flex flex-row m-10 justify-between">

        <h2 className="headline-2 reveal-up ">
          My All Projects
        </h2>

        <div className="">
          <ButtonPrimary label={"Back to Home"} icon={"arrow_back"} href={"/"} />
        </div>

      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {works.map(({ imgSrc, title, tags, projectLink }, key) => (
          <ProjectCard
            key={key}
            imgSrc={imgSrc}
            title={title}
            tags={tags}
            projectLink={projectLink}
          />
        ))}
      </div>

    </div>
  );
};

export default Allwork;
