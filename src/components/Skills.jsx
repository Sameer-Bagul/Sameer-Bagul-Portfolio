import "./skill.css";
import SkillCard from "./elements/SkillCard";
import PropTypes from 'prop-types';

const skillCategories = [
  {
    category: "Frameworks",
    skills: [
      { imgSrc: '/images/react.svg', label: 'React', desc: 'Framework' },
      { imgSrc: '/images/expressjs.svg', label: 'ExpressJS', desc: 'Node Framework' },
      { imgSrc: '/images/r3f.webp', label: 'React Three Fiber', desc: '3D Rendering' },
      { imgSrc: '/images/nextjs.jpg', label: 'Next.js', desc: 'Framework' },
    ],
  },
  {
    category: "Languages",
    skills: [
      { imgSrc: '/images/C.png', label: 'C', desc: 'Programming Language' },
      { imgSrc: '/images/Cpp.png', label: 'C++', desc: 'Programming Language' },
      { imgSrc: '/images/java.png', label: 'Java', desc: 'Programming Language' },
      { imgSrc: '/images/HTML5.webp', label: 'HTML', desc: 'Markup Language' },
      { imgSrc: '/images/JS.webp', label: 'JavaScript', desc: 'Interaction' },
      { imgSrc: '/images/tailwindcss.svg', label: 'TailwindCSS', desc: 'User Interface' },
    ],
  },
  {
    category: "Tools",
    skills: [
      { imgSrc: '/images/figma.png', label: 'Figma', desc: 'Design tool' },
      { imgSrc: '/images/git.webp', label: 'Git', desc: 'Version Control' },
      { imgSrc: '/images/github.webp', label: 'GitHub', desc: 'Version Control Hosting' },
    ],
  },
  {
    category: "Databases",
    skills: [
      { imgSrc: '/images/SQL.webp', label: 'PL/SQL', desc: 'Database Language' },
      { imgSrc: '/images/mongodb.svg', label: 'MongoDB', desc: 'Database' },
    ],
  },
  {
    category: "Other Technologies",
    skills: [
      { imgSrc: '/images/WS.webp', label: 'WebSockets', desc: 'Real-time Communication' },
      { imgSrc: '/images/node.png', label: 'NodeJS', desc: 'Web Server' },
      { imgSrc: '/images/numpy.webp', label: 'NumPy', desc: 'Data Manipulation' },
      { imgSrc: '/images/pandas.png', label: 'Pandas', desc: 'Data Analysis' },
      { imgSrc: '/images/MPL.png', label: 'Matplotlib', desc: 'Data Visualization' },
    ],
  },
];

const Skills = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">
          Essential Tools and Techs I Mastered
        </h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
        </p>

        {skillCategories.map(({ category, skills }) => (
          <div key={category} className="mb-12">
            <h3 className="text-xl font-bold text-zinc-200 mb-4 reveal-up">{category}</h3>
            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,1fr))]">
              {skills.map(({ imgSrc, label, desc }) => (
                <SkillCard
                  key={label}
                  imgSrc={imgSrc}
                  label={label}
                  desc={desc}
                  classes="reveal-up"
                  aria-label={`${label} - ${desc}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

Skills.propTypes = {
  skillCategories: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      skills: PropTypes.arrayOf(
        PropTypes.shape({
          imgSrc: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          desc: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ),
};

export default Skills;
