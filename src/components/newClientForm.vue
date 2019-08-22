<template>
  <div class="client-form">
    <div class="form-container">
      <p>Criar Cliente</p>
      <form>
        <input type="text" name="name" placeholder="Nome Fantasia" required />
        <select name="docType">
          <option selected disabled>Tipo de Documento</option>
        </select>
        <input type="text" name="doc" placeholder="Documento" />
        <input type="text" name="neighborhood" placeholder="Bairro" />
        <input type="text" name="city" placeholder="Cidade" />
        <select name="status">
          <option selected disabled>Status</option>
        </select>
        <input type="text" name="partnerName" placeholder="Nome do Sócio" />
        <input type="text" name="partnerDoc" placeholder="Documento do sócio" />
        <button type="submit">Salvar</button>
      </form>
    </div>
  </div>
</template>

<script>
import services from "../services/axios";

export default {
  name: "new-client-form",
  data() {
    return {
      input: {
        name: "",
        docType: "",
        doc: "",
        neighborhood: "",
        city: "",
        partnerName: "",
        partnerDoc: ""
      }
    };
  },
  methods: {
    update() {
      var params = {
        name: this.input.name,
        docType: this.input.docType,
        doc: this.input.doc,
        neighborhood: this.input.neighborhood,
        city: this.input.city,
        partnerName: this.input.partnerName,
        partnerDoc: this.input.partnerDoc
      };
      services.createNewClient(this.pros.id, params);
    }
  }
};
</script>