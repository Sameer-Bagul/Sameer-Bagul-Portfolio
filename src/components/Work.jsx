import ProjectCard from "./ProjectCard";
import { ButtonPrimary } from "./Button";
import { Link } from "react-router-dom";


const works = [
  {
    imgSrc: '/images/project-1.jpg',
    title: 'Full stack music app',
    tags: ['API', 'MVC', 'Development'],
    projectLink: 'https://musify-5al0.onrender.com/'
  },
  {
    imgSrc: '/images/project-2.jpg',
    title: 'Free stock photo app',
    tags: ['API', 'SPA'],
    projectLink: 'https://pixstock-official.vercel.app/'
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
    projectLink: 'https://github.com/codewithsadee-org/wealthome'
  },
  {
    imgSrc: '/images/project-5.jpg',
    title: 'eCommerce website',
    tags: ['eCommerce', 'Development'],
    projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website'
  },
  {
    imgSrc: '/images/project-6.jpg',
    title: 'vCard Personal portfolio',
    tags: ['Web-design', 'Development'],
    projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
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