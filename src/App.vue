<template>
  <div id="container">
    <img src="./assets/logo.png">
    <br/>
    <router-link to='/'>ToDo</router-link>
    <router-link to='/weather'>Weather</router-link>
    <router-view/>
  </div>
</template>

<script>
// This gets exported to main.js
export default {
  name: 'app'
}
</script>

<style>
#container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background-color: lightgrey;
}
</style>
