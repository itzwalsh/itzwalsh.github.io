import { useState, useEffect } from "react"
import carouselData from "../data/carouselData"

function TraitsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % carouselData.length)
    }, 4000)

    return () => clearInterval(intervalId)
  }, [currentIndex])

  return (
    <div className="flex h-auto w-full items-center">
      <div className="flex flex-col items-center">
        {carouselData.map((item, index) => (
          <div
            key={item}
            className={`animate-lineup py-4 text-xl md:text-2xl ${
              index === currentIndex ? "active" : "hidden"
            }`}
          >
            <p className="text-2xl">{item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TraitsCarousel
