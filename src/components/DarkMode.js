import React, { useState, useEffect } from "react"

import SunIcon from "../icons/SunIcon"

function DarkMode() {
  const [theme, setTheme] = useState()

  function handleClick() {
    theme === "light" ? setTheme("dark") : setTheme("light")
    localStorage.setItem("theme", theme)
    document.documentElement.setAttribute("data-user-color-scheme", theme)
  }

  useEffect(() => {
    let getMode = localStorage.getItem("theme")

    if (getMode === null) {
      localStorage.setItem("theme", "light")
      getMode = "light"
    }

    setTheme(getMode)
    document.documentElement.setAttribute("data-user-color-scheme", getMode)
  }, [])

  return (
    <div className="dark-mode">
      <SunIcon onClick={handleClick} />
    </div>
  )
}

export default DarkMode
