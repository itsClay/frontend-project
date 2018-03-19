import React from 'react';
import Switch from 'react-switch'

import './edit_sidebar.css'

class EditSidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      settings: {
        columns: '1',
        theme: 'default',
      }
    }
    this.syncWithLocal = this.syncWithLocal.bind(this)
    this.toggleSwitch = this.toggleSwitch.bind(this)
    this.saveSettings = this.saveSettings.bind(this)
    this.cancelSettings = this.cancelSettings.bind(this)
    this.changeColumns = this.changeColumns.bind(this)
    this.toggleNightmode = this.toggleNightmode.bind(this)
    this.selected = this.selected.bind(this)
    this.setSorting = this.setSorting.bind(this)
  }

  componentWillMount() {
    // ideally we will be storing this as an object that imitates our state
    // tried to get this setup through Redux store as well but no avail just yet.
    // if (this.state.settings.theme === "nightMode") {
    //   require('./night_mode.css')
    // }
  }

  componentDidMount() {
    this.syncWithLocal()
  }

  componentWillUpdate(){
    //...
  }

  syncWithLocal() {
    let settings = window.localStorage.getItem('settings')
    if (settings !== undefined) {
      settings = JSON.parse(settings)
      this.setState((prevState) => (Object.assign({}, prevState, settings)))
    }
  }

  toggleSwitch(e) {
    // toggle for gear movement
    e.preventDefault()
    this.setState({isOpen: !this.state.isOpen})
  }

  saveSettings(e) {
    //set our items to local storage && set state to re render
    let settings = this.state
    window.localStorage.setItem('settings', JSON.stringify(settings))
    console.log('...saving settings on local', settings)
    this.toggleSwitch(e)
  }

  cancelSettings(e) {
    //pull localStorage settings again && set that to state
    let settings = JSON.parse(window.localStorage.settings)
    this.setState((prevState) => {
      return Object.assign({}, prevState, settings)
    })
    this.toggleSwitch(e)
  }

  changeColumns(num) {
    this.setState((prevState) => {
      return Object.assign({}, prevState, {settings: {column: num}})
    })
  }

  toggleNightmode(checked) {
    let newTheme;
    checked ? newTheme = 'nightMode' : newTheme = 'default'
    this.setState({settings: { theme: newTheme }})
  }

  setSorting(e) {
    //...
  }

  selected(num) {
    if(this.state.settings.columns === num) {
      return 'selected'
    } else {
      return ''
    }
  }

  render() {
    return (
        <div className={`EditSidebar ${this.state.isOpen ? 'open' : ''}`}>
          <div
            className={`EditSidebar__toggle`}
            onClick={this.toggleSwitch}
        >⚙</div>
          <div className="EditSidebar__buttons">
            <button onClick={this.saveSettings}>Save</button>
            <button onClick={this.cancelSettings}>Cancel</button>
          </div>
          <h1>Settings</h1>
          <h3>Columns</h3>
          <div className="EditSidebar__columns">
            <div
              className={`column ${this.selected('1')} selected`}
              onClick={() => this.changeColumns('1')}>1</div>
            <div 

              className={`column ${this.selected('2')}`}
              onClick={() => this.changeColumns('2')}>2</div>
            <div 

              className={`column ${this.selected('3')}`}
              onClick={() => this.changeColumns('3')}>3</div>
            <div 

              className={`column ${this.selected('4')}`}
              onClick={() => this.changeColumns('4')}>4</div>
          </div>
          <h3>Theme</h3>
          <label className="EditSideBar__nightContainer" htmlFor="normal-switch">
            <div>Night Mode</div>
            <Switch 
              onChange={this.toggleNightmode}
              checked={this.state.settings.theme === "nightMode"}
              className="EditSidebar__nightSwitch"
              checkedIcon={false}
              uncheckedIcon={false}
            />
          </label>
        </div>

    )
  }
}

export default EditSidebar;