<template>
  <div class="flex">
    <h2><router-link id="logo" to="/">VueFlix</router-link></h2>
    <div>
      <ul class="header">
        <li><router-link to="/">Películas</router-link></li>
        <li>Mis Favoritas</li>
        <span v-if="$auth.isAuthenticated">
          <li>Hola {{ $auth.email }}</li>
          <li><router-link to="/logout">Salir</router-link></li>
        </span>

        <li v-else><router-link to="/login">Entrar</router-link></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>
