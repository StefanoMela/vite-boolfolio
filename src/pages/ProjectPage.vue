<script>
import axios from "axios";
import {store} from '../data/store.js';
import ProjectCard from "../components/ProjectCard.vue";

export default {
  data(){
    return{
      store,
    }

  },
  components: { ProjectCard },

  created(){

    console.log(store.baseUrl + 'projects/' + this.$route.params.id);
    axios.get(store.baseUrl + 'projects/' + this.$route.params.id )
  },
};
</script>

<template>
  <h1>Dettaglio Progetto</h1>
  <!-- <ProjectCard /> -->
</template>

<style lang="scss" scoped></style>