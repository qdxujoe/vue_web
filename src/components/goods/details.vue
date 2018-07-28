<template>
  <div>
    <v-title :title="title"></v-title>
      商品详情
  </div>
</template>

<script>
import title from '../../components/commpon/title.vue'
  export default {
    data(){
      return{
        title:'商品详情'
     }
    },
    components:{
      'v-title':title
    }
  }
</script>

<style scoped>

</style>