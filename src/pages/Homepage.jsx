import React from "react";
import Card from "../components/card";
import Footer from "../components/footer";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Wrapper from "../components/wrapper";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import useFetchJson from "../hooks/useFetchJson";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
  const {
    data: about,
    loading: loadingAbout,
    error: errorAbout,
  } = useFetchJson("/data/about.json");
  const {
    data: skills,
    loading: loadingSkills,
    error: errorSkills,
  } = useFetchJson("/data/skills.json");
  const {
    data: projects,
    loading: loadingProjects,
    error: errorProjects,
  } = useFetchJson("/data/projects.json");

  const location = useLocation();
  const form = useRef();
  const contactRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    if (location.hash) {
      const scrollToElement = () => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      };

      // Delay to ensure the DOM is ready
      setTimeout(scrollToElement, 500);
    }
  }, [location]);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_3fo37dh", // replace with your actual Service ID
        "template_31fnx09", // replace with your actual Template ID
        form.current,
        "qfuesS-BYungC5wvI" // replace with your actual Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message. Please try again later.");
        }
      );
  };

  useEffect(() => {
    if (loadingAbout || loadingSkills || loadingProjects || !contactRef.current)
      return;
    console.log("GSAP effect running");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contactRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 80%",
            toggleActions: "play none none reset", // ensures it only plays on enter
          },
        }
      );
    }, contactRef);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, [loadingAbout, loadingProjects, loadingSkills]);

  useEffect(() => {
    if (
      loadingAbout ||
      loadingSkills ||
      loadingProjects ||
      !projectsRef.current
    )
      return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        projectsRef.current,
        { opacity: 0, y: 50 }, // 👈 slide in from left
        {
          opacity: 1,
          y: 0,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 80%",
            toggleActions: "play none none reset", // slide in & out
            // markers: true, // optional debugging
          },
        }
      );
    }, projectsRef);

    return () => ctx.revert();
  }, [loadingAbout, loadingSkills, loadingProjects]);

  if (loadingAbout || loadingSkills || loadingProjects)
    return <p>Loading...</p>;
  if (errorAbout || errorSkills || errorProjects)
    return <p>Error loading some data.</p>;

  return (
    // <div className="w-[52%] mx-auto pt-4 flex flex-col gap-6 ">
    <Wrapper>
      <div className="bg-[url(/bg-banner.png)] h-[300px] w-full bg-cover relative max-sm:h-[240px]">
        <div className="absolute bottom-5 left-1/4 text-white flex flex-col gap-2 max-sm:left-5 max-sm:gap-0.5">
          <h1 className="font-bold text-2xl">{about.name}</h1>
          <p className="text-sm">{about.title}</p>
        </div>
      </div>
      <section id="about" className="text-white flex flex-col gap-2">
        <h1 className="font-bold text-lg ">About Me</h1>
        <p className="text-sm">{about.bio}</p>
      </section>
      <div className="text-white flex flex-col gap-2">
        <h1 className="font-bold text-lg">Skills</h1>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <Card key={i}>{skill}</Card>
          ))}
        </div>
      </div>

      {/* projects */}
      <section
        id="projects"
        ref={projectsRef}
        className="projects flex gap-2 flex-col"
      >
        <h1 className="text-white text-lg font-bold">Featured Projects</h1>
        <div className="projects-wrapper flex flex-col gap-5">
          {/* project 1 */}
          {projects
            .filter((project) => project.featured)
            .map((project) => (
              <div
                key={project.id}
                className="project-wrapper grid [grid-template-columns:42%_58%] gap-3 max-sm:flex max-sm:flex-col"
              >
                <div className="h-40 image-wrapper">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="object-cover w-full h-full rounded-md"
                  />
                </div>
                <div className="flex gap-3 max-sm:flex max-sm:flex-col">
                  <div>
                    <h1 className="text-white font-bold text-base">
                      {project.name}
                    </h1>
                    <p className="text-[#8FADCC] text-sm">
                      {project.description}
                    </p>
                  </div>
                  <div className="self-center text-white max-sm:self-start">
                    <Card color="bg-[#3D99F5]">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </a>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
      <section
        id="contact"
        ref={contactRef}
        className="contact flex flex-col gap-3"
      >
        <h1 className="text-white font-bold text-lg">Contact</h1>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-2">
          <div className="text-[#8FADCC] flex flex-col gap-4 flex-auto max-w-xs">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              className="bg-[#21364A] py-2 px-3 rounded-md"
            />
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Your Email"
              className="bg-[#21364A] py-2 px-3 rounded-md"
            />
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              className="bg-[#21364A] py-2 px-3 rounded-md resize-none h-28"
            />
          </div>
          <div className="self-start text-white">
            <button
              type="submit"
              className="bg-[#3D99F5] px-2 py-1 rounded-md cursor-pointer"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>
    </Wrapper>
  );
};

export default Homepage;
