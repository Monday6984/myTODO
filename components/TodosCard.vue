<template>

  <div>
     
     <div class="todo-cards">
      <!-- Todos cards will go here -->
      
     <div class="todo-card">
      <span class="date">{{ data.createdAt }} </span>
      <nuxt-link :to="'/Todos/'+ data.id ">
      <h4> {{ data.Title }}</h4>
       </nuxt-link>
      <span >{{ data.todoDetails }} </span>
      
    </div>


   
    </div>
  </div>
</template>


<script>
export default {
  name: 'TodosCard',
  props: {
    data: {
      type: Object
    }
  }
}
</script>

<style scoped>




.todo-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, 23rem) ;
    margin-bottom: 30px;
   
    margin: 0 auto;
    justify-content: center;
    
  }

   .todo-card {
    display: inline-block;
    border: 1px solid black ;
    border-radius: 10px;
    padding: 20px;
    margin: 25px;
  }

   .todo-card a {
    color: #720c23;
    text-decoration: none;
  }

   .todo-card img {
    width: 100%;
  }

   .todo-card h3 {
    margin-top: 5px ;
    display: flex;
  }

  .todo-card p {
    line-height: 1.5;
  }

  .date {
    align-items: right;
   
  }

  .current-price span {
    font-weight: bold;
    text-decoration: underline;
  }

  .saving {
    color: green;
  }




</style>
