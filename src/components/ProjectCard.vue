<script>
import axios from "axios";
import { RouterLink } from "vue-router";

export default {
  data() {
    return {};
  },
  props: {
    project: Object,
    isDetail: Boolean,
  },
  components: { RouterLink },
};
</script>

<template>
  <div class="col">
    <div class="card h-100">
      <div class="card-header">
        <span
          class="badge"
          v-if="project.type"
          :style="{ backgroundColor: project.type.color }"
          >{{ project.type.label }}</span
        >
        <h4 class="card-title">{{ project.title }}</h4>
        <span
          v-for="technology in project.technologies"
          v-if="project.technologies"
          :style="{ backgroundColor: technology.color }"
          class="badge rounded-pill mx-1"
        >
          {{ technology.label }}
        </span>
      </div>
      <div class="card-body">
        <p class="card-text">
          {{ project.description }}
        </p>
      </div>
      <div class="card-footer"
      v-if="!isDetail">
        <RouterLink 
              class="btn btn-primary w-50 align-self-center my-4"
              :to="{name: 'project-detail',
              params: {
                slug: project.slug
            }}"
              > Vedi dettagli
              </RouterLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
