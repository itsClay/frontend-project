export const fetchSettings = () => {
  let settings = window.localStorage.settings
  return settings !== undefined ? JSON.parse(settings) : {}
}

export const setSettings = (settings) => {
  window.localStorage.setItem('settings', JSON.stringify(settings))
  return JSON.parse(settings)
}