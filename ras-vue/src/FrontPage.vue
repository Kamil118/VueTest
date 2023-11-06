<script setup lang="ts">
    import DefaultFrame from './components/DefaultFrame.vue'
    import { RouterView } from 'vue-router'
</script>

<template>
    <DefaultFrame>
        <RouterView/>
    </DefaultFrame>
</template>