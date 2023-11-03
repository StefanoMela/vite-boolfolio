<script>
import axios from "axios";
import { store } from "../data/store.js";

import ProjectCard from "./ProjectCard.vue";

export default {
  data() {
    return {
      store,
    };
  },

  components: { ProjectCard },

  methods: {
    fetchProjects(uri = store.baseUrl + "projects") {
      axios.get(uri).then((response) => {
        store.projects = response.data.data;
        store.pagination.prev = response.data.prev_page_url;
        store.pagination.next = response.data.next_page_url;
        store.pagination.links = response.data.links;
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
    <div @click="fetchProjects(store.pagination.prev)">Prev Page</div>
    <div @click="fetchProjects(store.pagination.next)">Next Page</div>
  </div>
</template>

<style lang="scss" scoped></style>
