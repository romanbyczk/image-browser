<template>
<v-main>
  <v-toolbar dark color="teal" max-height="56">
      <Search :defaultSerach="selectedTag"/>
  </v-toolbar>
  <div>
  <v-chip  v-for="tag in tags" :key="tag" class="ma-2" @click="selectTag(tag)">
      {{tag}}
    </v-chip>
  </div>
  <h1 class="ma-3">{{searchValue}}</h1>
  <Galery :images="images"/>
  <v-container>
  <v-card v-if="!images || images.length===0" color="blue" class="d-flex justify-center">
    <v-card-title >No images found</v-card-title>
  </v-card>
  </v-container>
</v-main>
</template>

<script>

import Galery from '@/components/Galery';
import Search from '@/components/Search';

import UnsplashService from "../services/UnsplashService"
import TagsService from "../services/TagsService"

export default {
  name: 'SearchResult',
  components: {
    Galery,
    Search,
  },
  props: ['searchValue'],
  data() {
    return {
      images:[],
      tags:[],
      selectedTag:""
    }
  },
  beforeMount(){
    this.search(this.searchValue);
  },
  watch:{
    $route (){
      this.search(this.searchValue);
    }
  },
  methods: {
    selectTag(tag){
      this.selectedTag=tag
      if(this.$route.params.searchValue!==tag){
        this.$router.push({ name: 'SearchResult', params: {searchValue:tag} });
      }
      this.search(this.searchValue)
    },
    search (query) {
      this.tags = [];

      UnsplashService.search(query)
      .then(data=>{
        this.images = data.results;
        this.tags = TagsService.getTags(query,this.images);
      })
    },
  }
}
</script>
