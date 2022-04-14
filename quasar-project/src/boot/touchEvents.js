const vue3TouchEvents = require("vue3-touch-events")
const boot = require('quasar/wrappers')

// import { boot } from 'quasar/wrappers'
//
// export default boot ( app => {
//   app.use(vue3TouchEvents)
// })

module.exports = boot(function(app){
  app.use(vue3TouchEvents)
})

