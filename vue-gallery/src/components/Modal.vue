<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <button class="modal-close" @click="$emit('close')">
            <div class="close"></div>
          </button>
          <div class="modal-content">
            <div class="modal-image-wrapper">
              <img class="modal-image" :src="url" />
            </div>
            <div v-if="loading" class="loader-comments">
              <LoaderComments />
            </div>
            <CommentList v-else :comments="comments" />
            <CommentForm :id="id" />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from "axios";

import CommentList from "@/components/CommentList.vue";
import CommentForm from "@/components/CommentForm";
import LoaderComments from "@/components/LoaderComments";

export default {
  components: {
    CommentList,
    CommentForm,
    LoaderComments,
  },
  props: {
    id: {
      required: true,
    },
    url: {
      required: true,
    },
  },
  data() {
    return {
      comments: [],
      loading: true,
    };
  },
  mounted() {
    axios
      .get(`https://boiling-refuge-66454.herokuapp.com/images/${this.id}`)
      .then((response) => {
        this.comments = response.data.comments;
        this.loading = false;
      })
      .catch((error) => console.log(error));
  },
};
</script>

<style scoped>
.loader-comments {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  max-width: 619px;
  margin: 0px auto;
  padding: 2%;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  position: relative;
}

.modal-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.modal-close {
  position: absolute;
  right: 20px;
  top: 20px;
  background: none;
  border: none;
  cursor: pointer;
}

.modal-image-wrapper {
  width: 50%;
  margin-bottom: 3%;
}

.modal-image {
  width: 100%;
}

.comment-form {
  width: 100%;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  transform: scale(1.1);
}

.close {
  width: 19px;
  height: 21px;
  opacity: 1;
  padding: 5px;
}
.close:hover {
  opacity: 0.3;
}
.close:before,
.close:after {
  position: absolute;
  left: 20px;
  content: " ";
  height: 21px;
  width: 1px;
  background-color: #000;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}

@media (max-width: 576px) {
  .modal-container {
    height: 100%;
    padding: 0;
  }
  .modal-image-wrapper {
    width: 100%;
    margin: 0;
  }
  .loader-comments {
    width: 100%;
  }
}
</style>