import React from "react"
import "../styles/App.css"

function App() {
  return (
    <div className="App">
      <div className="content">
        <h1 className="heading heavy primary">React Template</h1>
        <p className="normal secondary">
          This website is created for the purpose of being a template for any
          new react projects that I create. It will come with the font weights,
          sizes, and colors, along with npm packages that I already use for most
          of my projects.
        </p>

        <h1 className="heading heavy primary">Other Stuff</h1>
        <h1 className="heavy primary">Heading 1</h1>
        <h2 className="heavy secondary">Heading 2</h2>
        <h3 className="heavy light">Heading 3</h3>

        <p className="normal secondary">
          Normal Font for paragraphs and default content. This should be the
          secondary content that users glance at after the headers.
        </p>
        <p className="normal light">
          Minor details to content that shouldn't distract users that much
          compared too the normal font color.
        </p>
      </div>
    </div>
  )
}

export default App
