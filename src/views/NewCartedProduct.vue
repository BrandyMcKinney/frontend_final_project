<template>
  <div class="charity-new">
    <h1>New Ch</h1>
    <form v-on:submit.prevent="createCharity()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      Selected Charity:
      <input type="text" v-model="newCartedProduct.currentCharity" />
      Frequency
      <input type="text" v-model="newPhoto.frequency" />
      Height:
      <input type="date" v-model="newPhoto.start_date" />
      Url:
      <input type="integer" v-model="newPhoto.amount" />
      <input type="submit" value="Create" />
    </form>
  </div>
</template>

// refer to add photos new/create page cheat sheet
