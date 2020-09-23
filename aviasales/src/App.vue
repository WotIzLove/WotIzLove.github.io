<template>
  <div id="#app">
    <Header />
    <div class="content">
      <TicketFilter />
      <div class="main-content">
        <TicketTabs />
        <TicketList />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import TicketTabs from "@/components/TicketTabs";
import TicketList from "@/components/TicketList";
import TicketFilter from "@/components/TicketFilter";

export default {
  name: "App",
  components: {
    Header,
    TicketList,
    TicketTabs,
    TicketFilter,
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
  margin-top: 60px;
}

.content {
  display: flex;
  margin: 0 auto;
  justify-content: center;
}
</style>
