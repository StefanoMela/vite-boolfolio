<script>
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue'

export default {

components: { Navbar, RouterView },
};


</script>

<template>
    <Navbar />
    <div class="container mb-4">
        <RouterView />
    </div>
</template>

<style lang="scss" scoped>
</style>
