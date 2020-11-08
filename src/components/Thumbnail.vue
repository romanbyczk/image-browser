<template>
  <v-hover v-slot="{ hover }">
    <v-card :elevation="hover ? 12 : 2" :max-width="250" >
      <v-img
        lazy-src="https://picsum.photos/id/11/10/6"
        max-height="250"
        max-width="250"
        :src="image.urls.full"/>
      </v-card>
  </v-hover>
</template>

<script>
  export default {
    props: ['image'],
  }
</script>
<style scoped>
  .v-card {
    cursor: pointer;
  }
</style>