import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai"
import "../App.css"

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#000000] py-4 text-white md:px-16">
        <div className="flex flex-col items-center justify-center space-y-4 p-1 align-middle md:flex-row md:space-x-12 md:space-y-0">
          <p className="text-sm ">Built by Zachary Walsh</p>

          <a href="mailto:zwalsh2521@gmail.com?subject=Portfolio Inquiry">
            <p className="flex gap-x-1 text-xs">
              <AiOutlineMail className="text-darkorange " />
              zwalsh2521@gmail.com
            </p>
          </a>

          <p className="flex gap-x-1 text-xs">
            <AiOutlinePhone className="mb-1 text-darkorange" />
            (717)-277-8595
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
