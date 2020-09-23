<template>
  <div class="tickets">
    <Loader v-if="loading" />
    <Ticket v-else v-for="(ticket, index) in sorted" :key="index" :ticket="ticket" :index="index" />
  </div>
</template>

<script>
import Ticket from "@/components/Ticket";
import Loader from "@/components/Loader";

export default {
  data() {
    return {
      loading: true,
    };
  },
  components: {
    Ticket,
    Loader,
  },
  computed: {
    searchId() {
      return this.$store.getters.searchId;
    },
    ticketList() {
      return this.$store.getters.ticketList;
    },
    sorted() {
      if (this.$store.getters.sorted.length != 0) {
        return this.$store.getters.sorted;
      } else {
        return this.ticketList.tickets;
      }
    },
  },
  mounted() {
    this.$store
      .dispatch("getSearchId")
      .then((id) => {
        this.$store.dispatch("getTicketList", id).then((this.loading = false));
      })
      .catch((error) => console.log(error));
  },
};
</script>

<style scoped>
.tickets {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>