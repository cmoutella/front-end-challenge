import axios from 'axios'

const BASE_URL = 'http://localhost:3000/api'
var requestConfig = {
  method: 'GET',
  headers: {
    'Origin': 'http://localhost:8080/#/',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE'
  },
  json: true
}

export default {
  getClients: (callback) => {
    const url = BASE_URL + '/clients'
    axios.get(url, requestConfig).then((clients) => {
      if (callback) {
        callback(clients)
      }
    })
  },

  createNewClient: (params) => {
    const url = BASE_URL + '/clients'
    axios.post(url, params)
  },

  getClientDetails: (id) => {
    const url = BASE_URL + '/client/' + id
    var ClientDetails = axios.get(url, requestConfig)
    return ClientDetails
  },

  editClientDetails: (id, params) => {
    const url = BASE_URL + '/client/' + id
    axios.post(url, params)
  },

  getClientTransactions: (id) => {
    const url = BASE_URL + '/client/' + id + '/transactions'
    const ClientTransactions = axios.get(url, requestConfig)
    return ClientTransactions
  }
}