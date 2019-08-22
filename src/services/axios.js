import axios from 'axios'

const BASE_URL = 'http://localhost:3000/api'
const userToken = localStorage.getItem('token')
const Auth = 'Bearer'.concat(userToken)
var requestConfig = {
  method: 'GET',
  headers: {
    'Authorization': Auth
  },
  json: true
}

export default {
  getClients: () => {
    const url = BASE_URL + '/clients'
    axios.get(url, requestConfig).then(res => {
      return res.json()
    })
  },

  createNewClient: (params) => {
    const url = BASE_URL + '/clients'
    axios.post(url, params)
  },

  getClientDetails: (id) => {
    const url = BASE_URL + '/client/' + id
    axios.get(url, requestConfig).then((res) => {
      return res.json()
    })
  },

  editClientDetails: (id, params) => {
    const url = BASE_URL + '/client/' + id
    axios.post(url, params)
  },

  getClientTransactions: (id) => {
    const url = BASE_URL + '/client/' + id + '/transactions'
    axios.get(url, requestConfig).then((res) => {
      return res.json()
    })
  },

  signIn: (params) => {
    const url = BASE_URL + '/user/login'
    axios.post(url, params).then((res) => {
      if (res.status == '200') {
        localStorage.setItem('user')
      }
    })
  }
}