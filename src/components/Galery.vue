<template>
  <v-container>
      <v-row>
        <v-col v-for="(image,i) in images" :key="i" @click="onClick(image)" cols="12" sm="4">
          <Thumbnail :image="image"/>
        </v-col>
      </v-row>
    <v-dialog v-model="dialog" width="700">
      <ImageDetails :image="selectedImage"/>
    </v-dialog>
  </v-container>
</template>

<script>
import Thumbnail from './Thumbnail';
import ImageDetails from './ImageDetails';


export default {
  components: {
    Thumbnail,
    ImageDetails,
  },
  data() {
    return {
      dialog:false,
      selectedImage:{},
    }
  },

  props: ['images'],
  methods: {
    onClick: function(image) {
      this.dialog = true;
      this.selectedImage = image;
    },
  }
};
</script>
