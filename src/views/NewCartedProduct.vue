<template>
  <div class="newcartedproduct">
    <h1>Add Charities</h1>
    <form v-on:submit.prevent="createCharity()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      Selected Charity:
      <input type="integer" v-model="newCartedProduct.charity_id" />
      Frequency of Donation:
      <input type="text" v-model="newCartedProduct.frequency" />
      Start Date of Donation:
      <input type="date" v-model="newCartedProduct.start_date" />
      Amount of Donation:
      <input type="integer" v-model="newCartedProduct.amount" />

      <input type="submit" value="Donate" />
    </form>
    <button v-on:click="selectCharitys()">Add To Saved Charities</button>
  </div>
</template>

// refer to add photos new/create page cheat sheet
<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newCartedProduct: {},
      errors: [],
    };
  },
  created: function () {},
  methods: {
    createCharity: function () {
      var params = {
        charity_id: this.newCartedProduct.charity_id,
        frequency: this.newCartedProduct.frequency,
        start_date: this.newCartedProduct.start_date,
        amount: this.newCartedProduct.amount,
      };
      axios
        .post("/carted_products", params)
        .then((response) => {
          console.log("add to charities", response);
          // this.$router.push("/cartedproductsindex");
          this.cartedproduct.push(response.data);
          this.newCartedProduct = " ";
        })
        .catch((error) => {
          console.log("charitys create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
