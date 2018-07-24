<template>
  <div class="details">
    		<v-title :title="title"></v-title>
        新闻详情
        <v-Ccomment :id='id'></v-Ccomment>
  </div>
</template>

<script>
import config from '../../js/api-comfig.js';
import title from '../commpon/title.vue';
import Ccomment from '../../components/commpon/comment.vue'
  export default {
    data(){
      return{
        // Details:{},
        title:'新闻详情',
        id:this.$router.params.id
      }
    },
    	components:{
      'v-title':title,
      'v-Ccomment':Ccomment
    },
    methods:{
      // 根据id获取对应的新闻详情
      getDetails(){
        // let url=config.newsDetails +this.$router.params.id ;
        // this.$http.get(url).then(res=>{
        //   console.log(res);
        //   res.body.status ===200 && (this.Details=res.body.message[0]);
          
        // })
      }
    },
    created(){
    //  this.getDetails(); 
      
    }
  }
</script>

<style scoped lang="less">
 
</style>