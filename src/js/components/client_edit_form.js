import Vue from 'vue'

Vue.component('client-edit-form', {
  template: '<div class="client-form"><div class="form-container"><p>Editar Cliente</p><form><input type="text" name="endereco" placeholder="Endereço" /><input type="text" name="bairro" placeholder="Bairro" /><input type="text" name="cidade" placeholder="Cidade"/><select name="status"><option selected disabled>Status</option></select><button type="submit">Salvar</button></form></div></div>'
})

var clientForm = new Vue({
  el: '#client-edit-form'
})