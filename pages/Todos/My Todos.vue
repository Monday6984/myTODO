<template>
  <div>
    <h1 class="container">Todos</h1>
        <TodosCard
          v-for="(data, index) in data"
          :key="index"
          :data="data"
          :data-index="index"
        />
  </div>
</template>

<script>
    import TodosCard from "~/components/TodosCard.vue";
    export default {
      components: {
        TodosCard
      },
    

async asyncData({ $axios, error }) {
  try {
      const todo = await $axios.$get(`https://api.uatdrive.com:1010/todos`)
      
      return  {data: todo.data} 
  } catch (e) {
    error({
      statusCode: 503,
      message: 'Unable to fetch todos at this time. Please try again.'
    })
  }
      
    }
    
};

</script>

<style scoped>



</style>>

