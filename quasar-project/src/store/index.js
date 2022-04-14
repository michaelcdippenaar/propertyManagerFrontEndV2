// import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

import auth from './auth'
import property from "src/store/property";
import issues from "src/store/issues";
import reportIssue from 'src/store/report-issue'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */
let store = null

export default function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      auth,
      issues,
      property,
      reportIssue
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })
  store = Store
  return store
}

export { store }
