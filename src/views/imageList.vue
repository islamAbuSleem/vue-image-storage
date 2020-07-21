<template>
  <div class="gallery ui container">
    <div class="image-container" v-if="isLoggedIn">
      <img v-for="image in allImages" :src="image.link" :key="image.link"> 
    </div>
    <h2 v-else>Please login to Get started !</h2>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'imageList',
  computed:{
    ...mapGetters(['allImages','isLoggedIn'])
  },
  methods:{
    ...mapActions(['fetchImages'])
  },
  created(){
    this.fetchImages()
  }
}
</script>


<style lang="scss" scoped>
  .image-container{
    column-count: 3;
    column-gap: 0;
    img{
      max-width: 100%;
      padding: 5px;
    }
  }
</style>