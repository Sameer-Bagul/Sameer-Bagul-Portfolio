import PropTypes from "prop-types";

const ProjectCard = ({
  imgSrc,
  title,
  tags,
  projectLink,
  classes
}) => {
  return (
    <div className={"relative p-6 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors " + classes}>
      <figure className="img-box aspect-square rounded-lg mb-4 overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          loading='lazy'
          className="img-cover w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </figure>

      <div className="flex flex-col justify-between gap-4">
        <div>
          <h3 className="title-1 mb-3 text-lg font-semibold text-white">
            {title}
          </h3>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            {tags.map((tag, key) => (
              <span
                key={key}
                className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0 self-end">
          <span
            className="material-symbols-rounded"
            aria-hidden="true"
          >
            arrow_outward
          </span>
        </div>
      </div>

      <a 
        href={projectLink} 
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0"
      >
      </a>
    </div>
  )
}

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string,
  classes: PropTypes.string
}

export default ProjectCard;
