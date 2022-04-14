
const routes = [
  {
    path: '/',
    // component: () => import('layouts/MainLayout.vue'),
    component: () => import('pages/auth/LoginPage.vue')

  },
  // Client
  {
    path: '/client/',
    name: 'Issues',
    component: () => import('layouts/client/MainLayout.vue'),
    children: [
      {path: 'issues/',
        component: () => import('pages/client/issues/IssueList.vue')}
    ]
  },
  {
    path: '/report-problem/',
    name: 'ReportProblem',
    component: () => import('pages/client/issues/ReportProblem.vue')
  },
  // Client
  // {
  //   path: '/',
  //   name: 'ClientIssue',
  //   component: () => import('layouts/client/MainLayout.vue'),
  //   children: [
  //     {path: '', component: () => import('pages/client/issues/ReportProblem.vue')}
  //   ]
  // },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorPage.vue')
  }
]

export default routes
