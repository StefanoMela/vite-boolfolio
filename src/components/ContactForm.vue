<script>
import axios from 'axios';
import {store} from '../data/store';

export default {
  data() {
    return {
      formField: {
        email: '',
        name: '',
        message: '',
      }
    };
  },

  methods: {

    sendMessage() {
      if(!this.formField.email || !this.formField.name || !this.formField.message)

      return;

      const data = {

        email: this.formField.email,
        name: this.formField.name,
        message: this.formField.message,

      }

    }
  }
};
</script>

<template>
  <div class="row row-cols-4 flex-column">
    <div class="my-3 w-50">
      <label for="formGroupExampleInput" class="form-label"
        >Example label</label
      >
      <input
        type="text"
        class="form-control"
        id="formGroupExampleInput"
        placeholder="Example input placeholder"
      />
    </div>
    <div class="my-3 w-50">
      <label for="formGroupExampleInput2" class="form-label"
        >Another label</label
      >
      <input
        type="text"
        class="form-control"
        id="formGroupExampleInput2"
        placeholder="Another input placeholder"
      />
    </div>
    <div class="my-3 w-50">
      <label for="formGroupExampleInput2" class="form-label"
        >Another label</label
      >
      <input
        type="text"
        class="form-control"
        id="formGroupExampleInput2"
        placeholder="Another input placeholder"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
