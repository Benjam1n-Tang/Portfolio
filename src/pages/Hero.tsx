import * as Icon from "../assets/icons";
import Button from "../components/Button";
import { useState } from "react";
import { projects } from "../data";
import DotNavigator from "../components/DotNavigator";

const Hero = () => {
  const [proj, setProj] = useState(0);
  const dispProjects = [...projects].reverse().slice(0, 3);

  const changeDisp = (index: number) => {
    setProj(index);
  };

  const changePage = (href: string) => {
    if (href.startsWith("#")) {
      const section = document.querySelector<HTMLElement>(href);
      if (section) {
        const y = section.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
        window.history.pushState(null, "", href);
        return;
      }
    }

    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="home"
      className="md:py-24 pb-10 min-h-[100dvh] max-container flex-col lg:flex-row flex flex-1 items-center lg:gap-0 2xl:gap-6 gap-8 overflow-x-auto"
    >
      <div className="lg:flex-1 flex-1 sm:flex-0 flex w-full pb-20 pt-44 sm:pt-40 sm:pb-0 lg:py-0 items-center justify-center lg:items-start lg:justify-start">
        <div className="flex flex-col gap-8 sm:gap-6">
          <div className="flex flex-col gap-4">
            <h2 className="font-ubuntu-mono tracking-tighter font-medium text-secondary-300 text-3xl sm:text-5xl text-center lg:text-left">
              {" "}
              Hello I'm
            </h2>
            <div className="flex flex-col gap-2">
              <h1 className="font-inter text-neutral-25 text-5xl sm:text-7xl font-semibold tracking-tighter text-center lg:text-left">
                {" "}
                BENJAMIN TANG{" "}
              </h1>
              <h3 className="font-inter text-neutral-50 text-xl sm:text-2xl text-center lg:text-left font-extralight tracking-tight">
                {" "}
                Computer Science Undergraduate{" "}
              </h3>
            </div>
          </div>

          <div className="flex flex-col gap-16 lg:gap-14">
            <p className="font-inter font-light text-sm sm:text-base text-neutral-25 tracking-normal lg:max-w-[28em] text-center lg:text-left px-6 sm:px-2 lg:px-0">
              I'm a Computer Science student at Stony Brook University, with a
              strong interest in software development and problem-solving. Based
              in New York City, I’m passionate about building efficient,
              user-focused applications. 
            </p>

            <div className="flex justify-center lg:justify-start gap-4 lg:gap-8 items-center flex-col sm:flex-row lg:pl-1">
              <Button
                outline={false}
                text={"Contact Me"}
                width={"lg:w-46 sm:w-44 w-40"}
                height={"lg:h-16 h-14"}
                radius={"rounded-[0.5em]"}
                onClick={() => changePage("#contact")}
              />
              <Button
                iconUrl={Icon.githubGreen}
                hoverIconUrl={Icon.githubBlack}
                outline={true}
                text={"Github"}
                width={"lg:w-46 sm:w-44 w-40"}
                height={"lg:h-16 h-14"}
                radius={"rounded-[0.5em]"}
                onClick={() => changePage("https://github.com/Benjam1n-Tang")}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:flex lg:flex-1 justify-end items-start">
        <div className="flex flex-col items-center">
          <div className="flex flex-col gap-4 lg:px-6 xl:px-0">
            <div className="flex justify-center lg:px-2 px-0 lg:pt-0 pt-24">
              <div className="relative w-full max-w-144 lg:max-w-120 2xl:max-w-180 aspect-[3/2] rounded-sm bg-primary-900">
                <img
                  src={dispProjects[proj].image}
                  alt="Project"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <span className="absolute lg:top-0 lg:left-[-12rem] lg:translate-x-0 left-1/2 transform -translate-x-1/2 top-[-5rem] text-neutral-25  text-base font-base font-inter text-center flex lg:flex-col flex-row items-end gap-3">
                  <p className="w-40"> Check out some of my projects </p>
                  <div className="pr-4">
                    <img
                      src={Icon.arrowWhite}
                      alt="Arrow"
                      className="rotate-90 lg:rotate-0 lg:scale-y-[-1] w-10 h-10"
                    />
                  </div>
                </span>
              </div>
            </div>
            <div className="flex justify-between items-end  ">
              <div className="flex-9">
                <label className="font-inter text-neutral-100 text-xs">
                  {" "}
                  {dispProjects[proj].date}{" "}
                </label>
                <h3 className="font-inter text-neutral-25 overflow-hidden text-3xl font-semibold tracking-tight text-nowrap">
                  {" "}
                  {dispProjects[proj].title}
                </h3>
              </div>
              <div className="flex-1 flex justify-end items-start">
                <div className="w-8 h-8 bg-neutral-25 rounded-full flex justify-center items-center font-inter text-primary-800 text-2xl">
                  {" "}
                  {proj + 1}{" "}
                </div>
              </div>
            </div>
            <p className="font-inter text-neutral-25 font-light lg:h-18 overflow-y-hidden">
              {" "}
              {dispProjects[proj].description}{" "}
            </p>
            <div className="flex justify-between items-center">
              <div className="flex gap-6 px-1 overflow-x-auto text-nowrap justify-center items-center">
                {dispProjects[proj].tags.map((tag) => (
                  <label className="text-neutral-100 font-ubuntu-mono text-xs font-semibold">
                    {" "}
                    {tag}{" "}
                  </label>
                ))}
              </div>
              <div className="flex flex-row gap-2 pr-1">
                {dispProjects[proj].link && (
                  <a
                    href={dispProjects[proj].link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={Icon.externalLinkGreen}
                      alt="Link"
                      className="h-6 w-auto hover:scale-110 duration-200"
                    />
                  </a>
                )}
                {dispProjects[proj].repo && (
                  <a
                    href={dispProjects[proj].repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={Icon.githubGreen}
                      alt="Github"
                      className="h-6 w-auto hover:scale-110 duration-200"
                    />
                  </a>
                )}
              </div>
            </div>
            <div></div>
          </div>
          <div className="flex gap-2">
            {dispProjects.map((_, index) => (
              <DotNavigator
                key={index}
                green={true}
                active={proj === index}
                onClick={() => changeDisp(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
