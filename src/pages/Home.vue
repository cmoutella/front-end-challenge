<template>
  <div class="home">
    <div class="container">
      <button class="add-client">Clientes</button>
      <ul class="home-list">
        <li class="home-client">
          <button>
            <h1>Loja da Mona</h1>
            <h3>Aprovado</h3>
          </button>
        </li>
        <li class="home-client">
          <button>
            <h1>Loja da Mina</h1>
            <h3>Recusado</h3>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import services from "../services/axios";
import newClientForm from "../components/newClientForm";

export default {
  name: "Boulder_clients",
  components: {
    newClientForm
  },
  data() {
    return {
      clients: []
    };
  },
  created() {
    services.getClients(clients => {
      this.clients = clients.data.data.results;
    });
  }
};
</script>