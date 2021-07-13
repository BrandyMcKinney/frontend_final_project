<template>
  <div section id="savedcharities" class="cartedproductsindex">
    <header>
      <h1>Your Charities & Organizations</h1>
      <!-- <button v-on:click="showCharity(charity)">More Info</button> -->
      <button v-on:click="randomizedCharitys(cartedproducts)">Randomly Select Charity</button>
      <dialog id="random-charity">
        <form method="dialog">
          <h1>Charity Information</h1>
          <p>Name: {{ chosenCharity.name }}</p>
          <!-- <p>Website: {{ currentCharity.url }}</p> -->
          <button class="close-button">Close</button>
        </form>
      </dialog>
    </header>
    <p>
      <a href="/charitysindex" class="button">Add More Charities</a>
    </p>
    <div>
      <div v-for="cartedproduct in cartedproducts" v-bind:key="cartedproduct.id">
        <h2>{{ cartedproduct.charity.name }}</h2>
        <h2>{{ cartedproduct.charity.url }}</h2>
        <!-- <h2>Address:{{ cartedproduct.charity.address }}</h2>
        <h2>Phone Number: {{ cartedproduct.charity.phone_number }}</h2> -->

        I donate to this charity:
        <br />
        <input type="radio" id="timeframe" value="Monthly" v-model="cartedproduct.frequency" />
        <label for="monthly">Monthly</label>

        <input type="radio" id="timeframe" value="Quarterly" v-model="cartedproduct.frequency" />
        <label for="quarterly">Quarterly</label>

        <input type="radio" id="timeframe" value="Annually" v-model="cartedproduct.frequency" />
        <label for="annually">Annually</label>
        <br />
        <span>Donation Frequency: {{ cartedproduct.frequency }}</span>
        <!-- <h2>
          I donate to this charity:
          <input type="text" v-model="cartedproduct.frequency" />
        </h2> -->
        <h2>
          This charity receives:
          <input type="integer" v-model="cartedproduct.amount" />
        </h2>

        <h2>Started giving on {{ cartedproduct.start_date }}.</h2>
        <button v-on:click="confirmNotify()">Donate</button>
        <button v-on:click="updateCartedProduct(cartedproduct)">Edit Charity</button>
        <button v-on:click="destroyCartedProduct(cartedProduct)">Remove Charity</button>
      </div>
    </div>

    <footer class="pagefooter">
      <section>
        <h2>Contact Us</h2>
        <dl class="alt">
          <dt>Address</dt>
          <dd>1234 Grey Calico Lane &bull; Baltimore, MD 21213 &bull; USA</dd>
          <dt>Phone</dt>
          <dd>(000) 000-0000 x 0000</dd>
          <dt>Email</dt>
          <dd><a href="#">giveto@test.com</a></dd>
        </dl>
        <ul class="icons">
          <li>
            <a href="#" class="icon brands fa-twitter alt"><span class="label">Twitter</span></a>
          </li>
          <li>
            <a href="#" class="icon brands fa-github alt"><span class="label">GitHub</span></a>
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
</template>
<style>
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
