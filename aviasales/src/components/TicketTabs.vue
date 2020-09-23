<template>
  <div class="tabs">
    <div
      class="tab"
      v-for="rule in sortRules"
      :key="rule.key"
      @click="setActive(rule)"
      :class="{ tab_active: rule.active }"
    >
      <p class="tab__text" :class="{ tab__text_active: rule.active }">{{ rule.title }}</p>
    </div>
  </div>
</template>


<script>
export default {
  computed: {
    sortRules() {
      return this.$store.getters.sortRules;
    },
    ticketList() {
      return this.$store.getters.ticketList;
    },
    sortKey() {
      return this.$store.getters.selectSort.toString().split(":")[0];
    },
    sortDir() {
      return this.$store.getters.selectSort.toString().split(":")[1];
    },
    stops() {
      return this.$store.getters.stops;
    },
  },
  methods: {
    setActive(rule) {
      this.sortRules.forEach((element) => {
        element.active = false;
      });
      let key = rule.key;
      rule.active = true;
      this.$store.dispatch("changeSort", key).then(() => {
        let parseStops = JSON.parse(JSON.stringify(this.stops));
        let hasArrays = (arr) => arr.some((e) => Array.isArray(e));
        if (hasArrays(parseStops)) {
          parseStops = parseStops[0];
        }
        this.$store.dispatch("sortTickets", {
          ticketList: this.ticketList.tickets,
          dir: this.sortDir,
          key: this.sortKey,
          stops: parseStops,
        });
      });
    },
  },
};
</script>

<style scoped>
.tabs {
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  width: 100%;
  min-width: 502px;
  display: flex;
  height: 50px;
  margin-bottom: 20px;
  margin-bottom: 20px;
}
.tab {
  width: 50%;
  text-align: center;
  border: 1px solid #dfe5ec;
  box-sizing: border-box;
  background: #ffffff;
  cursor: pointer;
}
.tab_active {
  background: #2196f3;
}

.tab__text_active {
  color: #ffffff;
}
</style>