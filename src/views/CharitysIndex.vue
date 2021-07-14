<template>
  <body>
    <div id="wrapper">
      <section class="first.main.special">
        <header class="major">
          <br />
          <br />
          <br />
          <p>
            You're here because you care.
            <br />
            Human rights? Animal activism? Or concerns about the planet? Find causes that spark your passion!
          </p>
        </header>

        <section id="charitiesindex" class="allcharities">
          <h1>{{ message }}</h1>
          <div v-for="charity in charitys" v-bind:key="charity.id">
            <h2>{{ charity.name }}</h2>
            <img width="300px" v-bind:src="charity.image" v-bind:alt="charity.name" />
            <!-- <p>{{ charity.description }}</p> -->
            <p>
              Sed lorem ipsum dolor sit amet nullam consequat feugiat consequat magna adipiscing magna etiam amet
              veroeros. Lorem ipsum dolor tempus sit cursus. Tempus nisl et nullam lorem ipsum dolor sit amet aliquam.
            </p>
            <ul class="actions">
              <li><button v-on:click="showCharity(charity)">More Info</button></li>
            </ul>
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
        </section>
        <footer class="major">
          <ul class="icons">
            <li>
              <a href="#" class="icon brands fa-facebook-f alt"><span class="label">Facebook</span></a>
            </li>
            <li>
              <a href="#" class="icon brands fa-instagram alt"><span class="label">Instagram</span></a>
            </li>
          </ul>
        </footer>
      </section>
    </div>
  </body>
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
      message: "LIST OF CHARITIES",
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
