import Login from './components/Login.vue'
import Home from './components/Home.vue'
import Client from './components/Client.vue'
import Transactions from './components/Transactions.vue'


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