<template>
  <div class="gallery ui container">
    <h1>Gallery</h1>
    
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'imageList',
  computed:{
    ...mapGetters(['allImages'])
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
  
</style>