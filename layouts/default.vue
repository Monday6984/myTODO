<template>
  <div>
    <navbar />
    <Nuxt />
  </div>
</template>

<script>
    import Navbar from "~/components/Navbar.vue";
    export default {
      components: {
        Navbar
      }
    };
    </script>

<style>

* {
    box-sizing: border-box;
}

html {
      -webkit-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    body {
      margin: 0;
      font-family: 'Open Sans', sans-serif;
      font-size: 16px;
      line-height: 1.5;
     
    }

    .container {
      width: 90%;
      max-width: 1000px;
      margin: 0 auto;
      
}
    
</style>
