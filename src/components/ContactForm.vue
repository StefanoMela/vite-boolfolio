<script>
import axios from "axios";
import { store } from "../data/store";

export default {
  data() {
    return {

      store,

      formField: {
        email: "",
        name: "",
        message: "",
      },

      messageSent: false,
      success: false,
      loading: false,
      error: {
        message: '',
        state: false,
      },
    };
  },

  methods: {
    sendMessage() {
      if (
        !this.formField.email ||
        !this.formField.name ||
        !this.formField.message
      )
        return;

        this.messageSent = true;
        this.loading = true;
        this.succes = false;
        this.error.status = false;

      const data = {
        email: this.formField.email,
        name: this.formField.name,
        message: this.formField.message,
      };

      console.log(data);

      axios.post(store.baseUrl + 'message', data)
      .then((response) => { 
        console.log(response);
        this.success = true;
      })
      .catch((error)=>{
        this.error.state = true;
        this.error.message = error.message;
      })
      .finally(()=>{
        this.loading = false;
      });
    },
  },
}; 
</script>

<template>

  <div v-if="messageSent && succes"
  class="alert alert-success">
  Messaggio inviato !
  </div>

  <div v-if="messageSent && loading"
  class="alert alert-warning">
  Invio in corso
  </div>

  <div v-if="messageSent && error.status"
  class="alert alert-danger">
  {{ error.message }}
  </div>


  <div v-if="!messageSent || error.status">
    <div class="row row-cols-4 flex-column">
      <div class="w-50">
        <label for="formfield-email" class="form-label">E-mail</label>
        <input
        v-model="formField.email"
          type="text"
          class="form-control"
          id="formfield-email"
          placeholder="E-mail"
        />
      </div>
      <div class="my-3 w-50">
        <label for="formfield-name" class="form-label">Nome</label>
        <input
        v-model="formField.name"
          type="text"
          class="form-control"
          id="formfield-name"
          placeholder="Nome"
        />
      </div>
      <div class="w-50">
        <label for="formfield-message" class="form-label"
          >Messaggio</label
        >
        <textarea
        v-model="formField.message"
          class="form-control"
          id="formfield-message"
          rows="3"
        ></textarea>
      </div>
    </div>
  
    <button class="btn btn-success"
    @click="sendMessage()">
      Invia Messaggio
    </button>
  </div>

</template>

<style lang="scss" scoped></style>
