<template>
  <HelloWorld msg="OOO"/>
  <HelloWorld msg="OOO-OOO"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Dangnhap from './components/Dangnhap.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Dangnhap
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
