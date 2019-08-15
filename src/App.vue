<template>
  <div id="app">
    <nav class="navbar">
      <a class="logo" href="#">boulder</a>
      <div class="log">
        <span class="log-user">John</span>
        <button class="log-loggout">Logout</button>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>