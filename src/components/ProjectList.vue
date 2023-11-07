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
    <h1 class="my-4">Projects List</h1>
    <div class="row row-cols-3 g-4">
      <ProjectCard 
      v-for="project in store.projects" :project="project"
      :isDetail="false" />
    </div>

    <nav class="my-4" aria-label="Page navigation example">
      <ul class="pagination">
        <li
          v-for="link in store.pagination.links"
          @click="fetchProjects(link.url)"
          class="page-item"
        >
          <a class="page-link" href="#" v-html="link.label"></a>
        </li>
      </ul>
    </nav>
</template>

<style lang="scss" scoped></style>
