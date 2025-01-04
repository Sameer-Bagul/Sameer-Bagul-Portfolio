import { ButtonPrimary, ButtonOutline } from "./elements/Button";
import Avatar from "./elements/Avatar"; // Import the Avatar component for 3D model
import useTypingEffect from './elements/useTypingEffect'; // Import the custom typing effect hook

const Hero = () => {
  const words = [' Sameer', ' a Developer', ' a Designer', ' a Freelancer'];
  const { text } = useTypingEffect(words, 150); // Call the custom hook

  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        {/* Left Section - Avatar Image, Headline, and Buttons */}
        <div>
          <div className="flex items-center gap-3">
            
            <a href="https://www.linkedin.com/in/sameer-bagul/" target="_blank">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/available.jpg"
                height={40}
                width={40}
                alt="Sameer Bagul"
                className="img-cover"
              />
            </figure>
            </a>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              <span className="ml-2">Available for Work</span>
            </div>

          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Hi
            <img
              src="/images/hi.png"
              alt="Waving Hand"
              width={50}
              className="inline-block mb-4 ml-4"
            />
            <br />
            I&apos;m 
            <span style={{ fontWeight: "bold", color: "green" }} className="bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 bg-clip-text text-transparent">
              {text}
            </span>
             |
          </h2>



          <h2 className="headline-2 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[20ch] mt-5 mb-8 lg:mb-10">
          Crafting Innovative Solutions and Bringing Ideas to Life with Code
          </h2>

          <div className="flex items-center gap-3">
            <ButtonPrimary label={"Download CV"} icon={"Download"} />
            <ButtonOutline href="#about" label="Scroll down" icon="arrow_downward" />
          </div>
        </div>

        {/* Right Section - 3D Avatar instead of Image */}
        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[30px] overflow-hidden" style={{ height: '600px' }}>
            {/* Replace the static image with the 3D Avatar */}
            <Avatar />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
