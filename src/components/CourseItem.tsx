import { AiOutlineArrowRight } from "react-icons/ai"

const CourseItem = ({ course, filters, setFilters }: any) => {
  const handleCourseClick = () => {
    const javaScriptButton = document.getElementById(
      "JavaScript"
    ) as HTMLInputElement
    const pythonButton = document.getElementById("Python") as HTMLInputElement
    const javaButton = document.getElementById("Java") as HTMLInputElement

    if (course.code === "CIT460") {
      setFilters({ ...filters, stack: "Python" })
      pythonButton.checked = true
    } else if (course.code === "CIT351") {
      setFilters({ ...filters, stack: "JavaScript" })
      javaScriptButton.checked = true
    } else if (course.code === "CIT360") {
      setFilters({ ...filters, stack: "Java" })
      javaButton.checked = true
    }
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <div
      className="group m-4 flex cursor-pointer flex-col gap-2 rounded-2xl bg-lightgray p-5 transition-all ease-in-out hover:scale-105"
      onClick={handleCourseClick}
    >
      <p className="text-lg text-lightorange">{course.code}</p>
      <p className="text-xl">{course.title}</p>
      <p className="h-48 overflow-hidden text-base">{course.description}</p>

      <button className="w-auto overflow-hidden rounded-md border-2 border-lightorange bg-none p-1 px-5 py-2 align-middle text-base text-lightorange group-hover:bg-gradient-to-r group-hover:from-lightorange group-hover:to-darkorange group-hover:text-white">
        View Related Projects
        <AiOutlineArrowRight className="ml-2 inline text-sm font-semibold group-hover:text-white" />
      </button>
    </div>
  )
}

export default CourseItem
