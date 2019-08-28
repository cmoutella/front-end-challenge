<template>
  <div class="login">
    <div class="login-container">
      <h1 class="login-title">Boulder</h1>
      <div class="login-form">
        <p>Login</p>
        <form>
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button type="submit" v-on:click="login">entrar</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import services from "../services/axios";

export default {
  name: "Login",
  data() {
    return {
      input: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    login: function(e) {
      e.preventDefault();
      var login_data = {
        email: this.input.email,
        password: this.input.password
      };
      services.signIn(login_data);
    }
  }
};
</script>