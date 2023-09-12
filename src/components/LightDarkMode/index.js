// Write your code here

import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onChangeMode = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const classMode = isDarkMode ? 'dark-mode' : 'light-mode'
    const btnText = isDarkMode ? 'Light Mode' : 'Dark Mode'
    return (
      <div className="bg-container">
        <div className={`card-container ${classMode}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button type="button" onClick={this.onChangeMode} className="btn">
            {btnText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
