export default {
  name: 'home',
  component: () => import('../views/Layout.vue'),
  children: [
    {
      name: 'index',
      path: '/',
      component: () => import('../views/Index.vue')
    }
  ]
}
