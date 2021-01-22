<template>
  <div>
    
    <form>

      <h3>Please Login to Continue</h3>

           
      <div class="form-group">
        <p><label for="">Email</label></p>
        <input v-model="register.email" type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="">
        
      </div>
      <div class="form-group">
        <p><label for="">Password</label></p>
        <input  v-model="register.password" type="password" class="form-control" name="" id="" placeholder="">
      </div>


      <button type="submit" class="btn btn-primary">Login</button>

      
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
      register: {
        email: '',
        password: '',
                
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

button {
  width: 300px;
   padding: 10px;
  background-color: #000;
  color: #fff;
   margin: 20px 50px 0px 50px;
}
</style>