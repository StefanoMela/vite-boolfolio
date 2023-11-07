<script>
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue'

export default {

components: { RouterView, Navbar },
};


</script>

<template>
    <Navbar />
    <div class="container mb-4 text-center">
        <RouterView />
    </div>
</template>

<style lang="scss" scoped>
</style>
