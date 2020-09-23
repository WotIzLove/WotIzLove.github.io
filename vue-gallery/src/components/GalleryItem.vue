<template>
  <div class="item">
    <img class="item__image" :src="image.url" :alt="image.id" @click="this.showModal = true" />
  </div>
  <transition name="modal_animate">
    <Modal v-if="showModal" @close="this.showModal = false" :id="image.id" :url="image.url" />
  </transition>
</template>

<script>
import Modal from "@/components/Modal";

export default {
  props: {
    image: {
      type: Object,
      required: true,
    },
  },
  components: {
    Modal,
  },
  data() {
    return {
      showModal: false,
    };
  },
  watch: {
    showModal() {
      if (this.showModal) {
        document.body.style.overflow = "hidden";
        return;
      }

      document.body.style.overflow = "auto";
    },
  },
};
</script>

<style scoped>
@import "~animate.css/animate.css";

@media (max-width: 768px) {
  .modal_animate-enter-active {
    animation: slideInUp 0.5s;
  }
  .modal_animate-leave-active {
    animation: slideOutDown 0.5s;
  }
}

.item {
  width: 30%;
  margin-bottom: 5%;
  cursor: pointer;
  overflow: hidden;
}
.item__image {
  width: 100%;
  transition: all 0.35s;
}
.item__image:hover {
  filter: brightness(0.7);
  transform: scale(1.1);
}

@media (max-width: 576px) {
  .item {
    width: 90%;
  }
}
</style>