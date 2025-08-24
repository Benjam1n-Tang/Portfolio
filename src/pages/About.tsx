import * as Image from "../assets/images";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-[calc(100dvh)] justify-center max-container pb-8 lg:flex-row flex-col overflow-x-auto gap-6 flex py-6"
    >
      <div className="flex-1 flex items-center lg:justify-start justify-center">
        <div className="w-fit h-fit bg-primary-100 lg:mt-6 sm:mt-5 lg:mr-5 sm:mr-4 mt-0 mr-0 rounded-t-lg">
          <img
            src={Image.headshot}
            alt="Benjamin Tang"
            width="40em"
            className="lg:w-100 md:w-85 w-75 h-auto bg-primary-800 relative lg:bottom-6 lg:left-5 sm:bottom-5 sm:left-4 bottom-0 left-0 rounded-t-lg"
          />
        </div>
      </div>
      <div className="flex-1 flex lg:justify-end justify-center">
        <div className="sm:max-w-180 w-full flex flex-col justify-center items-center gap-2 py-4 px-0 sm:px-4">
          <h2 className="px-2 font-inter sm:text-5xl text-4xl tracking-tighter text-neutral-900 font-light ">
            {" "}
            About Me{" "}
          </h2>
          <h4 className="px-2 font-inter sm:text-xl text-lg tracking-tight text-neutral-400 font-light text-center">
            {" "}
            A brief overview of my background, values, and the skills and
            experiences that define my approach to development.{" "}
          </h4>
          <div className="pt-10 space-y-6">
            <p className="font-inter text-sm lg:text-base text-neutral-900 font-light">
              {" "}
              Benjamin Tang is a senior at Stony Brook University majoring in
              Computer Science, currently based in New York City. His passion
              for technology began in high school, where he was drawn to the
              hands-on nature of computing, problem-solving, and iterative
              learning. Over the course of his academic journey, he has
              developed a strong foundation in software development and
              continues to expand his technical skill set. With a focus on
              building efficient, user-centered applications, he is eager to
              apply his knowledge and showcase his capabilities as a
              developer.{" "}
            </p>
            <p className="font-inter text-sm lg:text-base text-neutral-900 font-light">
              {" "}
              Benjamin’s experience as a Python tutor for the non-profit BigSib
              Organization, which he co-founded with his peers, alongside his
              internship at the Selective Corporate Internship Program (SCIP),
              has contributed significantly to his growth as a developer. These
              roles have strengthened his ability to communicate effectively,
              collaborate within teams, and adapt to different learning
              environments. Through SCIP, he gained valuable exposure to
              industry practices and real-world applications of technology in a
              professional setting. He looks forward to further opportunities to
              apply his skills and continue developing as a software
              engineer.{" "}
            </p>
            <p className="font-inter text-sm lg:text-base text-neutral-900 font-light">
              {" "}
              Benjamin is actively seeking opportunities to contribute to
              meaningful projects and collaborate with forward-thinking teams.
              Whether it's through internships, freelance work, or full-time
              roles, he is eager to apply his skills in real-world settings and
              continue learning from industry professionals. Feel free to get in
              touch to discuss potential opportunities or to simply connect.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
