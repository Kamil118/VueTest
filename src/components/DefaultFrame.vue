<script setup lang="ts">
  import logo from './icons/logo.vue'
  import login from './login.vue'
  import page from './page.vue'
  import Footer from './footer.vue'
</script>

<template>
  <div class="frame">
    <div class="header">
      <logo></logo>
      <login></login>
    </div>
    <page><slot></slot></page>
    <Footer></Footer>
  </div>
</template>

<style scoped>
.frame{
  display: flex;
  flex-direction: column;
  min-width: 90%;
  height: 90vh;
}
.header{
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 5px;
}
</style>
