import Login from './pages/Login.vue'
import Home from './pages/Home.vue'
import Client from './pages/Client.vue'
import Transactions from './pages/Transactions.vue'


const routes = [{
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/cliente/',
    component: Client
  },
  {
    path: '/cliente/transacoes',
    component: Transactions
  }
]

export default routes