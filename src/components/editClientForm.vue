<template>
  <div class="client-form">
    <div class="form-container">
      <p>Editar Cliente</p>
      <form>
        <input type="text" name="address" placeholder="Endereço" />
        <input type="text" name="neighborhood" placeholder="Bairro" />
        <input type="text" name="city" placeholder="Cidade" />
        <select name="status">
          <option selected disabled>Status</option>
        </select>
        <button type="submit">Salvar</button>
      </form>
    </div>
  </div>
</template>

<script>
import services from "../services/axios";
export default {
  name: "edit_client_form",
  props: {
    id: String
  },
  data() {
    return {
      input: {
        address: "",
        neighborhood: "",
        city: ""
      }
    };
  },
  methods: {
    update() {
      var params = {
        address: this.input.address,
        neighborhood: this.input.neighborhood,
        city: this.input.city
      };
      services.editClientDetails(this.pros.id, params);
    }
  }
};
</script>