import apiCallHelper from 'src/api/helpers/apiCallHelper.js'

const rootUrl = '/api/maintenance_portal/property/'

function getProperty (c, context) {
  const url = rootUrl
  const state = 'mutationEntityList'
  return apiCallHelper(c, context, 'Get', url, '', true)
}

export default { getProperty }
