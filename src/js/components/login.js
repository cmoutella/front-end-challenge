import Vue from 'vue'
import '../../images/logo.png'

Vue.component('login-interface', {
  template: '<div class="login"><div class="login-container"><h1 class="login-title">Boulder</h1><div class="login-form"><p>Login</p><form><input type="email" name="email" placeholder="Email"/><input type="password" name="password" placeholder="Password"/><button type="submit">entrar</button></form></div></div></div>'
})

var login = new Vue({
  el: "#login"
})