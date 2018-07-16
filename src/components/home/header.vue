<template>
  <div class="header">
    <van-row fixed type="flex" justify="space-around">

      <!-- 扫一扫 -->
      <van-col span="10" class="sao">
        <i class="icon-saoyisao"></i>
        <!-- <img src="../../assets/sao.jpg" alt=""> -->
        <span>扫一扫</span>
      </van-col>
      <!-- 扫一扫 -->

      <!-- 搜索框 -->
      <van-col span="6" class="seek">
        <div @click="sousuo">
          <!-- 图标 -->
          <van-icon name="search" />
          <span>ins超火的连衣裙</span>
          <van-uploader :after-read="onRead">
            <van-icon name="photograph"  class="ion"/>
          </van-uploader>
        </div>
      </van-col>
      <!-- 搜索框 -->

      <van-col span="2" class="hb"><img src="../../assets/hb.jpg" alt=""></van-col>
      <van-col span="2" class="hb"><img src="../../assets/ma.jpg" alt=""></van-col>
    </van-row>
    <div></div>
  </div>
  
</template>

<script>
export default {
  data() {
    value: "";
    return {};
  },
   methods: {
    onRead(file) {
      console.log(file)
    },
    sousuo(){
      this.$router.push('https://www.jianshu.com/p/7994176fbcc4');
    }
  }
};
</script>

<style scoped lang="less">

  // @import "../../assets/icon/iconfont.css";

.header {
  width: 100%;
  height: 3.125rem /* 50/16 */;
  // border: 1px solid #000;
  background-color: #f7bbd4;
  
   div {
      height: 3.125rem /* 50/16 */;
    }
  // 扫一扫..........
  .sao {
    // border: 1px solid red;
    height: 3.125rem /* 50/16 */;
    width: 2.5rem /* 40/16 */;
    text-align: center;
    padding-top: .3125rem /* 5/16 */;
    > .icon-saoyisao {
      // width: 100%;
      // height: 50%;
      font-size: 2.25rem /* 20/16 */;
    }
    > span {
      font-size: 0.5rem /* 8/16 */;
      //  border: 1px solid #000;
    }
    // 扫一扫..........
  }
  // 搜索框 
  .seek {
    border-bottom: 1px solid #000;
    width: 15.625rem /* 250/16 */;
    height: 1.5625rem /* 25/16 */;
    line-height: 1.5625rem /* 25/16 */;
    position: relative;
    top: 0.9375rem; /* 15/16 */
    .ion{
      // position: absolute;
      right:-5rem /* 80/16 */
      }
  }
  .hb{
    //  border: 1px solid red;
    height: 3.125rem /* 50/16 */;
    width: 2.5rem /* 40/16 */;
    text-align: center;
    padding-top: .3125rem /* 5/16 */;
     > img {
      width: 100%;
      height: 80%;
     
    }
  }
}
</style>