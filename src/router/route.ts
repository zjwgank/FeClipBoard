import Layout from '@/layout/index.vue'
const NavigatorClipboard = () => import('@/views/navigator-clipboard/index.vue')
const ExecCommand = () => import('@/views/exec-command/index.vue')
const JSClipboard = () => import('@/views/js-clipboard/index.vue')

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
    }, {
      path: 'exec-command',
      name: 'command',
      component: ExecCommand
    }, {
      path: 'js-clipboard',
      name: 'clipboardjs',
      component: JSClipboard
    }
  ]
}
]
