
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/skills', component: () => import('pages/skills.vue') },
      { path: '/experience', component: () => import('pages/experience.vue') },
      { path: '/portfolio', component: () => import('pages/portfolio.vue') },
      {
        path: "/contact", component: () => import('pages/Contact.vue')
      },
      {
        path:'/resume',component:()=>import('pages/resume.vue')
      }

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
