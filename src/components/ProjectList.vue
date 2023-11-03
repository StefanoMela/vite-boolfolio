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
  <section class="main">
    <div class="container">
      <div class="row-cols-3">
        <div class="col">
          <div v-for="project in projects" class="card">
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
  </section>
</template>

<style lang="scss" scoped></style>
