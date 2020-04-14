import Layout from '@/layout/index.vue'
const NavigatorClipboard = () => import('@/views/navigator-clipboard/index.vue')

export default [{
  path: '/',
  name: 'Layout',
  component: Layout,
  redirect: '/navigator-clipboard',
  children: [
    {
      path: 'navigator-clipboard',
      name: 'clipboard',
      component: NavigatorClipboard
    }
  ]
}
]
