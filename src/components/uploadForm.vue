<template>
  <div class="upload ui container">
    <div class="dropper">
      <input type="file" @change="uploadImages">
      <span>Drag Image to Upload</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name:'uploadForm',
  methods:{
    ...mapActions(['uploadImages'])
  }
  
}
</script>


<style lang="scss" scoped>
  .dropper{
    height: 30vh;
    width: 60vw;
    border: 2px dashed #ccc;
    margin: 10% auto;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: #f6fffcc4;
    &:hover{
      background-color: #f1fffae8;
    }
    input{
      position: absolute;
      height: 100%;
      width: 100%;
      cursor: pointer;
      outline: none;
      opacity: 0;
    }
    span{
          display: flex;
          justify-content: center;
          align-items: center;
          color: lightgray;
          font-size: 2rem;
          &::before{
            content:"\f0ee";
            font: normal normal normal 14px/1 FontAwesome;
            font-size: 4rem;
            padding: 10px
          }
    }
  }
</style>