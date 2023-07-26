import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md"

const Resume = () => {
  return (
    <div className="mx-2 text-white md:mx-32">
      {/* Header Section - Info */}
      <h1 className="flex justify-center py-4 text-3xl font-bold md:text-4xl">
        Zachary Walsh
      </h1>
      <ul className="flex justify-center gap-x-3 py-4 align-middle text-sm font-light md:gap-x-6 md:text-base">
        <li className="flex align-middle">
          <MdLocationOn className="mr-1 inline text-base font-bold text-lightorange" />
          Palmyra, PA
        </li>
        <li className="flex align-middle">
          <MdEmail className="mr-1 inline text-base font-bold text-lightorange" />
          zwalsh2521@gmail.com
        </li>
        <li className="flex align-middle">
          <MdPhone className="mr-1 inline text-base font-bold text-lightorange" />
          (717) 277-8595
        </li>
        {/* <li>itzwalsh.github.io</li> */}
      </ul>

      <div>
        {/* Summary Div */}
        <div className="rounded-3xl bg-lightgray px-8 py-5 md:px-10">
          <h1 className="text-lg md:text-xl">Summary</h1>
          <p className="mt-2 text-sm md:text-base">
            Solution-driven software developer dedicated to delivering high
            quality code and intuitive, user-friendly solutions. Determined and
            motivated to incorporate new skills and stacks in programming
            processes. Committed ongoing learner with a strong work ethic ready
            to work and learn in a fast-paced and challenging environment.
          </p>
        </div>
        {/* Eduation */}
        <h1 className="py-4 pl-8 text-lg">Education</h1>
        <div>
          <div className="flex flex-col justify-between pl-8 text-base md:flex-row">
            <h2 className="pl-4 font-bold">
              Pennsylvania College of Technology - Williamsport, PA
            </h2>
            <h3 className="pl-4 font-light">Graduated May 2023</h3>
          </div>
          <h3 className="pl-12 font-light">
            Bachelor's of Science in Software Development and Information
            Management
          </h3>
          <ul className="pl-16">
            <li className="text-3xl text-lightorange before:pr-2 before:content-['•']">
              <span className="align-middle text-base text-white">
                Campus Involvement:
              </span>
            </li>
          </ul>
          <h3 className="pl-20 text-base font-light">
            Treasurer and Captain of CSGO team(s) of Penn College Esports
          </h3>
        </div>
        {/* Work Experience */}
        <h1 className="py-4 pl-8 text-lg">Work Experience</h1>

        <h2 className="pl-12 font-bold">
          Hershey Entertainment and Resorts - Hershey, PA
        </h2>

        <div className="flex flex-col justify-between pl-12 text-base md:flex-row">
          <h2 className="pl-4 pt-2 md:pl-0">Games Assistant Supervisor</h2>
          <p className="pl-4 pt-2 md:pl-0">June 2018 - August 2019</p>
        </div>

        <ul className="pl-20 md:pl-16">
          <li className="text-3xl text-lightorange before:pr-2 before:content-['•']">
            <span className="align-middle text-base text-white">
              Led and delegated tasks to employees
            </span>
          </li>
          <li className="text-3xl text-lightorange before:pr-2 before:content-['•']">
            <span className="align-middle text-base text-white">
              Created and enforced daily schedules to streamline operations
            </span>
          </li>
          <li className="text-3xl text-lightorange before:pr-2 before:content-['•']">
            <span className="align-middle text-base text-white">
              Performed yearly evaluation to updated annual goals
            </span>
          </li>
        </ul>

        <div className="flex flex-col justify-between pl-12 text-base md:flex-row">
          <h2 className="pl-4 pt-2 md:pl-0">Games Foreman</h2>
          <p className="pl-4 pt-2 md:pl-0">April 2017 - June 2018</p>
        </div>

        <ul className="pl-20 md:pl-16">
          <li className="text-3xl text-lightorange before:pr-2 before:content-['•']">
            <span className="align-middle text-base text-white">
              Led and delegated tasks to employees
            </span>
          </li>
          <li className="text-3xl text-lightorange before:pr-2 before:content-['•']">
            <span className="align-middle text-base text-white">
              Created and enforced daily schedules to streamline operations
            </span>
          </li>
          <li className="text-3xl text-lightorange before:pr-2 before:content-['•']">
            <span className="align-middle text-base text-white">
              Performed yearly evaluation to updated annual goals
            </span>
          </li>
        </ul>

        <div className="flex flex-col justify-between pl-12 text-base md:flex-row">
          <h2 className="pl-4 pt-2 md:pl-0">Games Clerk</h2>
          <p className="pl-4 pt-2 md:pl-0">March 2015 - April 2017</p>
        </div>

        <ul className="pl-20 md:pl-16">
          <li className="text-3xl text-lightorange before:pr-2 before:content-['•']">
            <span className="align-middle text-base text-white">
              Led and delegated tasks to employees
            </span>
          </li>
          <li className="text-3xl text-lightorange before:pr-2 before:content-['•']">
            <span className="align-middle text-base text-white">
              Created and enforced daily schedules to streamline operations
            </span>
          </li>
          <li className="text-3xl text-lightorange before:pr-2 before:content-['•']">
            <span className="align-middle text-base text-white">
              Performed yearly evaluation to updated annual goals
            </span>
          </li>
        </ul>

        {/* Project Experience */}
        <h1 className="py-4 pl-8 text-lg">Project Experience</h1>

        <div className="flex flex-col justify-between pl-12 text-base md:flex-row">
          <h2 className="pl-4 pt-2 md:pl-0">
            Pennsylvania College of Technology - Williamsport, PA
          </h2>
          <p className="pl-4 pt-2 md:pl-0">August - December 2022</p>
        </div>
        <h2 className="pl-16 pt-2 md:pl-12">Senior Project</h2>

        <ul className="pl-20 md:pl-16">
          <li className="text-3xl text-lightorange before:pr-2 before:content-['•']">
            <span className="align-middle text-base text-white">
              Developed a web application that allows users to create and manage
              various bugs and issues for their projects
            </span>
          </li>
          <li className="text-3xl text-lightorange before:pr-2 before:content-['•']">
            <span className="align-middle text-base text-white">
              Utilizes React.JS, Tailwind, and Firebase
            </span>
          </li>
          <li className="text-3xl text-lightorange before:pr-2 before:content-['•']">
            <span className="align-middle text-base text-white">
              Includes CRUD functionality, user authentication, role selection
              and a live chatroom between users.
            </span>
          </li>
        </ul>

        {/* Skills */}
        <h1 className="py-4 pl-8 text-lg">Skills</h1>
        <ul className="pl-20 md:pl-16">
          <li className="text-3xl text-lightorange before:pr-2 before:content-['•']">
            <span className="align-middle text-base text-white">
              Advanced in Java, Python, JavaScript, React.JS, TypeScript, HTML
              and CSS.
            </span>
          </li>
          <li className="text-3xl text-lightorange before:pr-2 before:content-['•']">
            <span className="align-middle text-base text-white">
              Intermediate knowledge in Kotlin, Angular, C, and C++
            </span>
          </li>
          <li className="text-3xl text-lightorange before:pr-2 before:content-['•']">
            <span className="align-middle text-base text-white">
              Additional skills include database work (MySQL, PostgreSQL,
              NoSQL), AWS and Git
            </span>
          </li>
          <li className="pb-4 text-3xl text-lightorange before:pr-2 before:content-['•']">
            <span className="align-middle text-base text-white">
              Famillar with the SDLC Process and how it's utilized in the
              development of wide-scale applications.
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Resume
