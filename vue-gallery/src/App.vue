<template>
    <h1 class="app-title">Test App</h1>
    <div v-if="loading" class="loader-main">
          <Loader/>
    </div>
    <GalleryList v-else :imageList="imageList" />
    <Footer />
</template>

<script>
import GalleryList from "@/components/GalleryList";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      imageList: null,
      loading: true
    };
  },
  mounted() {
    axios
      .get("https://boiling-refuge-66454.herokuapp.com/images")
      .then((response) => {
        this.imageList = response.data,
        this.loading = false
      })
      .catch((error) => console.log(error));
  },
  components: {
    GalleryList,
    Footer,
    Loader
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 98vh;
}

.loader-main {
  justify-self: center;
  align-self: center;
  position: absolute;
  top: 35%;
}
</style>
