const userTimeline = require('./user_timeline')

module.exports = function(app, db) {
  userTimeline(app, db)
}