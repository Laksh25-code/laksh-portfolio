import { useEffect, useState } from "react"
import cursorImage from "../assets/cursor-main.png"

function CustomCursor() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {

    const moveCursor = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", moveCursor)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
    }

  }, [])

  useEffect(() => {

    const followMouse = () => {

      setPosition((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.15,
        y: prev.y + (mousePosition.y - prev.y) * 0.15,
      }))

      requestAnimationFrame(followMouse)
    }

    followMouse()

  }, [mousePosition])

  return (
    <img
      src={cursorImage}
      alt="cursor"
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden w-10 md:block"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    />
  )
}

export default CustomCursor