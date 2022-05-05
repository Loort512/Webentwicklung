<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/background.jpeg">
    <HelloWorld msg="Welcome to your Management System"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
