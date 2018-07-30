<template>
  <div>
    <v-swipe :list="lunbos"></v-swipe>
    <v-nav></v-nav>
  </div>
</template>

<script>
// import swipe from "./swipe.vue";
  import swipe from "../commpon/swipe.vue";
import  nav from "./nav.vue";
import config from '../../js/api-comfig.js'
  export default {
    data(){
      return{
        lunbos:[]
      }
    },
    
     methods:{
       getListT() {
      let url=config.swipe
      // let url = "/sysImg/getMainPageSysImg/0/5";
      this.$http.get(url).then(res => {
        // console.log(res);
        this.lunbos=res.data.data;
        // if (res.data.status == 200) {
          // let body=res.data.data;
          // if(body.status==200){
          //     this.lunbos=body.message.map(item=>(item.src=item.imgUrl) && item)
          // }
      });
    },
     },
   created(){
      this.getListT();
    },
    components:{
      'v-swipe':swipe,
      'v-nav':nav
    },
  }
</script>

<style scoped >

</style>