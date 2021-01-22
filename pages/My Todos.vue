<template>
<div>

    <h3 id="title">My Todo</h3>


  <div class="todo-cards">
    <!-- product cards will go here -->
    <div class="todo-card">
      <p class="date">24/01/2021</p>
      <h3><nuxt-link to="/1">This is a sample title</nuxt-link></h3>
      
      <p class="current-price">This is a sample details, 
          This is a sample details, This is a sample details, 
          This is a sample details, This is a sample details, 
          This is a sample details, This is a sample details… </p>
      
    </div>

    <div class="todo-card">
      <p class="date">24/01/2021</p>
      <h3><nuxt-link to="/1">This is a sample title</nuxt-link></h3>>
      <p class="current-price">This is a sample details, 
          This is a sample details, This is a sample details, 
          This is a sample details, This is a sample details, 
          This is a sample details, This is a sample details… </p>
    </div>
 
    <div class="todo-card">
      <p class="date">24/01/2021</p>
     <h3><nuxt-link to="/1">This is a sample title</nuxt-link></h3>
      <p class="current-price">This is a sample details, 
          This is a sample details, This is a sample details, 
          This is a sample details, This is a sample details, 
          This is a sample details, This is a sample details… </p>
    </div>

  </div>

    <div class="todo-cards">
    <!-- product cards will go here -->
    <div class="todo-card">
      <p class="date">24/01/2021</p>
      <h3><nuxt-link to="/1">This is a sample title</nuxt-link></h3>
      <p class="current-price">This is a sample details, 
          This is a sample details, This is a sample details, 
          This is a sample details, This is a sample details, 
          This is a sample details, This is a sample details… </p>
    </div>

    <div class="todo-card">
      <p class="date">24/01/2021</p>
      <h3><nuxt-link to="/1">This is a sample title</nuxt-link></h3>
      <p class="current-price">This is a sample details, 
          This is a sample details, This is a sample details, 
          This is a sample details, This is a sample details, 
          This is a sample details, This is a sample details… </p>
    </div>
 
    <div class="todo-card">
      <p class="date">24/01/2021</p>
      <h3><nuxt-link to="/1">This is a sample title</nuxt-link></h3>
      <p class="current-price">This is a sample details, 
          This is a sample details, This is a sample details, 
          This is a sample details, This is a sample details, 
          This is a sample details, This is a sample details… </p>
    </div>

  </div>

</div>

</template>

<style scoped>

#title {
    margin-left: 80px;
}

.todo-cards {
    display: grid;
    grid-template-columns: auto auto auto ;
    margin-bottom: 30px;
    width: 92%;
    margin: 0 auto;
    
  }

   .todo-card {
    display: inline-block;
    border: 1px solid black ;
    border-radius: 10px;
    padding: 20px;
    margin: 25px;
  }

   .todo-card a {
    color: black;
    text-decoration: none;
  }

   .todo-card img {
    width: 100%;
  }

   .todo-card h3 {
    margin: 30px 0 15px;
  }

  .todo-card p {
    line-height: 1.5;
  }

  .date {
    float: right;
   
  }

  .current-price span {
    font-weight: bold;
    text-decoration: underline;
  }

  .saving {
    color: green;
  }

</style>