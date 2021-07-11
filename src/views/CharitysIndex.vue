<template>
  <div section id="charitiesindex" class="allcharities">
    <h1>{{ message }}</h1>
    <div v-for="charity in charitys" v-bind:key="charity.id">
      <h2>{{ charity.name }}</h2>

      <!-- <p>Website:{{ charity.url }}</p> -->
      <!-- <p>Address:{{ charity.address }}</p>
      <p>Phone Number:{{ charity.phone_number }}</p> -->
      <button v-on:click="showCharity(charity)">More Info</button>
    </div>
    <dialog id="charity-details">
      <form method="dialog">
        <h1>Charity Information</h1>
        <p>Name: {{ currentCharity.name }}</p>
        <p>Website: {{ currentCharity.url }}"></p>
        <p>Address:{{ currentCharity.address }}</p>
        <p>Phone Number:{{ currentCharity.phone_number }}</p>
        <button class="close-button">Close</button>
        <button class="close-button" v-on:click="addToCart(currentCharity)">Save</button>
      </form>
    </dialog>
  </div>
</template>

<style>
.close-button {
  color: black !important;
}

#charitiesindex {
  width: 800px;
  margin: 0 auto;
}
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Charity List",
      charitys: [],
      currentCharity: {},
    };
  },
  created: function () {
    this.indexCharitys();
  },

  methods: {
    indexCharitys: function () {
      axios.get("/charities").then((response) => {
        console.log("charities index", response);
        this.charitys = response.data;
      });
    },
    showCharity: function (charity) {
      this.currentCharity = charity;
      console.log("charity-show");
      document.querySelector("#charity-details").showModal();
    },
    addToCart: function () {
      var params = {
        charity_id: this.currentCharity.id,
      };
      axios.post("/carted_products", params).then((response) => {
        console.log("this button works", response);
        this.$router.push("/cartedproductsindex");
      });
    },
  },
};
</script>
