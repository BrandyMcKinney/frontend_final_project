<template>
  <div class="cartedproductsindex">
    <h1>Your Saved Charities</h1>
    <button v-on:click="selectCharitys()">Randomly Select Charity</button>

    <div v-for="cartedproduct in cartedproducts" v-bind:key="cartedproduct.id">
      <!-- <h2>{{ cartedproduct.charity }}</h2> -->
      <h2>{{ cartedproduct.charity.name }}</h2>
      <h2>{{ cartedproduct.charity.url }}</h2>
      <h2>{{ cartedproduct.charity.address }}</h2>
      <h2>{{ cartedproduct.charity.phone_number }}</h2>
      <h2>I give to this charity {{ cartedproduct.frequency }}.</h2>
      <h2>This charity receives $ {{ cartedproduct.amount }}.</h2>
      <h2>Started giving on {{ cartedproduct.start_date }}.</h2>
      <button v-on:click="selectCharitys()">Donate</button>

      <!-- <img v-bind:src="charity.url" v-bind:alt="charity.name" /> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      cartedproducts: [],
    };
  },
  created: function () {
    this.indexCartedProducts();
  },
  methods: {
    indexCartedProducts: function () {
      axios.get("/carted_products").then((response) => {
        console.log("your charities", response);
        this.cartedproducts = response.data;
        // this.$router.push("/newcartedproduct");
      });
    },
  },
};
</script>

// add update and destroy to saved charities (update with date etc, and option to delete)
