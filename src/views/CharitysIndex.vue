<template>
  <div section id="charitiesindex" class="allcharities">
    <h1>{{ message }}</h1>
    <div v-for="charity in charitys" v-bind:key="charity.id">
      <h2>{{ charity.name }}</h2>
      <img width="300px" v-bind:src="charity.image" v-bind:alt="charity.name" />

      <button v-on:click="showCharity(charity)">More Info</button>
    </div>
    <dialog id="charity-details">
      <form method="dialog">
        <!-- <img src="images/earthGiveTo.png" alt="" /> -->
        <h1>Charity Information</h1>
        <p>Name: {{ currentCharity.name }}</p>
        <p>Website: {{ currentCharity.url }}</p>
        <p>Address:{{ currentCharity.address }}</p>
        <p>Phone Number:{{ currentCharity.phone_number }}</p>
        <button class="close-button">Close</button>
        <button class="close-button" v-on:click="addToCart(currentCharity)">Save</button>
      </form>
    </dialog>
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
.close-button {
  color: black !important;
}

#charitiesindex {
  width: 800px;
  margin: 0 auto;
}
/* #dialog {
  background-image: "images/earthGiveTo.png";
} */
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
