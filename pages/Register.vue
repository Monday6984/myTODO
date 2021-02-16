<template>
  <div>
    
    <form method="POST" @submit.prevent="register">

      <h3>Please Register to Continue</h3>

      <Notification :message="error" v-if="error"/>

           
      <div class="form-group">
        <p><label for="">Email</label></p>
        <input v-model="email" type="email" class="form-control" name="email" >
        
      </div>
      <div class="form-group">
        <p><label for="">Password</label></p>
        <input  v-model="password" type="password" class="form-control" name="password" >
      </div>

        <div class="form-group">
        <p><label for="">Retype Password</label></p>
        <input v-model="retypePassword" type="password" class="form-control" name="password" >
      </div>


      <div class="btn">
      <button type="submit" class="btn btn-primary">Register</button>
      </div>

      <router-link to="/Login">
      Already have an account? Login
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
      retypePassword: '',
      error: null
    }
  },


    methods: {
        async register() {
      try {
          console.log(this.email)
          console.log(this.password)
          
        await this.$axios.post('https://api.uatdrive.com:1010/users/signup', {
          email: this.email,
          password: this.password,
          retypePassword: this.retypePassword,
        })

        await this.$auth.loginWith('local', {
          data: {
          email: this.email,
          password: this.password
          },
        })

        this.$router.push({ name: "Login" })
      } catch (e) {
        this.error = e.response.data.message
      }
    }
  }
  }

</script>

<style scoped>
form {
  width: 400px;
  margin: 0 auto;
 }

input {
  width: 400px;
  height: 30px;

  margin-top: -100px;
}

.btn {
  width: 200px;
  color: #fff;
   margin: 0px auto;
   margin-top: 10px;
 
}

button {
    background-color: #000;
    padding: 10px;
    
}


@media (max-width: 675px) {
 
   form {

        width: 80%;
        margin: 0 auto;
        

    }
}

</style>