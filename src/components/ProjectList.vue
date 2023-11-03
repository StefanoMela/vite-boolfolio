<script>
export default {
  data() {
    return {      
    }
  },

  props: {

    project: Object,

  },
};
</script>

<template>
        <div class="row row-cols-3 g-4">
            <div class="col">
                    <div class="card-body">
                        <h4>{{ project.title }}</h4>
                    </div>
            </div>
        </div>
</template>

<style lang="scss" scoped></style>