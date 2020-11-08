<template>
<v-main class="background">
  <v-container class="d-flex flex-column justify-center min-height">
    <v-row align="center" justify="center">
      <v-col>
        <h1>Image Browser</h1>
        <h3>Find your images</h3>
        <Search/>
      </v-col>
    </v-row>
  </v-container>
</v-main>
</template>

<script>

import Search from '@/components/Search';

export default {
  name: 'Home',
  components: {
    Search,
  }
}
</script>
<style scoped>
  .min-height{
    min-height: 100vh !important;
  }
  .background {
    background-image: url("../assets/background.jpg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
  }
</style>