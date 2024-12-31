const aboutItems = [
  {
    label: 'Project done',
    number: 20
  },
  {
    label: 'Years of experience',
    number: "Fresher"
  }
];

const About = () => {
  return (
    <section
      id="about"
      className="section"
    >
      <div className="container">

        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! I&apos;m Sameer, an engineering student at PES Modern College of Engineering in Pune. I’m passionate about coding and full-stack web development, with skills in HTML, CSS, JavaScript, Node.js, and React. I also have a strong interest in UI/UX design, ensuring my projects are both functional and visually appealing.

With experience in 3D modeling using Blender and data science tools like NumPy and Pandas, I enjoy turning ideas into reality. Let&apos;s collaborate to create something amazing!</p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {
              aboutItems.map(({ label, number }, key) => (
                <div key={key}>
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                  </div>
                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
              ))
            }

            <img
              src="/images/logo.svg"
              alt="logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>

      </div>

    </section>
  )
}

export default About
