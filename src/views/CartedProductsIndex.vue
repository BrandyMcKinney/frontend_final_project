<template>
  <div class="cartedproductsindex">
    <h1>Saved Charities</h1>
    <div v-for="cartedproducts in cartedproducts" v-bind:key="cartedproducts.id">
      <h2>{{ cartedproducts.id }}</h2>
      <button v-on:click="selectCharitys()">Add More Charities</button>

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
