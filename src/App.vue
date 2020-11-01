<template>
  <div id="app">
    <div class="content">
      <h1 class="text" data-text="GIF searcher">GIF searcher</h1>
    </div>
    <div class="input">
      <input class="block mx-auto" type="text"  v-model="searchtTerm">
      <div class="button inline-block my-10 cursor-pointer" @click="getGif()">
      <div class="w-16  ">
        search
      </div>
     </div>
    </div>

    <div class="flex justify-center items-center" id="result">
      <div class="w-full flex justify-center items-start flex-wrap" >
        <giphyitems v-for="gif in gifs" :gif="gif" :loading="loading" :key="gif.images.original.url"></giphyitems>
      </div>
    </div>
  </div>


</template>

<script>
import { API } from '../src/api/api.js';
import axios from 'axios';

import giphyitems from './components/GiphyItems.vue';
export default {
  data(){
    return{
      searchtTerm:'',
      api_key: 'LjIgaPkpKiWTcXZVbS5HAVgcqBhsRiYD',
      limit: 40,
      gifs: [],
      loading: false,

    }
  },

  mounted(){
     document.body.style.background = 'black';
  },

  components:{
    giphyitems
  },



  methods:{



    getGif(){

      // this.loading = true;
      API.interceptors.request.use(req => {
        this.loading = true;
        return req;
      });

      API.get(`&api_key=${this.api_key}&q=${
        this.searchtTerm}&limit=${this.limit}`)
        .then(
          res => { this.buildGifs(res);
          }

        ).catch(error => {
          // handle the error
        })
        .finally(setTimeout(() => {
          this.loading= false;
        }, 2000));





      },


      buildGifs(res){
        this.gifs = res.data.data
      }
    }
  }

  </script>

  <style>

  *:focus {
      outline: none;
  }

  .input{

    margin: 10px auto;
    text-align: center;
  }



  input{
    background-color: #00d7c3;
  }

  .button {
    /* background-color: transparent; */
    color: #00d7c3;
    padding: 5px 20px;
    border: 2px solid #00d7c3;
    border-radius: 50px;
  }

  .button:hover {

  }

  .content{
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .content .text{
    position:  relative;
    color: rgb(5, 5, 5);
    font-weight: 700;
    font-size: 100px;
    letter-spacing: 10px;
  }

  .content .text:before, .content .text:after{
    position: absolute;
    content: attr(data-text);
    /* padding: 30px; */
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    /* overflow: hidden; */

  }

  .content .text:before{
    text-shadow: -3px 3px #00d7c3;
    animation: glitch-1 2s 0s linear infinite;
  }
  .content .text:after{

    text-shadow: 0px -1px rgb(255, 255, 255);
    /* animation: glitch-2 4s 0s linear reverse infinite; */
  }

  @keyframes glitch-1 {
    0% {
      clip: rect(1px, auto, 10px, 0px);
    }



    85% {
      clip: rect(0px, auto, 300px, 0px);
    }

    100% {
      clip: rect(14px, auto, 100px, 0px);
    }
  }

  @keyframes glitch-2 {
    0% {
      clip: rect(160px, auto, 36px, 30px);
    }


    15% {
      clip: rect(91px, auto, 91px, 30px);
    }

    25% {
      clip: rect(38px, auto, 122px, 30px);
    }
    30% {
      clip: rect(69px, auto, 54px, 0px);
    }
    35% {
      clip: rect(98px, auto, 71px, 30px);
    }
    50% {
      clip: rect(102px, auto, 80px, 30px);
    }
    55% {
      clip: rect(119px, auto, 44px, 0px);
    }
    60% {
      clip: rect(106px, auto, 99px, 0px);
    }
    65% {
      clip: rect(141px, auto, 74px, 0px);
    }
    70% {
      clip: rect(20px, auto, 78px, 30px);
    }
    75% {
      clip: rect(133px, auto, 79px, 30px);
    }
    80% {
      clip: rect(78px, auto, 52px, 30px);
    }
    85% {
      clip: rect(35px, auto, 39px, 0px);
    }
    90% {
      clip: rect(67px, auto, 70px, 0px);
    }
    95% {
      clip: rect(71px, auto, 103px, 0px);
    }
    100% {
      clip: rect(83px, auto, 40px, 0px);
    }
  }







  </style>
