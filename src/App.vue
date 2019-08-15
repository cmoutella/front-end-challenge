<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/cliente">Cliente</router-link>
      <router-link to="/cliente/transacoes">Transações</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>