<template>
  <div>
    
    <form>

      <h3>Create Todo</h3>

           
      <div class="form-group">
        <p><label for="">Date</label></p>
        <input v-model="register.date" type="string" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="">
        
      
      <label for="">Title</label>
        <input  v-model="register.Title" type="text" class="form-control" name="" id="" placeholder="">
      </div>

        <div class="form-group2">
        <p><label for="">Todo Details</label></p>
        <input v-model="register.todoDetails" type="text" class="form-control" name="" id="Tododetails" placeholder="">
      </div>

      <button type="submit" class="btn-btn-primary">Save</button>

      
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
        retypePassword: '',
        
        }
      }
    }
  }

</script>

<style scoped>
form {
  width: 92%;
  margin: 0 auto;
 
 }

input {
  width: 600px;
  height: 30px;

  margin-top: -100px;
}

button {
  width: 400px;
   padding: 10px;
 
  background-color: #000;
  color: #fff;
   margin: 50px 500px 50px 400px;
}

#Tododetails {
    width: 99%;
    height: 120px;
    margin-top: -5px;
    
  
}

.form-group2  {

   height: 160px;
  
}

    
</style>