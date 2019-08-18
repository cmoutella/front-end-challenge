import axios from 'axios'

const BASE_URL = 'http://localhost:3000/api'
var requestConfig = {
  method: 'GET',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
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

  getClientDetails: (id, callback) => {
    const url = BASE_URL + '/client/' + id
    axios.get(url, requestConfig).then((clients) => {
      if (callback) {
        callback(clients)
      }
    })
  },

  editClientDetails: (id, params) => {
    const url = BASE_URL + '/client/' + id
    axios.post(url, params)
  },

  getClientTransactions: (id, callback) => {
    const url = BASE_URL + '/client/' + id + '/transactions'
    axios.get(url, requestConfig).then((clients) => {
      if (callback) {
        callback(clients)
      }
    })
  }
}