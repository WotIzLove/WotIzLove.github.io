<template>
  <div class="filter">
    <div class="filter__title">
      <p>Количество пересадок</p>
    </div>
    <div class="filter__items">
      <div :class="{filter__item_active: filters.all.status}" class="filter__item">
        <input
          class="filter__checkbox"
          type="checkbox"
          :id="filters.all.id"
          v-model="filters.all.status"
          @change="resetSort"
        />
        <img class="filter__image" v-if="filters.all.status" src="../assets/checkbox-active.svg" />
        <img class="filter__image filter__image_active" v-else src="../assets/checkbox.svg" />
        <label :for="filters.all.id" class="filter__label">{{ filters.all.sectionText }}</label>
      </div>
      <div
        class="filter__item"
        :class="{filter__item_active: section.status}"
        v-for="section in filters.sections"
        :key="section.id"
      >
        <input
          class="filter__checkbox"
          type="checkbox"
          :id="section.id"
          v-model="section.status"
          @change="sortTicketByStops"
        />
        <img class="filter__image" v-if="section.status" src="../assets/checkbox-active.svg" />
        <img class="filter__image filter__image_active" v-else src="../assets/checkbox.svg" />
        <label :for="section.id" class="filter__label">{{ section.sectionText }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    ticketList() {
      return this.$store.getters.ticketList;
    },
    sortKey() {
      return this.$store.getters.selectSort.toString().split(":")[0];
    },
    sortDir() {
      return this.$store.getters.selectSort.toString().split(":")[1];
    },
    filters() {
      return this.$store.getters.filters;
    },
    sectionsWithAll() {
      return this.$store.getters.sectionsWithAll;
    },
    stops() {
      return this.$store.getters.stops;
    },
  },
  watch: {
    "filters.all.status"(val) {
      if (val) {
        this.filters.sections.forEach((el) => (el.status = false));
      }
    },
    "filters.sections": {
      deep: true,
      handler(val) {
        if (val.every((el) => el.status)) {
          this.filters.all.status = true;
        } else if (val.some((el) => el.status)) {
          this.filters.all.status = false;
        }
      },
    },
  },
  methods: {
    resetSort() {
      let parseStops = JSON.parse(JSON.stringify(this.stops[0]));
      this.$store.dispatch("sortTickets", {
        ticketList: this.ticketList.tickets,
        dir: this.sortDir,
        key: this.sortKey,
        stops: parseStops,
      });
    },
    sortTicketByStops() {
      this.$store.dispatch("sortTickets", {
        ticketList: this.ticketList.tickets,
        dir: this.sortDir,
        key: this.sortKey,
        stops: this.stops,
      });
    },
  },
};
</script>

<style scoped>
.filter {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  height: 100%;
  min-width: 252px;
  margin-right: 20px;
  padding-bottom: 20px;
}
.filter__item {
  padding: 10px 20px;
  position: relative;
  display: flex;
  align-items: center;
}
.filter__item_active {
  background: #f1fcff;
}
.filter__title {
  padding: 20px;
  padding-bottom: 0;
  color: #4a4a4a;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
}

.filter__checkbox {
  border: 1px solid #9abbce;
  box-sizing: border-box;
  border-radius: 2px;
  position: absolute;
  width: 20px;
  height: 20px;
  left: 16px;
  opacity: 0;
  cursor: pointer;
}

.filter__image {
  cursor: pointer;
  margin-right: 10px;
}

.filter__label {
  color: #4a4a4a;
  font-size: 13px;
  line-height: 19px;
  cursor: pointer;
}
</style>