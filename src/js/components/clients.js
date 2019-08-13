import Vue from 'vue'

var app = new Vue({
  el: '#app',
  data: {
    clients: [{
        name: 'Loja da Manu',
        status: 'Aprovado'
      },
      {
        name: 'Loja da Gabi',
        status: 'Negado'
      }
    ]
  }
})