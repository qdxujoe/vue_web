<template>
  <div class="swipe">
    <mt-swipe :auto="4000">
      <mt-swipe-item  v-for="item in list" :key="item.id">
       <!-- <a :href="item.url"> -->
          <img style="width: 100%;height:100%" :src="item.imgUrl" alt="" @click="dIncident(item.commodityId,item.userId)">
       <!-- </a> -->
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import config from '../../js/api-comfig.js'
export default {
  data() {
    return {
      // 轮播图数据
      list: []
    };
  },
  methods: {
    //获取数据
    getList() {
      let url=config.swipe;
      // let url = "/sysImg/getMainPageSysImg/0/5";
      this.$http.get(url).then(res => {
        // console.log(res);
        // if (res.data.status == 200) {
          this.list = res.data.data;
      });
    },
    //点击事件
  dIncident(key,userId){
    var user=userId
    if(user=="undefined"){
      user=null;
    }  
    this.$router.push({name:'详情页',params:{id:key,userId:user}})
  }
  },
  created() {
    this.getList();
  }
};
</script>

<style scoped lang="less">
.swipe{
  // border: 1px solid red;
  width: 100%;
  height:12.5rem /* 200/16 */;
  margin-top: .125rem /* 2/16 */;
}
</style>