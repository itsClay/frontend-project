const userTimeline = require('./user_timeline')

module.exports = function(app, db) {
  console.log('hit index')
  userTimeline(app, db)
}