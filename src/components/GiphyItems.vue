<template lang="html">
  <div class="flex w-48 px-2 py-2 mx-2 my-2 bg-black relative " @mouseover="hover = true" @mouseleave="hover = false" >
    <!-- <transition-group name="fade"> -->
      <div class="w-full " >
        <img :src="gif.images.original.url" class="w-full" >
        <div v-if="gif.user"  class="absolute bottom-0 left-0 flex  justify-between bg-gray-300 w-full ">
          <div class="" >
            <a :href="gif.user.profile_url" class="flex" v-if="hover">
              <img :src="gif.user.avatar_url" class="w-10" >
              <div class="break-all flex-1 ml-2">
                {{ gif.user.display_name }}
              </div>
            </a>
          </div>
        </div>
     </div>
  <!-- </transition-group> -->
  </div>

</template>

<script>
export default {
  data(){
    return{
      hover: false,
    }
  },
  props:['gif'],
}
</script>

<style lang="css" scoped>
</style>
