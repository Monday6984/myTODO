<template>
  <div>
    
    <form  method="POST" @submit.prevent="login">

      <h3>Please Login to Continue</h3>

      <Notification :message="error" v-if="error"/>


           
      <div class="form-group">
        <p><label for="">Email</label></p>
        <input v-model="email" type="email" class="form-control" name="email" >
        
      </div>
      <div class="form-group">
        <p><label for="">Password</label></p>
        <input  v-model="password" type="password" class="form-control" name="password" >
      </div>

    <div class="btn">
      <button type="submit" class="btn btn-primary">Login</button>
    </div>
    <router-link to="/Register">
      Don't have an account? register
    </router-link>
      
    </form>
  </div>
</template>

<script>
import Notification from '~/components/Notification'

export default {
  components: {
    Notification,
  },

  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },

  methods: {
    async login() {
      try {
            console.log(this.email)
        
        await this.$auth.loginWith('local', {
          data: {
          email: this.email,
          password: this.password
          }
          })

        .then ( () => { 
        this.$router.push({ name: "Todos-My Todos" })
        })
      } catch (e) {
        this.error = e.response.data.message
      }
    }
  }
}
</script>

<style scoped>
form {
  width: 30%;
  min-width: 400px;
  margin: 0 auto;
  
 }

input {
  width: 100%;
  height: 30px;
  margin-top: -100px;
}

.btn {
  width: 80%;
  color: #fff;
  margin: 0 auto;
  margin-top: 10px;
 
}

button {
    background-color: #000;
    padding: 10px;
    
}


@media (max-width: 675px) {

   
    form {

        width: 50%;
        margin: 0 auto;

    }

    button {
        width: 200px;
        margin: 0px;

      

        


}

}

</style>