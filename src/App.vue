<script>
import axios from 'axios';
import {store} from './data/store.js'

import ProjectList from './components/ProjectList.vue'

export default {

data() {
  return {
    store,
  }
},

components: { ProjectList },

methods: {

  fetchProjects(){
    axios.get(this.store.baseUrl + 'projects').then((response) => {

      store.projects = response.data.data;

    }
  )

},
},

created() {

  this.fetchProjects();
}
};


</script>

<template>
  <div class="container text-center">
    <h1>Project List</h1>
    <ProjectList :projects="this.store.projects" />
  </div>
</template>

<style lang="scss" scoped>
</style>
