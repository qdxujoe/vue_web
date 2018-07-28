<template>
  <div>
    <!-- 图片分类列表 -->
    <ul class="mui-table-view">
      <li class="mui-table-view-cell">全部</li>
      <!-- <li class="mui-table-view-cell" v-for="item in categoryList" :key="item.id">Item 2</li> -->
      <li class="mui-table-view-cell">
        <!-- <router-link :to="/'photo/list/'+item.id"> -->

        <!-- 以下是路由跳转用name跳转的写法 -->
        <!-- <router-link :to="{name:'Plist',params:{id:item.id}}"></router-link> -->

          <!-- {{item.title}} -->
          tab
        <!-- </router-link> -->
      </li>

    </ul>

    <!-- 图片列表 -->
   <!-- 
      <div class="mui-card" v-for="item in photoList" :key="item.id">
        <router-link to="'/photo/details/' +item.id">

        //:style="getstyle(item)"-》这是背景，注掉不用背景的方法，用回图片懒加载
          <div class="mui-card-header mui-card-media" :style="getstyle(item)">
             
            图片懒加载加上->v-lazy="图片地址"
            <img v-lazy=""/>  
          </div> 
        </router-link> 
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>Posted on January 18, 2016</p>
          <p style="color: #333;">这里显示文章摘要，让读者对文章内容有个粗略的概念...</p>
        </div>
      </div>
    </div>
  </div>
  -->
  <div class="mui-card">
    <router-link to="/photo/details/">
      <div class="mui-card-header mui-card-media"  style="height:40vw;background-image:url(../images/cbd.jpg)">></div>
     </router-link> 
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>Posted on January 18, 2016</p>
          <p style="color: #333;">这里显示文章摘要，让读者对文章内容有个粗略的概念...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import config from "../../js/api-comfig.js";
export default {
  // data() {
  //   return {
  //     categoryList: [],
  //     photoList: []
  //   };
  // },

    //实例身上有一个$router属性，当页面变化时，这个属性的值也会跟着变化，
    //只要页面一变化，那么久就根据新的id渲染图片列表
    // watch:{
    //   $router(){
    //     this.getphotoList(this.$router.params.id);
    //   }
    // }

  // methods: {
    //获取分类列表
    // getcategoryList() {
    //   let url = config + photoCategoryList;
    //   this.$http.get(url).then(res => {
    //     body.status == 200 && (this.categoryList = body.message);
    //   });
    // },
    // 获取图片列表
    // getphotoList() {
    //   let url = config + photoList + id;
    //   this.$http.get(url).then(res => {
    //     let body = res.body;
    //     if (body.status == 200) {
          //遍历自己本地的图片,修改每一个图片对像的url地址
                  // 第1种方法
          //  body.message.forEach(function (photo,i) {
          //   photo.img_url=`../../img(${i%20+1}).jpg`
          // })
          // this.photoList=body.message
          // }
          // })


          // 第2种方法
          // this.photoList = body.message.map(function(photo, i) {
            // photo.img_url ='url'+photo.img_url 
  //           return photo;
  //         });
  //       }
  //     });
  //   }
  // },
  //获取背景style——》后来发现用背景不太好改成图片（因为需要懒加载）
  // getstyle(item) {
  //   return"height:40vw;background-image:url(" + item.img_url + ")";
  // },


  // created() {
  //   this.getcategoryList();
  //   this.getphotoList(this.$router.params.id);
  // }
};
</script>

<style scoped lang='less'>
.mui-table-view {
  overflow: hidden;
  > li {
    float: left;
  }
}
</style>