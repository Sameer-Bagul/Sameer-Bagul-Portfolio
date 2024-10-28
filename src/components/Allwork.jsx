import ProjectCard from '../components/ProjectCard'; 
import { ButtonPrimary } from '../components/Button';

const works = [
  {
    imgSrc: '/images/project-1.jpg',
    title: 'Full stack music app',
    tags: ['API', 'MVC', 'Development'],
    projectLink: ''
  },
  {
    imgSrc: '/images/project-2.jpg',
    title: 'Free stock photo app',
    tags: ['API', 'SPA'],
    projectLink: ''
  },
  {
    imgSrc: '/images/project-3.jpg',
    title: 'Recipe app',
    tags: ['Development', 'API'],
    projectLink: ''
  },
  {
    imgSrc: '/images/project-4.jpg',
    title: 'Real state website',
    tags: ['Web-design', 'Development'],
    projectLink: ''
  },
  {
    imgSrc: '/images/project-5.jpg',
    title: 'eCommerce website',
    tags: ['eCommerce', 'Development'],
    projectLink: ''
  },
  {
    imgSrc: '/images/project-6.jpg',
    title: 'vCard Personal portfolio',
    tags: ['Web-design', 'Development'],
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
