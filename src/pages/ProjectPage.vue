<script>
import axios from "axios";
import {store} from '../data/store.js';
import ProjectCard from "../components/ProjectCard.vue";

export default {
  data(){
    return{
      store,
      project: {},
    }

  },
  components: { ProjectCard },

  created(){
    axios.get(store.baseUrl + 'projects/' + this.$route.params.id )
    .then((response)=>{
      this.project = response.data;
    })
  },
};
</script>

<template>
  <h1>Dettaglio Progetto</h1>
  <ProjectCard 
  :project="project"
  :isDetail="true"
  v-if="project" />
</template>

<style lang="scss" scoped></style>