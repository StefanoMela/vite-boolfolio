<script>
export default {
  data() {
    return {
    }
  },

  props: {

    project: Object,
  }
};
</script>

<template>
    <div class="col">
        <div class="card h-100">
          <div class="card-header">
            <!-- <span class="badge" :style="{backgroundColor: project.type.color}">{{ project.type.label }}</span>  -->
            <h4 class="card-title">{{ project.title }}</h4>
            <!-- <span 
            v-for="technology in project.technologies"
            :style="{backgroundColor: project.technology.color}"
            class="badge rounded-pill">
            {{ project.technology.label }}
        </span> -->
        </div>
        <div class="card-body">
            <p class="card-text">
              {{ project.description }}
            </p>
          </div>
        </div>
      </div>
</template>

<style lang="scss" scoped></style>