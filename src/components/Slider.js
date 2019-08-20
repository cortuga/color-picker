import React, { Component } from "react"

class Slider extends Component {
  state = {
    hue: 180,
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
  randomColorChange = event => {
    this.setState({
      hue: Math.ceil(Math.random() * 360),
      saturation: Math.ceil(Math.random() * 100),
      lightness: Math.ceil(Math.random() * 100)
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
        <div>Color display</div>
        <span className='H-slider'>
          <p>H</p>
          <input
            type='range'
            min='0'
            max='360'
            value={this.state.hue}
            onChange={this.changeHue}
          />
          <p>{this.state.hue}</p>
        </span>
        <span className='S-slider'>
          <p>S</p>
          <input
            type='range'
            min='0'
            max='100'
            onChange={this.changeSaturation}
            value={this.state.saturation}
          />
          <p>{this.state.saturation}</p>
        </span>
        <span className='L-slider'>
          <p>L</p>
          <input
            type='range'
            min='0'
            max='100'
            onChange={this.changeLightness}
            value={this.state.lightness}
          />
          <p>{this.state.lightness}</p>
        </span>
        <section />

        <section className='random-button-section'>
          <button
            className='random-button'
            onClick={this.randomColorChange}
            value={this.backgroundColor}
          >
            {" Random Color Change "}
          </button>
        </section>
      </div>
    )
  }
}

export default Slider

// //use this as an example
