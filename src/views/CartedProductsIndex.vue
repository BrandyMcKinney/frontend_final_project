<template>
  <div class="cartedproductsindex">
    <h1>Your Saved Charities</h1>
    <button v-on:click="randomizedCharitys()">Randomly Select Charity</button>

    <div v-for="cartedproduct in cartedproducts" v-bind:key="cartedproduct.id">
      <!-- <h2>{{ cartedproduct.charity }}</h2> -->
      <h2>{{ cartedproduct.charity.name }}</h2>
      <h2>{{ cartedproduct.charity.url }}</h2>
      <h2>{{ cartedproduct.charity.address }}</h2>
      <h2>{{ cartedproduct.charity.phone_number }}</h2>
      <h2>I give to this charity {{ cartedproduct.frequency }}.</h2>
      <h2>This charity receives $ {{ cartedproduct.amount }}.</h2>
      <h2>Started giving on {{ cartedproduct.start_date }}.</h2>
      <button v-on:click="donateButton()">Donate</button>
      <!-- <button v-on:click="destroyCartedProduct(cartedProduct)">Remove Charity</button> -->

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
      chosenCharity: "",
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
    // destroyCartedProduct: function (cartedProduct) {
    //   console.log("destroy recipe", cartedProduct);
    //   axios.delete("http://localhost:3000/carted_products/" + cartedProduct.id).then((response) => {
    //     console.log("Destroy success", response.data);
    //     var index = this.cartedproduct.indexOf(cartedProduct);
    //     this.cartedProduct.splice(index, 1);
    //   });
    // },

    randomizedCharitys: function () {
      var chosenNumber = Math.floor(Math.random() * this.cartedproducts.length);
      this.chosenCharity = this.cartedproducts[chosenNumber];
      console.log("this button works", this.chosenCharity);
    },
  },
};
</script>

// add update and destroy to saved charities (update with date etc, and option to delete) // if condition to start
adding charities if the user has a blank saved charity list, route to list of all charities // Next page to prevent
endless scroll 10 per page
