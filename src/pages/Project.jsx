import React, { useState } from "react";
import Wrapper from "../components/wrapper";
import Card from "../components/card";
import useFetchJson from "../hooks/useFetchJson.js";

const Project = () => {
  const {
    data: projects,
    loading: loadingProjects,
    error: errorProjects,
  } = useFetchJson("/data/projects.json");

  const [filterCategory, setFilterCategory] = useState("");

  if (loadingProjects) return <p>Loading...</p>;
  if (errorProjects) return <p>Error loading some data.</p>;

  return (
    <Wrapper>
      <div className="heading  flex flex-col gap-0.5 ">
        <h1 className="mt-10 text-white font-bold text-2xl ">Projects</h1>
        <p className="text-[#9CADBF] text-sm ">
          A curated collection of my works, showcasing my skills and experience
          in full-stack development
        </p>
      </div>
      <div className="flex flex-col gap-3 rounded-md">
        <div className="flex bg-[#21364A] py-2 px-3 rounded-md">
          <img src="search.png" alt="search icon" />
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search Projects"
            className="outline-none w-full h-full text-[#9CADBF] px-2 "
          />
        </div>
        <div className="flex gap-2 text-white ">
          <Card
            styles="cursor-pointer"
            onClickHandler={() => setFilterCategory("")}
          >
            All
          </Card>
          <Card
            styles="cursor-pointer"
            onClickHandler={() => setFilterCategory("Web Development")}
          >
            Web Development
          </Card>
          <Card
            styles="cursor-pointer"
            onClickHandler={() => setFilterCategory("Mobile Development")}
          >
            Mobile Development
          </Card>
        </div>
      </div>
      <div className="projects-list grid grid-cols-3 gap-x-3 gap-y-6">
        {projects
          .filter((project) =>
            filterCategory === "" ? true : project.category === filterCategory
          )
          .map((project) => (
            <div key={project.id} className="text-sm flex flex-col gap-3">
              <div className="h-40">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div>
                <a href={project.link} className="text-white font-semibold">
                  {project.name}
                </a>
                <p className="text-[#9CADBF]">{project.description}</p>
              </div>
            </div>
          ))}
      </div>
    </Wrapper>
  );
};

export default Project;
