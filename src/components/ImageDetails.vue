<template>
  <v-card>
    <v-card-title>
      <v-avatar class="ma-2">
        <img :src="image.user.profile_image.large" :alt="image.user.first_name"/>
      </v-avatar>
      {{userName}}
    </v-card-title>
    <v-card-subtitle v-show="image.user.instagram_username">
      {{"@"+image.user.instagram_username}}
    </v-card-subtitle>
    <v-img class="v-img"
      lazy-src="https://picsum.photos/id/11/10/6"
      :alt="image.alt_description"
      :src="image.urls.full"/>
    <v-card-text v-show="image.user.location" class="mt-2">
      {{image.user.location}}
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    props: ['image'],
    computed: {
      userName: function () {
        const firstName = this.image.user.first_name || ""
        const lastName = this.image.user.last_name || ""

        return `${firstName} ${lastName}`
      }
    }
  }
</script>
