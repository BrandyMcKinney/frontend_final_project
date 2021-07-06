<template>
  <div class="charity-new">
    <h1>Your Charities</h1>
    <form v-on:submit.prevent="createCharity()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      Selected Charity:
      <input type="text" v-model="newCartedProduct.currentCharity" />
      Frequency:
      <input type="text" v-model="newCartedProduct.frequency" />
      Start Date:
      <input type="date" v-model="newCartedProduct.start_date" />
      Amount:
      <input type="integer" v-model="newCartedProduct.amount" />

      <input type="submit" value="Donate" />
    </form>
    <button v-on:click="selectCharitys()">Add More Charities</button>
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
        user_id: this.newCartedProduct.name,
        frequency: this.newCartedProduct.frequency,
        start_date: this.newCartedProduct.start_date,
        amount: this.newCartedProduct.amount,
      };
      axios
        .post("/carted_products", params)
        .then((response) => {
          console.log("charitys create", response);
          this.$router.push("/newcartedproduct");
        })
        .catch((error) => {
          console.log("charitys create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
    selectCharitys: function () {
      console.log("this button works");
      this.$router.push("/charitysindex");
    },
  },
};
</script>
