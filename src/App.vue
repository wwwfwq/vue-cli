<template>
  <div id="app">
    <div>Vue</div>
    <span id="age">50</span>
    <br>
    <br>
    <router-view></router-view>
  </div>
</template>

<script>

import {vm} from "./components/vm.js";
  vm.$on('sendage',function(input){
    var obj = document.querySelector('#age');
    obj.innerText = parseInt(obj.innerText) + input;
    console.log(obj.innerText)
  })

export default {
  name: 'app'
}
</script> 

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
