import Vue from 'vue'

Vue.component('new-client-form', {
  template: '<div class="client-form"><div class="form-container"><p>Criar Cliente</p><form><input type="text" name="nome" placeholder="Nome Fantasia" required/><select name="doc_type"><option selected disabled>Tipo de Documento</option></select><input type="text" name="documento" placeholder="Documento" /><input type="text" name="bairro" placeholder="Bairro" /><input type="text" name="cidade" placeholder="Cidade"/><select name="status"><option selected disabled>Status</option></select><input type="text" name="nome_socio" placeholder="Nome do Sócio" /><input type="text" name="doc_socio" placeholder="Documento do sócio" /><button type="submit">Salvar</button></form></div></div>'
})

var newClientForm = new Vue({
  el: '#home'
})