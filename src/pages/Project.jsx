import React, { useEffect, useRef, useState } from "react";
import Wrapper from "../components/wrapper";
import Card from "../components/card";
import useFetchJson from "../hooks/useFetchJson.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const {
    data: projects,
    loading: loadingProjects,
    error: errorProjects,
  } = useFetchJson("/data/projects.json");

  const [filterCategory, setFilterCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const searchRef = useRef(null);
  const listRef = useRef(null);
  const projectRefs = useRef([]);
  projectRefs.current = [];

  useLayoutEffect(() => {
    if (loadingProjects || errorProjects) return;

    if (!searchRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(searchRef.current, {
        x: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2,
      });
    });

    console.log("searchRef is:", searchRef.current);

    return () => ctx.revert();
  }, [loadingProjects, errorProjects]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      projectRefs.current.forEach((card, i) => {
        if (!card) return;

        // Scroll-in animation
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            delay: i * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );

        // Hover animation
        const onEnter = () => {
          gsap.to(card, {
            scale: 1.03,
            y: -5,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        const onLeave = () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        card.addEventListener("mouseenter", onEnter);
        card.addEventListener("mouseleave", onLeave);

        // Store for cleanup
        card._gsapHoverListeners = { onEnter, onLeave };
      });
    });

    return () => {
      // Cleanup hover listeners
      projectRefs.current.forEach((card) => {
        if (card?._gsapHoverListeners) {
          card.removeEventListener(
            "mouseenter",
            card._gsapHoverListeners.onEnter
          );
          card.removeEventListener(
            "mouseleave",
            card._gsapHoverListeners.onLeave
          );
        }
      });
      ctx.revert(); // Clean up GSAP animations
    };
  }, [projects, filterCategory]);

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
        <div className="flex bg-[#21364A] py-2 px-3 rounded-md" ref={searchRef}>
          <img src="search.png" alt="search icon" />
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search Projects"
            className="outline-none w-full h-full text-[#9CADBF] px-2"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2 text-white flex-wrap">
          <Card
            styles="cursor-pointer"
            color={filterCategory == "" ? "bg-[#3D99F5]" : null}
            onClickHandler={() => setFilterCategory("")}
          >
            All
          </Card>
          <Card
            styles="cursor-pointer"
            color={filterCategory == "Web Development" ? "bg-[#3D99F5]" : null}
            onClickHandler={() => setFilterCategory("Web Development")}
          >
            Web Development
          </Card>
          <Card
            styles="cursor-pointer"
            color={
              filterCategory == "Mobile Development" ? "bg-[#3D99F5]" : null
            }
            onClickHandler={() => setFilterCategory("Mobile Development")}
          >
            Mobile Development
          </Card>
        </div>
      </div>
      <div
        className="projects-list grid grid-cols-3 gap-x-3 gap-y-6 max-lg:grid-cols-2"
        ref={listRef}
      >
        {projects
          .filter(
            (project) =>
              (filterCategory === "" || project.category === filterCategory) &&
              (project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                project.description
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()))
          )

          .map((project, i) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[i] = el)}
              className="text-sm flex flex-col gap-3 "
            >
              <div className="h-40 max-sm:h-28">
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
                <p className="text-[#9CADBF] max-sm:text-xs">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
      </div>
    </Wrapper>
  );
};

export default Project;
