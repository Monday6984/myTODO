<template>
  <div>
    <h1>{{ data.Title }}</h1>
    <p>{{ data.todoDetails }}</p>
  </div>
</template>

<script>
  export default {
   async asyncData({ $axios, error, params }) {
  try {
      
    await this.$auth.loginWith('local', {
          data: {
          email: this.email,
          password: this.password
          },
        }) 

    const todo = await $axios.$get('http://api.uatdrive.com:1010/todos/' + params.id)
      console.log(todo.data[3])    
        return  {data: todo.data}     

  } catch (e) {
    error({
      statusCode: 503,
      message: 'Unable to fetch todos #.' + params.id
    })
  }
      
    }
  }
</script>