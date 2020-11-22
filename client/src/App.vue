<template>
  <div id="app" class="container">
  <navBar></navBar>
    <my-counter></my-counter>
  </div>
</template>

<script>
import myCounter from './components/myCounter.vue'
import navBar from './components/navbar.vue'

export default {
  name: 'app',
  components: { myCounter,navBar }
}
</script>

<style></style>