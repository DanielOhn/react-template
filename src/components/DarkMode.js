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
    const getMode = localStorage.getItem("theme")

    if (getMode === null) localStorage.setItem("theme", "light")
    setTheme(getMode)
    document.documentElement.setAttribute("data-user-color-scheme", getMode)
  }, [])

  return (
    <div className="dark-mode">
      {theme === "light" ? (
        <SunIcon
          onClick={handleClick}
          color="#496D1D
        "
        />
      ) : (
        <SunIcon onClick={handleClick} color="#092834" />
      )}
    </div>
  )
}

export default DarkMode
