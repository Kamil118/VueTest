<script setup lang="ts">
  import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="footer">
        <div id="footer-nav-menu">
            <RouterLink to="/">Home Page</RouterLink>
            <RouterLink to="/another">Another Page</RouterLink>
            <RouterLink to="/commentdebug">Comment</RouterLink>
            <RouterLink to="/">Home Page</RouterLink>
        </div>
        <div id="copyright-notice">
            Copyright 2023 Kamil Suchecki
        </div>
    </div>
</template>

<style scoped>
#copyright-notice{
    font-size: small;
    color: rgb(100,100,100);
}
.footer{
    max-height: 50px;
    min-width: 100%;
    display: block;
    align-items: center;
}
.footer > *{
    margin: auto;
    text-align: center;
    
}
a{
    margin-left: 5px;
    margin-right: 5px;
}

</style>