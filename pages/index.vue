<template>
  <div class="home">
    <h1>Welcome to the App!</h1>

    <div>
      To use this app you'll need to 
      <router-link to="/Login">
      Login
      </router-link>
      or
      <router-link to="/Register">
      Register
      </router-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.home {
  color: #000;
  width: 25%;
  max-width: 400px;
  margin: 0 auto;
  margin-top: 200px;
  
}
</style>