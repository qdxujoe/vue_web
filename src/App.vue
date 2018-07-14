<template>
<main>
    <v-header></v-header>  
    <router-view></router-view>
    <v-footer></v-footer>
</main>
</template>

<script>
import header from './components/home/header.vue'
import footer from './components/home/footer.vue'
export default {
  // data(){
  //   return{

  //   },
    components:{
      'v-header':header,
      'v-footer':footer
    }

  }

</script>

<style>
 @import "./assets/icon/iconfont.css";
 
 #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #666;
}


</style>
