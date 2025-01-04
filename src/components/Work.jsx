import ProjectCard from "./ProjectCard";
import { ButtonPrimary } from "./elements/Button";
import { Link } from "react-router-dom";


const works = [
  {
    imgSrc: '/images/isha-girls-pg.png',
    title: 'Isha Girls PG',
    tags: ['Freelancing', 'React.js', 'Node.js'],
    projectLink: 'https://isha-girls-pg.vercel.app/'
  },
  {
    imgSrc: '/images/Geeta-for-all.png',
    title: 'Gita for all',
    tags: ['React.js', 'Spiritual', 'Personal Project'],
    projectLink: 'https://bhagwat-geeta-for-all.vercel.app/'
  },
  {
    imgSrc: '/images/portfolio.png',
    title: 'My Portfolio',
    tags: ['React.js', 'React three Fiber', 'GSAP'],
    projectLink: 'https://sameer-bagul-portfolio.vercel.app/'
  },
  {
    imgSrc: '/images/web-mine-craft.png',
    title: 'Web Minecraft ',
    tags: ['three.js', 'Node.js', 'Web 3D Integration'],
    projectLink: 'https://github.com/Sameer-Bagul/web-mine-craft'
  },
  {
    imgSrc: '/images/prathamagro.png',
    title: 'Pratham Agro (ECommerce website)',
    tags: ['Freelancing', 'React.js', 'Node.js'],
    projectLink: 'https://pratham-agro.vercel.app/'
  },
  {
    imgSrc: '/images/UIUXAwardWinning.png',
    title: 'APP UI|UX 1st Prize ',
    tags: ['APP-design', 'Figma','UI|UX'],
    projectLink: 'https://www.figma.com/@sameer28'
  },
];

const Work = () => {

  return (
    <div>
      <section
        id="work"
        className="section"
      >
        <div className="container">

          <div className="flex flex-row justify-between ">

            <h2 className="headline-2 mb-8 reveal-up ">
              My Portfolio Highlights
            </h2>
            <Link to="/allwork" target="_blank">
              <ButtonPrimary label={"All Work"} icon={"arrow_outward"} />
            </Link>

          </div>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {works.map(({ imgSrc, title, tags, projectLink }, key) => (
              <ProjectCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
                classes="reveal-up"
              />
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Link to="/allwork" target="_blank">
              <ButtonPrimary label={"All Work"} icon={"arrow_outward"} />
            </Link>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Work