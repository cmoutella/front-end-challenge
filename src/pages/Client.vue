<template>
  <div class="client-details">
    <div class="container">
      <div class="client-detail">
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
    </div>
  </div>
</template>

<script>
import services from "../services/axios";
import "../components/editClientForm";
export default {
  name: "client_details",
  props: {
    id: {
      type: String
    }
  },
  data() {
    return {
      client: {}
    };
  },
  created() {
    services.getClientDetails(this.props.id, client => {
      this.client = client.data.data.results;
    });
  },
  methods: {
    editClient(e) {
      e.target.style.display = "initial";
    }
  }
};
</script>