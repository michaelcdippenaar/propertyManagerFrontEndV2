import apiCallHelper from 'src/api/helpers/apiCallHelper.js'

function postIssue (c, context) {
  const rootUrl = '/api/maintenance_portal/report_issue/request/'
  const url = rootUrl
  const state = 'mutationEntityList'
  return apiCallHelper(c, context, 'POST', url, state, true)
}

function getIssues (c, context) {
  const rootUrl = '/api/maintenance_portal/issues/'
  const url = rootUrl
  const state = ''
  return apiCallHelper(c, context, 'GET', url, state, true)
}
export default { postIssue, getIssues }
