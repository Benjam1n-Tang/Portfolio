import * as Icon from "../assets/icons";

type ProjectsProps = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  repo?: string;
  link?: string;
};

const ProjectsCard = (props: ProjectsProps) => {
  return (
    <div className="bg-primary-800 2xl:w-100 2xl:h-90 w-full h-auto gap-12 lg:gap-0 rounded-lg p-4 flex flex-col justify-between">
      <div>
        <div className="flex flex-row md:justify-between justify-end items-center px-2 pt-2">
          <label className="text-nowrap hidden md:block font-inter text-neutral-100 text-xs font-normal">
            {" "}
            {props.date}{" "}
          </label>
          <div className="flex flex-row gap-2">
            {props.link && (
              <a href={props.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={Icon.externalLinkGreen}
                  alt="Link"
                  className="h-8 w-auto hover:scale-108 duration-200"
                />
              </a>
            )}
            {props.repo && (
              <a href={props.repo} target="_blank" rel="noopener noreferrer">
                <img
                  src={Icon.githubGreen}
                  alt="Github"
                  className="h-8 w-auto hover:scale-108 duration-200"
                />
              </a>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-6 px-2 pt-12">
          <h3 className="font-inter text-neutral-25 font-semibold text-3xl line-clamp-1">
            {" "}
            {props.title}{" "}
          </h3>
          <p className="font-inter text-neutral-25 text-base font-light line-clamp-6">
            {" "}
            {props.description}{" "}
          </p>
        </div>
      </div>

      <div className="flex pb-2 gap-6 px-2 overflow-x-auto text-nowrap">
        {props.tags.map((tag) => (
          <label className="text-neutral-100 font-ubuntu-mono text-xs font-semibold">
            {" "}
            {tag}{" "}
          </label>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;
