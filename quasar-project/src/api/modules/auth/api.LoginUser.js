import apiCallHelper from 'src/api/helpers/apiCallHelper'

function postDetail (c, context) {
  const url = '/api/auth/login/'
  let apiCall = apiCallHelper(c, context, 'POST', url,'',false)
  return apiCall
}

function postDetailGoogle (c, context) {
  const url = '/accounts/google/login/'
  let apiCall = apiCallHelper(c, context, 'POST', url)
  return apiCall
}

export default { postDetail, postDetailGoogle }
