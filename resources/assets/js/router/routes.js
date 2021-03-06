const Welcome = () => import('~/pages/welcome').then(m => m.default || m)
const Login = () => import('~/pages/auth/login').then(m => m.default || m)
const Register = () => import('~/pages/auth/register').then(m => m.default || m)
const PasswordEmail = () => import('~/pages/auth/password/email').then(m => m.default || m)
const PasswordReset = () => import('~/pages/auth/password/reset').then(m => m.default || m)
const NotFound = () => import('~/pages/errors/404').then(m => m.default || m)

const About = () => import('~/pages/about').then(m => m.default || m)
const Product = () => import('~/pages/product').then(m => m.default || m)
const Cart = () => import('~/pages/cart').then(m => m.default || m)
const Details = () => import('~/pages/details').then(m => m.default || m)
const Payment = () => import('~/pages/payment').then(m => m.default || m)
const Order = () => import('~/pages/order').then(m => m.default || m)
const Contacts = () => import('~/pages/contacts').then(m => m.default || m)
const Settings = () => import('~/pages/settings/index').then(m => m.default || m)
const SettingsProfile = () => import('~/pages/settings/profile').then(m => m.default || m)
const SettingsPassword = () => import('~/pages/settings/password').then(m => m.default || m)

export default [
  { path: '/', name: 'welcome', component: Welcome },

  { path: '/login', name: 'login', component: Login },
  { path: '/register', name: 'register', component: Register },
  { path: '/password/reset', name: 'password.request', component: PasswordEmail },
  { path: '/password/reset/:token', name: 'password.reset', component: PasswordReset },

  { path: '/settings',
    component: Settings,
    children: [
      { path: '', redirect: { name: 'settings.profile' } },
      { path: 'profile', name: 'settings.profile', component: SettingsProfile },
      { path: 'password', name: 'settings.password', component: SettingsPassword }
    ] },

  {
      path: '/about',
      name: 'about',
      component: About
  },
  {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
  },

  { path: '/cart', name:'cart', component: Cart },
  { path: '/details', name:'details', component: Details },
  { path: '/payment', name:'payment', component: Payment },
  { path: '/bagel/:id', name:'bagel', component: Product },
  { path: '/drink/:id', name:'drink', component: Product },

  { path: '/order/:id', name:'order', component: Order },

  { path: '*', component: NotFound }
]
