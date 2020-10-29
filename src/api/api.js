import axios from 'axios';



export const API = axios.create({
  baseURL : 'https://api.giphy.com/v1/gifs/search?',
})
