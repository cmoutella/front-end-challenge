<template>
  <div class="container" id="client-details">
    <button class="edit-client">Dados do Cliente</button>
    <div class="client-data">
      <div class="data-main">
        <p class="client-name">Loja da Manu</p>
        <p class="client-status">Aprovado</p>
      </div>
      <div class="wrapper">
        <p>Endereço: blablabla</p>
        <p>Bairro: blablabla</p>
        <p>Cidade: blablabla</p>
        <p>Tipo: blablabla</p>
        <p>Documento: blablabla</p>
      </div>
      <div class="wrapper">
        <p class="section-title">Sócios</p>
        <p>Nome: blablabla</p>
        <p>Documento: blablabla</p>
      </div>
    </div>
    <button class="transactional">Transacional</button>
  </div>
</template>
<script>
import "../components/editClientForm";
export default {};
</script>