<template>
  <div id="app" class="">
    <div class="content">
      <h1 class="text" data-text="GIF searcher">GIF searcher</h1>
    </div>
    <div class="input">
      <input type="text"  v-model="searchtTerm">
    </div>
    <button class="button" @click="getGif()"> search </button>
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
    overflow: hidden;

  }

  .content .text:before{
    left: 3px;
    text-shadow: -6px 0 rgb(255, 146, 131);
    animation: glitch-1 2s 0s linear reverse infinite;

  }
  .content .text:after{
    left: -5px;
    text-shadow: 5px 0 rgb(138, 105, 218);
    animation: glitch-2 2s 0s linear reverse infinite;
  }

  @keyframes glitch-1 {
    0% {
      clip: rect(132px, auto, 100px, 0px);
    }
    5% {
      clip: rect(17px, auto, 94px, 0px);
    }
    10% {
      clip: rect(40px, auto, 166px, 0px);
    }
    15% {
      clip: rect(87px, auto, 2px, 30px);
    }
    20% {
      clip: rect(137px, auto, 61px, 30px);
    }
    25% {
      clip: rect(34px, auto, 114px, 30px);
    }
    30% {
      clip: rect(133px, auto, 74px, 30px);
    }
    35% {
      clip: rect(76px, auto, 107px, 30px);
    }
    40% {
      clip: rect(59px, auto, 130px, 30px);
    }
    45% {
      clip: rect(29px, auto, 184px, 30px);
    }
    50% {
      clip: rect(22px, auto, 167px, 30px);
    }
    55% {
      clip: rect(67px, auto, 162px, 30px);
    }
    60% {
      clip: rect(10px, auto, 105px, 30px);
    }
    65% {
      clip: rect(78px, auto, 115px, 30px);
    }
    70% {
      clip: rect(105px, auto, 13px, 30px);
    }
    75% {
      clip: rect(15px, auto, 75px, 30px);
    }
    80% {
      clip: rect(66px, auto, 39px, 30px);
    }
    85% {
      clip: rect(133px, auto, 73px, 30px);
    }
    90% {
      clip: rect(36px, auto, 128px, 0px);
    }
    95% {
      clip: rect(68px, auto, 103px, 30px);
    }
    100% {
      clip: rect(14px, auto, 100px, 0px);
    }
  }

  @keyframes glitch-2 {
    0% {
      clip: rect(160px, auto, 36px, 30px);
    }
    5% {
      clip: rect(36px, auto, 4px, 30px);
    }
    10% {
      clip: rect(85px, auto, 66px, 30px);
    }
    15% {
      clip: rect(91px, auto, 91px, 30px);
    }
    20% {
      clip: rect(148px, auto, 138px, 30px);
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
    40% {
      clip: rect(146px, auto, 34px, 0px);
    }
    45% {
      clip: rect(134px, auto, 43px, 0px);
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
