<template>
  <div>
    <header>
      <div class="container container-flex">
    
         <nuxt-link to="/" class="brand">myTodo</nuxt-link>

        
      
          <div class="navbar-links">
            <div v-if="isAuthenticated" >
              <a> {{ loggedInUser.email }}</a>
                <nuxt-link to="/create Todo">Create Todo</nuxt-link>
                <nuxt-link to="/Todos/My Todos">My Todos</nuxt-link>
              <a class="navbar-item"  @click="logout">Logout</a>
            </div>
        
          
            <div v-else >
            <nuxt-link to="/Login">Login</nuxt-link>
            <nuxt-link to="/Register">Register</nuxt-link>
            </div>
         
          
        </div>

      </div>
      </header>  

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {

    methods: {
    async logout() {
      await this.$auth.logout();
    }
  },
      computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  }
  }
</script>

<style  scoped>

header {
  background-color:  #720c23;
  padding: 2em 0;
  text-align: center;
  border: 2px solid green;
}

a {
  
  padding-left: 1em;
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
 
}

.navbar-links {
  border: 2px solid green;
 
 
  
  
  
}

.container {
    width: 90%;
    max-width: 1000px;
    margin: 0 auto;
    border: 1px solid yellow;
}

.container-flex {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    }


.brand {
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      font-size: 2rem;
      color: #f5f5f5;
      padding-left: 0;
      text-decoration: none;
     
    }
a:hover,
a:focus {
    color: #555;
}


 
@media (min-width:675px) {
          .container-flex {
        flex-direction: row;
    }

    
}

</style>