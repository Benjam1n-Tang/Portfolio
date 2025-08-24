import axios from "axios";
import DotNavigator from "../components/DotNavigator";
import ProjectsCard from "../components/ProjectsCard";
import { useState, useEffect } from "react";

interface RepoData {
  title: string;
  description: string;
  date: string;
  tags: string[];
  repo: string;
  link: string;
}

interface GitHubRepo {
  name: string;
  description: string | null;
  created_at: string;
  html_url: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<RepoData[]>([]);
  const [itemsToShow, setItemsToShow] = useState(1);
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    const updateItemCount = () => {
      const width = window.innerWidth;
      if (width >= 992) setItemsToShow(6);
      else if (width >= 576) setItemsToShow(4);
      else setItemsToShow(2);

      setPageIndex(0);
    };
    updateItemCount();
    window.addEventListener("resize", updateItemCount);
    return () => window.removeEventListener("resize", updateItemCount);
  }, []);

useEffect(() => {
  axios
    .get<GitHubRepo[]>("https://api.github.com/users/Benjam1n-Tang/repos")
    .then(res => {
      const repos = res.data
        .sort(
          (a, b) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        )
        .map(repo => ({
          title: repo.name,
          description: repo.description || "No description",
          date: new Date(repo.created_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          tags: [],
          repo: repo.name,
          link: repo.html_url,
        }));

      setProjects(repos);
    })
    .catch(err => console.error(err));
}, []);

  const pagesFunction = () => {
    const res: RepoData[][] = [];
    let i = 0;
    while (i < projects.length) {
      res.push(projects.slice(i, i + itemsToShow));
      i += itemsToShow;
    }
    return res;
  };

  const pages = pagesFunction();

  const changePage = (index: number) => setPageIndex(index);

  return (
    <section className="min-h-[calc(100dvh)] justify-center max-container flex-col items-center overflow-x-auto flex pb-10 py-4 md:gap-12 sm:gap-8 gap-12">
      <div className="w-full flex flex-col justify-center items-center gap-2 py-4 px-4">
        <h2 className="font-inter sm:text-5xl text-4xl tracking-tighter text-neutral-900 font-light">
          All Projects
        </h2>
        <h4 className="font-inter sm:text-xl text-lg tracking-tight text-neutral-400 font-light text-center lg:text-left">
          Browse a selection of my GitHub repositories.
        </h4>
      </div>

      <div className="grid grid-flow-row lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
        {pages[pageIndex]?.map(project => (
          <ProjectsCard
            key={project.repo}
            title={project.title}
            description={project.description}
            date={project.date}
            tags={project.tags}
            repo={project.repo}
            link={project.link}
          />
        ))}

        {/* placeholders */}
        {Array.from({ length: itemsToShow - (pages[pageIndex]?.length || 0) }).map(
          (_, i) => (
            <div key={`placeholder-${i}`} className="invisible">
              <ProjectsCard
                title=""
                description=""
                date=""
                tags={[]}
                repo=""
                link=""
              />
            </div>
          )
        )}
      </div>

      <div className="flex gap-4">
        {pages.map((_, index) => (
          <DotNavigator
            key={index}
            green={false}
            active={pageIndex === index}
            onClick={() => changePage(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
