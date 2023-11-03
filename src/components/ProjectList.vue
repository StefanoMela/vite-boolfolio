<script>
import axios from 'axios';
import {store} from '../data/store.js'

import ProjectCard from "./ProjectCard.vue";

export default {
  data() {
    return {
      store,
    };
  },

  components: { ProjectCard },

  methods: {
    fetchProjects() {
      axios.get(this.store.baseUrl + "projects").then((response) => {
        store.projects = response.data.data;
      });
    },
  },

  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <div class="container mb-4 text-center">
    <h1 class="mb-4">Projects List</h1>
    <div class="row row-cols-3 g-4">
      <ProjectCard v-for="project in store.projects" :project="project" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
