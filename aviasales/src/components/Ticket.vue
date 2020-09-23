<template>
  <div class="ticket">
    <div class="ticket__header">
      <div class="ticket__price">
        <span>{{ ticket.price | format}}</span>
        <span>Р</span>
      </div>
      <img :src="'http://pics.avs.io/99/36/' + ticket.carrier + '.png'" />
    </div>
    <div class="ticket__segments">
      <div class="ticket__segment" v-for="(segment, index) in segments" :key="index">
        <div class="ticket__info">
          <div class="ticket__subtitle">{{ segment.origin }} - {{ segment.destination }}</div>

          <div
            class="ticket__text"
          >{{ setTime(segment.date) }} - {{ arrivalTime(segment.date, segment.duration) }}</div>
        </div>
        <div class="ticket__info">
          <div class="ticket__subtitle">В пути</div>
          <div class="ticket__text">{{ durationTime( segment.duration ) }}</div>
        </div>
        <div class="ticket__info">
          <div class="ticket__subtitle">{{ segment.stops.length | declension}}</div>
          <span
            class="ticket__text"
            v-for="(stop, index) in segment.stops"
            :key="index"
          >{{ stop }}{{ index &lt; segment.stops.length - 1 ? ', ' : '' }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ticket: {
      type: Object,
      required: false,
    },
  },
  computed: {
    segments() {
      return this.ticket.segments;
    },
  },
  filters: {
    declension(count) {
      let value = Math.abs(count) % 100;
      let value1 = count % 10;
      if (count == 0) {
        return "Без пересадок";
      }
      if (value > 10 && value < 20) {
        return count + " пересадок";
      }
      if (value1 > 1 && value1 < 5) {
        return count + " пересадки";
      }
      if (value1 == 1) {
        return count + " пересадка";
      }
      return count + " пересадок";
    },
    format(n) {
      n += "";
      n = new Array(4 - (n.length % 3)).join("U") + n;
      return n.replace(/([0-9U]{3})/g, "$1 ").replace(/U/g, "");
    },
  },
  methods: {
    durationTime(mins) {
      let hours = Math.trunc(mins / 60);
      let minutes = mins % 60;
      return hours + "ч " + minutes + "м";
    },
    setTime(date) {
      let time = new Date(date);
      let hours = time.getUTCHours();
      let minutes = time.getUTCMinutes();
      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      return hours + ":" + minutes;
    },
    arrivalTime(date, duration) {
      let time = new Date(date);
      let arrivalDate = time.setMinutes(time.getUTCMinutes() + duration);
      return this.setTime(arrivalDate);
    },
  },
};
</script>

<style scoped>
.ticket {
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  width: 502px;
  margin-bottom: 20px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.5s ease;
}
.ticket:hover {
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
}
.ticket__header {
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.ticket__price {
  color: #2196f3;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
}
.ticket__segments {
  padding-top: 20px;
}
.ticket__segment {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: center;
}
.ticket__info {
  width: 30%;
}
.ticket__subtitle {
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #a0b0b9;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
.ticket__text {
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: #4a4a4a;
}
</style>