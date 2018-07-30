<template>
<!-- 公共轮播图 -->
  <div class="swipe">
    <mt-swipe :auto="4000">
      <mt-swipe-item  v-for="item in list" :key="item.id">
       <!-- <a :href="item.url"> -->
          <img style="width: 100%;height:100%" :src="item.imgUrl" alt="">
       <!-- </a> -->
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
// import config from '../../js/api-comfig.js'
export default {
 props:['list']
};
</script>

<style scoped lang="less">
.swipe{
  border: 1px solid red;
  width: 100%;
  height:12.5rem /* 200/16 */;
  margin-top: .125rem /* 2/16 */;
}
</style>