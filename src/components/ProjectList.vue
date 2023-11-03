<script>
export default {
  data() {
    return {};
  },

  props: {
    projects: Array,
  },
};
</script>

<template>
  <div class="container mb-4 text-center">
    <h1 class="mb-4">Projects List</h1>
    <div class="row row-cols-3 g-4">
      <div class="col" v-for="project in projects">
        <div class="card h-100">
          <div class="card-header">
            <h4 class="card-title">{{ project.title }}</h4>
          </div>
          <div class="card-body">
            <p class="card-text">
              {{ project.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
