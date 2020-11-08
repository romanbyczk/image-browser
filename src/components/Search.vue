<template>
    <v-autocomplete
      v-model="model"
      @input="onChange(model)"
      @keydown.enter="onChange(searchValue)"
      @update:list-index="selectPrompt"
      :search-input.sync="searchValue"
      :items="prompts"
      :hide-no-data="!startSearch"
      color="blue"
      placeholder="Search photos"
      prepend-icon="mdi-database-search">
    </v-autocomplete>
</template>
<script>

import  PromptsService  from '@/services/PromptsService'

export default {
  data: () => ({
    prompts: [],
    searchValue: null,
    model: null,
    startSearch:false,
    selectedPrompt:undefined
  }),
  props:["defaultSerach"],
  watch: {
    searchValue (val) {
     this.getPrompts(val)
    }
  },
  methods: {
    getPrompts(val) {
      this.prompts = [];
      this.startSearch = val && val.length>2;

      if(this.startSearch){
        PromptsService.getPrompts(val)
        .then(resp=>{
          this.prompts = resp.results.data;
        })
      }
    },

    onChange(value){
      this.prompts = [];
      const searchValue = this.selectedPrompt || value

      if(this.$route.params.searchValue!==searchValue){
        this.$router.push({ name: 'SearchResult', params:  { searchValue } });
      }
    },

    selectPrompt(index) {
      this.selectedPrompt = this.prompts[index];
    },

  }
}
</script>