import {
  AiOutlineMail,
  AiOutlineGithub,
  AiOutlineArrowRight,
} from "react-icons/ai"
import {
  SiJavascript,
  SiNextdotjs,
  SiPython,
  SiTypescript,
} from "react-icons/si"
import { FaJava, FaLinkedinIn } from "react-icons/fa"
import TraitsCarousel from "../components/TraitsCarousel"
import projectData from "../data/projectData"
import courseData from "../data/courseData"
import CourseItem from "../components/CourseItem"
import { useState } from "react"

const Home = () => {
  const [filters, setFilters] = useState({
    stack: "TypeScript", // Default filter is TypeScript,
  })

  // Function to handle change of radio buttons and filter the projects based on their stack
  const handleChange = (e: any) => {
    setFilters({ ...filters, [e.target.name]: e.target.value })
  }

  return (
    <div className="mx-4 md:mx-16">
      {/* Intro */}
      <div className="-z-50 flex h-full flex-col rounded-2xl bg-hero-gradient bg-cover md:h-[calc(100vh-360px)] md:items-center md:justify-center">
        <span className="mx-6 mt-8 flex flex-col items-start justify-start md:w-[75%]">
          <h1 className="h-auto w-full text-4xl font-semibold md:text-5xl">
            Hi, I'm Zack Walsh
          </h1>
          <TraitsCarousel />
          <p className="text-md mb-8 h-auto w-auto md:w-[65%] md:text-base">
            With a Bachelor's of Science in Software Development and Information
            Management, I've honed my skills in various programming languages
            and am always eager to expand my knowledge by learning new
            technologies/stacks. I thrive in fast-paced environments and take
            great pride in developing intuitive and user-friendly solutions.
          </p>
        </span>
      </div>

      {/* Projects */}
      <section id="projects">
        {/* Filtering Menu based on Languages in my projects, on click checkbox will check */}
        <div className="my-12 flex flex-wrap items-center justify-center gap-2 md:flex-col">
          <div className="flex gap-x-1 md:gap-x-4 lg:gap-x-6">
            <input
              type="radio"
              required
              id="TypeScript"
              name="stack"
              value="TypeScript"
              className="hidden"
              checked={filters.stack === "TypeScript"}
              onChange={handleChange}
            />
            <label
              className="flex aspect-square w-10 cursor-pointer items-center justify-center rounded-md"
              htmlFor="TypeScript"
            >
              <SiTypescript className="scale-[200%] hover:brightness-75 md:scale-[250%] lg:scale-[300%] " />
            </label>

            <input
              type="radio"
              required
              id="JavaScript"
              name="stack"
              value="JavaScript"
              className="hidden"
              checked={filters.stack === "JavaScript"}
              onChange={handleChange}
            />
            <label
              className="flex aspect-square w-10 cursor-pointer items-center justify-center rounded-md"
              htmlFor="JavaScript"
            >
              <SiJavascript className="scale-[200%] hover:brightness-75 md:scale-[250%] lg:scale-[300%]" />
            </label>
            <input
              type="radio"
              required
              id="NextJS"
              name="stack"
              value="NextJS"
              className="hidden"
              checked={filters.stack === "NextJS"}
              onChange={handleChange}
            />
            <label
              className="flex aspect-square w-10 cursor-pointer items-center justify-center rounded-md"
              htmlFor="NextJS"
            >
              <SiNextdotjs className="scale-[200%] hover:brightness-75 md:scale-[250%] lg:scale-[300%]" />
            </label>

            <input
              type="radio"
              required
              id="Python"
              name="stack"
              value="Python"
              className="hidden"
              checked={filters.stack === "Python"}
              onChange={handleChange}
            />
            <label
              className="flex aspect-square w-10 cursor-pointer items-center justify-center rounded-md"
              htmlFor="Python"
            >
              <SiPython className="scale-[200%] hover:brightness-75 md:scale-[250%] lg:scale-[300%]" />
            </label>

            <input
              type="radio"
              required
              id="Java"
              name="stack"
              value="Java"
              className="hidden"
              checked={filters.stack === "Java"}
              onChange={handleChange}
            />
            <label
              className="flex aspect-square w-10 cursor-pointer items-center justify-center rounded-md"
              htmlFor="Java"
            >
              <FaJava className="scale-[200%] hover:brightness-75 md:scale-[250%] lg:scale-[300%]" />
            </label>
          </div>
        </div>

        {/* Mapping Projects from projectData.tsx */}
        <div className="flex flex-col items-center justify-center md:flex-row">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projectData
              .filter((stack) => filters.stack === stack.stack[0])
              .map((filteredProjects) => (
                <div
                  key={filteredProjects.id}
                  className="mt-6 flex flex-col"
                  onClick={() => window.open(filteredProjects.link, "_blank")}
                >
                  <div className="flex h-full flex-col items-center justify-center">
                    {/* Start Project Block */}
                    <div className="2s relative m-2 h-full transition-all ease-in-out hover:scale-105">
                      <img
                        className="z-10 h-full w-full rounded-xl object-fill brightness-50"
                        src={filteredProjects.image}
                        alt={filteredProjects.title}
                      />
                      <div className="group absolute left-0 top-0 h-full w-full cursor-pointer overflow-hidden rounded-xl bg-transparent-gradient">
                        <div className="flex items-center justify-center">
                          <div className="absolute bottom-16 left-3 space-y-3 md:bottom-3">
                            <h1 className="w-60 text-xl font-semibold text-white">
                              {filteredProjects.title}
                            </h1>
                            <div className="flex flex-row space-x-1">
                              {filteredProjects.stack.map((stack) => (
                                <span
                                  key={stack}
                                  className="flex h-max w-max items-center justify-center rounded-full bg-lightgray px-3 py-1 text-sm"
                                >
                                  {stack}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="absolute bottom-3 left-3 w-max items-center justify-center text-lightorange md:right-3 md:ml-auto">
                            <button className="rounded-md border-2 border-lightorange bg-none p-1 px-3 py-2 group-hover:bg-gradient-to-r group-hover:from-lightorange group-hover:to-darkorange group-hover:text-white">
                              <span className="text-sm">Live Demo</span>
                              <AiOutlineArrowRight className="ml-2 inline text-sm font-semibold group-hover:text-white" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses">
        <div className="flex w-full flex-col items-center justify-center">
          <h1 className="my-6 p-3 text-center align-middle text-2xl font-semibold">
            Related Courses
          </h1>
          <div className="flex flex-col items-center justify-center md:flex-row">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {courseData.map((course) => (
                <CourseItem course={course} key={course.id} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about">
        <div className="mt-6 flex flex-col items-center justify-center space-y-3 pt-6">
          <img
            src="/me.jpg"
            alt="Zack Walsh"
            className="h-60 w-60 rounded-full object-cover ring-2 ring-lightorange"
          />
          <h1 className="p-3 text-center align-middle text-xl font-semibold">
            I'm a Software Developer/Web Developer based out of Palmyra, PA.
          </h1>
          <p className="h-auto w-full text-center text-sm md:w-[65%] md:text-base">
            For the past 10 years, I have been learning, developing, and
            experimenting with many different languages such as Javascript,
            Python, and more. I have a keen eye for detail and a commitment to
            delivering high-quality code. With a Bachelor’s of Science in
            Software Development and Information Management, I’ve honed my
            skills in various programming languages and am always eager to
            expand my knowledge by learning new technologies/stacks. I thrive in
            fast-paced environments and take great pride in developing intuitive
            and user-friendly solutions.
          </p>
          <button className="mt-12 inline-flex items-center rounded-md bg-gradient-to-r from-lightorange to-darkorange px-3 py-2 text-sm uppercase">
            <a href="/resume">View My Resume</a>
            <AiOutlineArrowRight className="ml-2" />
          </button>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="mx-4 mt-12 flex  flex-col gap-2 rounded-2xl bg-lightgray p-5 md:mx-24 lg:mx-48">
          <h1 className="p-3 text-center align-middle text-2xl font-semibold">
            Let's Get in Touch
          </h1>
          <form
            method="POST"
            action="https://getform.io/f/909de650-fba5-4f32-ad4b-bca1a25e41a0"
            className="flex w-full flex-col"
          >
            <div className="mb-4">
              <label className="mb-2 block text-sm text-white">
                <p className="mb-1 font-semibold">Name *</p>
                <input
                  type="text"
                  required
                  name="required"
                  id="name"
                  placeholder="John Doe"
                  className="dark:bg-gray-700 w-full rounded-sm border bg-darkgray px-3 py-2 text-white placeholder-white placeholder-opacity-25 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-lightorange"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="mb-2 block text-sm text-white">
                <p className="mb-1 font-semibold">Email *</p>
                <input
                  type="text"
                  required
                  name="required"
                  id="name"
                  placeholder="John Doe"
                  className="dark:bg-gray-700 w-full rounded-sm border bg-darkgray px-3 py-2 text-white placeholder-white placeholder-opacity-25 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-lightorange"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="mb-2 block text-sm text-white">
                <p className="mb-1 font-semibold">Message *</p>
                <textarea
                  rows={8}
                  required
                  name="required"
                  id="name"
                  placeholder="John Doe"
                  className="dark:bg-gray-700 w-full rounded-sm border bg-darkgray px-3 py-2 text-white placeholder-white placeholder-opacity-25 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-lightorange"
                />
              </label>
            </div>
            <button className="mx-auto mt-12 inline-flex items-center rounded-md bg-gradient-to-r from-lightorange to-darkorange px-3 py-2 text-sm uppercase">
              Submit
              <AiOutlineArrowRight className="ml-2" />
            </button>
          </form>
        </div>
      </section>

      {/* sticky icon buttons */}
      <div className="sticky bottom-[285px] z-50 ml-auto mr-5 w-max">
        <span className="flex cursor-pointer flex-col space-y-3">
          <a
            className="flex h-10 w-10 items-center justify-center rounded-full bg-darkorange text-white hover:bg-white hover:text-darkorange"
            href="mailto:zwalsh2521@gmail.com"
          >
            <AiOutlineMail />
          </a>
          <a
            className="flex h-10 w-10 items-center justify-center rounded-full bg-darkorange text-white hover:bg-white hover:text-darkorange"
            href="https://www.linkedin.com/in/itzwalsh/"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
          <a
            className="flex h-10 w-10 items-center justify-center rounded-full bg-darkorange text-white hover:bg-white hover:text-darkorange"
            href="https://github.com/itzwalsh"
            target="_blank"
          >
            <AiOutlineGithub />
          </a>
        </span>
      </div>
    </div>
  )
}

export default Home
