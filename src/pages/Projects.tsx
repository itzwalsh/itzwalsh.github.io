import { useState } from "react"
import {
  SiJavascript,
  SiNextdotjs,
  SiPython,
  SiTypescript,
} from "react-icons/si"
import { FaJava } from "react-icons/fa"
import "../App.css"

import { AiOutlineArrowRight } from "react-icons/ai"
import projectData from "../data/projectData"

const Projects = () => {
  const [filters, setFilters] = useState({
    stack: "TypeScript", // Default filter is TypeScript,
  })

  // Function to handle change of radio buttons and filter the projects based on their stack
  const handleChange = (e: any) => {
    setFilters({ ...filters, [e.target.name]: e.target.value })
  }
  return (
    <div className="mx-4 min-h-screen md:mx-16">
      {/* Filtering Menu based on Languages in my projects, on click checkbox will check */}
      <div className="flex flex-wrap items-center justify-center gap-2 md:flex-col">
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
            <SiTypescript className="scale-150 hover:brightness-75 md:scale-[250%] lg:scale-[300%] " />
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
            <SiJavascript className="scale-150 hover:brightness-75 md:scale-[250%] lg:scale-[300%]" />
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
            <SiNextdotjs className="scale-150 hover:brightness-75 md:scale-[250%] lg:scale-[300%]" />
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
            <SiPython className="scale-150 hover:brightness-75 md:scale-[250%] lg:scale-[300%]" />
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
            <FaJava className="scale-150 hover:brightness-75 md:scale-[250%] lg:scale-[300%]" />
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
    </div>
  )
}

export default Projects
