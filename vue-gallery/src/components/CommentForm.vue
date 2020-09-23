<template>
  <div class="mofal-form-container">
    <form class="modal-form" ref="form" @submit.prevent="submitComment">
      <input type="text" placeholder="Ваше имя" class="modal-input" v-model="name" />
      <input type="text" placeholder="Ваш комментарий" class="modal-input" v-model="comment" />
      <button class="button-submit" type="submit">Оставить комментарий</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import "@babel/polyfill";

export default {
  props: {
    id: {
      required: true,
    },
  },
  data() {
    return {
      name: "",
      comment: "",
    };
  },
  methods: {
    submitComment() {
      let formData = new FormData();
      formData.append('name', this.name);
      formData.append('comment', this.comment)
      let data = {};
      for (let [key, val] of formData.entries()) {
        Object.assign(data, { [key]: val });
      }
      axios
        .post(
          `https://boiling-refuge-66454.herokuapp.com/images/${this.id}/comments`,
          data
        )
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style scoped>
.mofal-form-container {
  width: 50%;
}

.modal-form {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.modal-input {
  max-width: 100%;
  padding: 10px;
  margin-bottom: 5%;
  background: #ffffff;
  border: 1px solid #cccccc;
  box-sizing: border-box;
  border-radius: 3px;
  transition: all 0.5s ease;
}

.modal-input:focus {
  border: 1px solid #4997d0;
}

.button-submit {
  height: 30px;
  background: #4997d0;
  border-radius: 3px;
  border-color: transparent;
  color: #fff;
}

@media (max-width: 576px) {
  .mofal-form-container {
    width: 100%;
    padding: 3%;
  }
}
</style>