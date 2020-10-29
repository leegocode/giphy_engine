<template lang="html">
  <div class="">

  <skeleton-box
  class="flex w-48 px-2 py-2 mx-2 my-2 bg-black relative "
       v-if="loading"
        width="100px"
      />
  <div v-else class="flex w-48 px-2 py-2 mx-2 my-2 bg-black relative " @mouseover="hover = true" @mouseleave="hover = false" >


      <div class="w-full " >
        <img :src="gif.images.original.url" class="w-full" >
        <transition-group name="fade">
        <div v-if="gif.user"  v-show="hover" class="absolute bottom-0 left-0 flex  justify-between w-full bg-gray-200 text-black " :key="gif.user.profile_url" >
          <div class="" >
            <a :href="gif.user.profile_url" class="flex items-center" >
              <img :src="gif.user.avatar_url" class="w-10" >
              <div class="break-all flex-1 ml-2">
                {{ gif.user.display_name }}
              </div>
            </a>
          </div>
        </div>
      </transition-group>
     </div>
  </div>
  </div>
</template>

<script>
import SkeletonBox from './skelton.vue';

export default {
  components: {
    SkeletonBox,
  },
  props: {
    gif: Object,
    loading: {
      default: false,
      type: Boolean,
    },
  },

  data(){
    return{
      hover: false,
    }
  },

}
</script>

<style lang="css" scoped>
.fade-enter-active, .fade-leave-active {
   transition: all .3s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(20px);

}

</style>
