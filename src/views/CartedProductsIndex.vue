<template>
  <!-- <section id="intro" class="main"> -->
  <section id="intro" class="main">
    <div class="spotlight">
      <div class="content">
        <header class="major">
          <br />
          <br />
          <br />
          <br />
          <h2></h2>
          <h1>Your Charities & Organizations</h1>
          <!-- <h1>Your Charities & Organizations</h1> -->
          <a href="/charitysindex" class="button">Add More Charities</a>
          <!-- <button v-on:click="showCharity(charity)">More Info</button> -->
        </header>
        <p>Need help deciding who to donate to? We can do that for you. No worries!</p>
        <button v-on:click="randomizedCharitys(cartedproducts)">Decide For Me</button>
        <dialog id="random-charity">
          <form method="dialog">
            <h1>Charity Information</h1>
            <p>The randomly selected charity is '{{ chosenCharity.name }}'!</p>
            <!-- <p>Website: {{ chosenCharity.url }}</p> -->
            <button class="close-button">Close</button>
            <button class="donate-button">Donate</button>
          </form>
        </dialog>
        <p></p>
      </div>
      <span class="image"><img src="images/earthGiveTo.png" alt="" /></span>
    </div>

    <div section id="savedcharities" class="cartedproductsindex">
      <header>
        <!-- <h1>Your Charities & Organizations</h1> -->
        <!-- <button v-on:click="showCharity(charity)">More Info</button> -->
        <!-- <button v-on:click="randomizedCharitys(cartedproducts)">Help Me Decide!</button> -->
        <dialog id="random-charity">
          <form method="dialog">
            <h1>Charity Information</h1>
            <p>The randomly selected charity is '{{ chosenCharity.name }}'!</p>
            <!-- <p>Website: {{ chosenCharity.url }}</p> -->
            <button class="close-button">Close</button>
            <button class="donate-button">Donate</button>
          </form>
        </dialog>
      </header>

      <div>
        <!-- <span>Picked: {{ picked }}</span> -->
        <div v-for="cartedproduct in cartedproducts" v-bind:key="cartedproduct.id">
          <h2>{{ cartedproduct.charity.name }}</h2>
          <h2>{{ cartedproduct.charity.url }}</h2>
          <!-- <h2>Address:{{ cartedproduct.charity.address }}</h2>
        <h2>Phone Number: {{ cartedproduct.charity.phone_number }}</h2> -->

          I will donate:

          <input type="radio" :id="`monthly${cartedproduct.id}`" value="Monthly" v-model="cartedproduct.frequency" />
          <label :for="`monthly${cartedproduct.id}`">Monthly</label>

          <input
            type="radio"
            :id="`quarterly${cartedproduct.id}`"
            value="Quarterly"
            v-model="cartedproduct.frequency"
          />
          <label :for="`quarterly${cartedproduct.id}`">Quarterly</label>

          <input type="radio" :id="`annually${cartedproduct.id}`" value="Annually" v-model="cartedproduct.frequency" />
          <label :for="`annually${cartedproduct.id}`">Annually</label>

          <span>Donation Frequency is: {{ cartedproduct.frequency }}</span>
          <!-- <h2>
          I donate to this charity:
          <input type="text" v-model="cartedproduct.frequency" />
        </h2> -->
          <h2>
            This charity receives:
            <input type="integer" v-model="cartedproduct.amount" />
          </h2>

          <h2>Began donating on {{ cartedproduct.start_date }}.</h2>
          <button v-on:click="confirmNotify()">Donate</button>
          <button v-on:click="updateCartedProduct(cartedproduct)">Edit Charity</button>
          <button v-on:click="destroyCartedProduct(cartedProduct)">Remove Charity</button>
        </div>
      </div>
      <br />
      <footer class="pagefooter">
        <section>
          <ul class="icons">
            <li>
              <a href="#" class="icon brands fa-facebook-f alt"><span class="label">Facebook</span></a>
            </li>
            <li>
              <a href="#" class="icon brands fa-instagram alt"><span class="label">Instagram</span></a>
            </li>
          </ul>
        </section>
        <p class="copyright">
          &copy; Untitled. Design:
          <a href="https://html5up.net">HTML5 UP</a>
          .
        </p>
      </footer>
    </div>
  </section>
</template>
<style>
.donate-button {
  color: black !important;
}

#savedcharities {
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
      picked: "",
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
    randomizedCharitys: function (cartedproducts) {
      var chosenNumber = Math.floor(Math.random() * this.cartedproducts.length);
      this.chosenCharity = cartedproducts[chosenNumber].charity;
      console.log("this button works", this.chosenCharity);
      document.querySelector("#random-charity").showModal();
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
        amount: cartedproduct.charity.amount,
      };
      axios
        .patch("/carted_products" + cartedproduct.charity.id, params)
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
