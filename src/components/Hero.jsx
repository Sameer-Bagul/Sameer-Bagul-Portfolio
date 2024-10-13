import { ButtonPrimary, ButtonOutline } from "./Button";
import Avatar from "./Avatar"; // Import the Avatar component for 3D model

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        {/* Left Section - Avatar Image, Headline, and Buttons */}
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/avatar-1.jpg"
                height={40}
                width={40}
                alt="Sameer Bagul"
                className="img-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              <span className="ml-2">Available for Work</span>
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Building Scalable Modern Websites for the Future
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
