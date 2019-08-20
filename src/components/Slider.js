import React, { Component } from "react"

class Slider extends Component {
  state = {
    hue: 50,
    saturation: 50,
    lightness: 50
  }

  changeHue = event => {
    console.log(event.target.value)
    this.setState({
      hue: event.target.value
    })
  }
  changeSaturation = event => {
    this.setState({
      saturation: event.target.value
    })
  }
  changeLightness = event => {
    this.setState({
      lightness: event.target.value
    })
  }

  render() {
    return (
      <div
        className='choco'
        style={{
          backgroundColor: `hsl(${this.state.hue}, ${this.state.saturation}%, ${
            this.state.lightness
          }%)`
        }}
      >
        <span>H</span>
        <input
          type='range'
          min='0'
          max='100'
          value={this.state.hue}
          onChange={this.changeHue}
        />
        <p>{this.state.hue}</p>
        <span>S</span>
        <input
          type='range'
          min='0'
          max='100'
          onChange={this.changeSaturation}
          value={this.state.saturation}
        />
        <p>{this.state.saturation}</p>
        <span>L</span>
        <input
          type='range'
          min='0'
          max='100'
          onChange={this.changeLightness}
          value={this.state.lightness}
        />
        <p>{this.state.lightness}</p>

        <div>Color display</div>
      </div>
    )
  }
}

export default Slider

// //use this as an example
