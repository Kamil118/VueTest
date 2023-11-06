<script setup lang="ts">
</script>
<template>
    <div class="page-content">
    <slot></slot>
    </div>
</template>

<style scoped>
.page-content{
    padding: 5px;
    border: 3px solid;
    border-color: rgb(200,200,200);
    border-radius: 20px;
    background: rgba(200, 200, 200, 0.449);
    align-self:auto;
    flex:1
    
}
</style>
