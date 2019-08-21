import React, { Component } from "react"

class Slider extends Component {
  state = {
    hue: Math.ceil(Math.random() * 360),
    saturation: Math.ceil(Math.random() * 100),
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
        className='main-div'
        style={{
          backgroundColor: `hsl(${this.state.hue}, ${this.state.saturation}%, ${
            this.state.lightness
          }%)`
        }}
      >
        <span className='color-display'>
          <h1 className='white-bg'>Color display</h1>
        </span>
        <section className='H-slider'>
          <p className='com-name'>Hue</p>
          <input
            type='range'
            min='0'
            max='360'
            value={this.state.hue}
            onChange={this.changeHue}
          />
          <p>{this.state.hue}</p>
        </section>

        <section className='S-slider'>
          <p className='com-name'>Saturation</p>
          <input
            type='range'
            min='0'
            max='100'
            onChange={this.changeSaturation}
            value={this.state.saturation}
          />
          <p>{this.state.saturation}</p>
        </section>

        <section className='L-slider'>
          <p className='com-name'>Lightness</p>
          <input
            type='range'
            min='0'
            max='100'
            onChange={this.changeLightness}
            value={this.state.lightness}
          />
          <p>{this.state.lightness}</p>
        </section>

        <section className='random-button-section'>
          <button
            className='random-button'
            onClick={this.randomColorChange}
            value={this.backgroundColor}
          >
            {" Random Color Change "}
          </button>
        </section>

        <h4>
          {`hsl(${this.state.hue}, ${this.state.saturation}%, ${
            this.state.lightness
          }%)`}
        </h4>
      </div>
    )
  }
}

export default Slider

// //use this as an example
