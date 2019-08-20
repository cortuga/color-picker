import React, { Component } from "react"

class Slider extends Component {
  state = {
    hue: 50,
    saturation: 50,
    lightness: 50
  }

  const changeHue = () => 

  render() {
    return (
      <div
        style={{
          backgroundColor: `hsl(${this.state.hue}, ${this.state.saturation}%, ${
            this.state.lightness
          }%)`
        }}
      >
        <span>H</span>
        <input type='range' min='0' max='100' />
        <span>S</span>
        <input type='range' min='0' max='100' />
        <span>L</span>
        <input type='range' min='0' max='100' />

        <div class='color-display'>Color?</div>
      </div>
    )
 
  }
}

export default Slider

// //use this as an example
