<template>
  <div class="charitysshow">
    <h2>{{ charity.name }}</h2>
    <!-- <img v-bind:src="photo.url" v-bind:alt="photo.name" /> -->
    <!-- <p>Width: {{ photo.width }}</p>
    <p>Height: {{ photo.height }}</p> -->
    <router-link to="/charitysindex">Back to all charities</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      charity: {},
    };
  },
  created: function () {
    axios.get("/charities/" + this.$route.params.id).then((response) => {
      console.log("charitys show", response);
      this.charity = response.data;
    });
  },
  methods: {},
};
</script>
