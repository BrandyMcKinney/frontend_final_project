<template>
  <div section id="saved" class="cartedproductsindex">
    <h1>Your Saved Charities</h1>
    <button v-on:click="randomizedCharitys()">Randomly Select Charity</button>
    <div v-for="cartedproduct in cartedproducts" v-bind:key="cartedproduct.id">
      <h2>{{ cartedproduct.charity.name }}</h2>
      <h2>{{ cartedproduct.charity.url }}</h2>
      <h2>{{ cartedproduct.charity.address }}</h2>
      <h2>{{ cartedproduct.charity.phone_number }}</h2>
      <h2>
        I donate to this charity {{ cartedproduct.frequency }}.
        <input type="text" v-model="cartedproduct.frequency" />
      </h2>
      <h2>
        This charity receives $ {{ cartedproduct.amount }}.
        <input type="integer" v-model="cartedproduct.amount" />
      </h2>
      <h2>Started giving on {{ cartedproduct.start_date }}.</h2>
      <button v-on:click="confirmNotify()">Donate</button>
      <button v-on:click="updateCartedProduct()">Edit Charity</button>
      <button v-on:click="destroyCartedProduct(cartedProduct)">Remove Charity</button>
    </div>
    <li>
      <a href="/charitysindex" class="button">Add More Charities</a>
    </li>
  </div>
</template>
<style>
#saved {
  width: 800px;
  margin: 0 auto;
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      cartedproducts: [],
      chosenCharity: "",
      newCartedProduct: {},
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
    randomizedCharitys: function () {
      var chosenNumber = Math.floor(Math.random() * this.cartedproducts.length);
      this.chosenCharity = this.cartedproducts[chosenNumber];
      console.log("this button works", this.chosenCharity);
    },
    createCartedProduct: function () {
      var params = {
        amount: this.newCartedProduct.amount,
        frequency: this.newCartedProduct.frequency,
      };
      axios.post("/carted_products", params).then((response) => {
        console.log("carted products create", response);
        // this.cartedproducts.push(response.date);
        this.newCartedProduct = {};
      });
    },
    confirmNotify: function () {
      axios.get("/carted_products/notify").then((response) => {
        console.log("donation confirmed", response);
        this.cartedproducts = response.data;
      });
    },
    updateCartedProduct: function (cartedproduct) {
      var params = {
        frequency: cartedproduct.frequency,
        amount: cartedproduct.amount,
      };
      axios
        .patch("/carted_products" + cartedproduct.id, params)
        .then((response) => {
          console.log("carted products update", response);
          this.cartedproducts = {};
        })
        .catch((error) => {
          console.log("saved charities update error", error.response);
        });
    },
  },
};
</script>
