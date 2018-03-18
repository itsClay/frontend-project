import React from 'react';
import twemoji from 'twemoji'

import './edit_sidebar.css'

class EditSidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      settings: {
        columns: 1,
        theme: 'default',
      }
    }

    this.toggleSwitch = this.toggleSwitch.bind(this)
  }

  toggleSwitch(e){
    e.preventDefault()
    console.log(e.target)
    this.setState({isOpen: !this.state.isOpen})
  }

  render() {
    return (
        <div className={`EditSidebar ${this.state.isOpen ? 'open' : ''}`}>
          <div
            className={`EditSidebar__toggle`}
            onClick={this.toggleSwitch}
          >⚙</div>
          <h1>Settings</h1>
          <h3>Columns</h3>
          <h3>Theme</h3>
          <div>
            <div>Night Mode</div>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </div>
        </div>

    )
  }
}

export default EditSidebar;