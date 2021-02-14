<template>
  <div>
    
    <div class="container">
    <form method="POST" @submit.prevent="createTodo">

      <h3>Create Todo</h3>

           
      <div class="form-group">
        <div class="form-control1"><p><label for="">Date</label></p>
        <input v-model="date" type="string" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="">
        </div>
      
      <div class="form-control1"><p><label for="">Title</label></p>
        <input  v-model="title" type="text"  name="" id="" placeholder="">
      </div>
      </div>

        <div class="form-group2">
        <p><label for="">Todo Details</label></p>
        <input v-model="todoDetails" type="text" class="form-control" name="" id="Tododetails" placeholder="">
      </div>

    <div class="btn">
      <button type="submit" class="btn btn-primary">Save</button>
      </div>

      
    </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
        date: '',
        title: '',
        todoDetails: '',
        error: null
        
        }
      },

        methods: {
    async createTodo() {
      try {
            console.log(this.title)
        
        await this.$axios.post('http://api.uatdrive.com:1010/todos', {
          date: this.date,
          title: this.title,
          todoDetails: this.todoDetails,
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
  width: 100%;
  
   
 }

 .form-group {
   display: flex;
   justify-content: space-between;
  
 }

 .form-group input {
  width: 100%;
  height: 50px;

  
  
}

.form-control1 {
  width: 48%;
  
}

.btn {
  width: 400px;
  color: #fff;
   margin: 0px auto;
   margin-top: 10px;
 
}

button {
    background-color: #000;
    padding: 10px;
    
}

#Tododetails {
    width: 100%;
    height: 120px;
    margin-top: -5px;
    
  
}

.form-group2  {

   height: 160px;
  
}

@media (max-width: 675px) {

    * {
    box-sizing: border-box;
}

 
   form {

        width: 90%;
        
        margin: 0 auto;
        

    }

    
input {
  width: 500px;
  height: 30px;

  margin-top: -100px;
}

.btn {
  width: 200px;
  margin: 0px auto;
}


}

    
</style>