import axios from 'axios'
import { store } from 'src/store'
import arrayToFormData from 'src/api/helpers/arrayToFormData'
import { Cookies } from 'quasar'
const host = process.env.DJANGO_APP_HOST

export default function apiCall (c, context, type, url, state , includeToken = true) {
  // Token
  // ToDO Change to HTTP Only Cookie
  var token = store.getters["auth/authGetter"]
  // var token = JSON.parse(localStorage.getItem('token'))

  // API VERSION
  // const apiVersionPrefix = apiVersion


  var formdata = null
  // Use params when sending a get request
  var params = {}
  if (c && 'data' in c) {
    if (type === 'GET') {
      params = c.data
    } else {
      console.log(c.data)
      formdata = arrayToFormData(c.data)
    }
  }
  const apiUrl = `${host}${url}`
  return new Promise(
    (resolve, reject) => {
      axios({
        method: type,
        url: apiUrl,
        headers: {
          ...(includeToken) && { Authorization: `JWT ${token}` },
          'Content-Type': 'multipart/form-data'
        },
        data: formdata,
        params: params,
        withCredentials: true
      }).then(
        response => {
          resolve(response)
          // Mutate State if context and state variables is passed
          if (context && state) {
            context.commit(state, response.data)
          }
        }).catch(
        error => {
          reject(error)
        }
      )
    }
  )
}
