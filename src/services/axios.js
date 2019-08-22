import axios from 'axios'

const BASE_URL = 'http://localhost:3000/api'
var requestConfig = {
  method: 'GET',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE',
    'Accept': 'text/html,application/json,application/xml;'
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
    axios.post(url, params)
  }
}