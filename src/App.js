import React, { Component } from "react"
import Slider from "./components/Slider"

class App extends Component {
  render() {
    console.log("rendering")
    return (
      <div>
        <Slider />
      </div>
    )
  }
}

export default App
