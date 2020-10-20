<template>
  <div id="app">
    <div class="input">
      <h1 class="">GIF searcher</h1>
      <input type="text"  v-model="searchtTerm">
    </div>
    <button class="button" @click="getGif()"> search </button>
    <div class="gif-container">
    <img v-for="gif in gifs" :src="gif" :key="gif.id">
    </div>

  </div>
</template>

<script>
import { API } from '../src/api/api.js';
export default {
  data(){
    return{
      searchtTerm:'',
      api_key: 'LjIgaPkpKiWTcXZVbS5HAVgcqBhsRiYD',
      limit: 10,
      gifs: []
    }
  },
  methods:{
    getGif(){
      API.get(`&api_key=${this.api_key}&q=${
        this.searchtTerm}&limit=${this.limit}`)
        .then(res => { this.buildGifs(res);
        })
    },
    buildGifs(res){
      this.gifs = res.data.data
      .map(gif => gif.id)
      .map(gifId =>{
        return `https://media.giphy.com/media/${gifId}/giphy.gif`;
      })
    }
  }

}
</script>

<style>

.input{
  display: block;
  margin: 10px auto;
  text-align: center;
}

input{
  background-color: #b3afaf;
}

.button {
  background-color: rgb(0, 172, 0);
  color: white;
  padding: 5px 20px;
  border: none;
  display: block;
  margin: 0 auto;
}

.button:hover {
  background-color: rgb(200, 207, 200);
}
.gif-container {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
