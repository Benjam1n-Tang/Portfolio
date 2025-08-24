import SkillsCard from "../components/SkillsCard";
import { useState } from "react";
import { skills } from "../data";
import Button from "../components/Button";

const Skills = () => {
  const [show, setShow] = useState(false);

  const handleButton = () => {
    if (show == true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <section
      id="skills"
      className="min-h-[calc(100dvh)] justify-center max-container flex-col overflow-x-auto flex pb-10 py-4 md:gap-12 sm:gap-8 gap-12"
    >
      <div className="w-full flex flex-col justify-center items-center gap-2 py-4 px-4">
        <h2 className="font-inter sm:text-5xl text-4xl tracking-tighter text-neutral-900 font-light ">
          {" "}
          Relevant Skills{" "}
        </h2>
        <h4 className="font-inter sm:text-xl text-lg tracking-tight text-neutral-400 font-light text-center lg:text-left pb-10">
          {" "}
          From frontend to backend, here are the technologies I’m most familiar
          with and confident using.{" "}
        </h4>
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row gap-8 w-full ${
            show ? `h-full` : `md:h-90 h-185 overflow-y-hidden`
          }`}
        >
          {skills.map((skill) => (
            <SkillsCard name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Button
          outline={false}
          onClick={handleButton}
          text={show ? "Show Less" : "Show More"}
          width={"lg:w-46 sm:w-44 w-40"}
          height={"lg:h-16 h-14"}
          radius={"rounded-[0.5em]"}
        />
      </div>
    </section>
  );
};

export default Skills;
