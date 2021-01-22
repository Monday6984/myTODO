<template>
      <div class="header">
        <nuxt-link to="/" class="brand">myTodo</nuxt-link>
        <nav>
          <nuxt-link to="/Login">Login</nuxt-link>&nbsp;|
          <nuxt-link to="/create Todo">Create Todo</nuxt-link>
          <nuxt-link to="/My Todos">My Todos</nuxt-link>
        </nav>
      </div>
    </template>
    
    <style scoped>
    .brand {
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      font-size: 1.5em;
      color: #720c23;
      text-decoration: none;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100px;
      background-color: #f5f5f5;
      padding-right: 50px;
      padding-left: 50px;
    }

    nav a {
      color: #000;
      font-weight: normal;
      background-color: transparent;
      text-decoration: none;
      padding: 20px;
    }
    
    </style scoped>