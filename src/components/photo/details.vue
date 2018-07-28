<template>
  <div>
    <!-- 图片详情页 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <h3>标题</h3>
          <p>Posted on January 18, 2016</p>
        </div>

      </div>
      <div>
        <ul class="mui-table-view mui-grid-view">
          <li class="mui-table-view-cell mui-media mui-col-xs-4">
            <a href="#">
              <img class="mui-media-object" src="../../assets/logo.png">
              <div class="mui-media-body">幸福就是可以一起睡觉</div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4">
            <a href="#">
              <img class="mui-media-object" src="../../assets/logo.png">
              <div class="mui-media-body">幸福就是可以一起睡觉</div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4">
            <a href="#">
              <img class="mui-media-object" src="../../assets/logo.png">
              <div class="mui-media-body">幸福就是可以一起睡觉</div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4">
            <a href="#">
              <img class="mui-media-object" src="../../assets/logo.png">
              <div class="mui-media-body">幸福就是可以一起睡觉</div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4">
            <a href="#">
              <img class="mui-media-object" src="../../assets/logo.png">
              <div class="mui-media-body">幸福就是可以一起睡觉</div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4">
            <a href="#">
              <img class="mui-media-object" src="../../assets/logo.png">
              <div class="mui-media-body">幸福就是可以一起睡觉</div>
            </a>
          </li>
        </ul>

      </div>
      <div class="mui-card-footer">文章</div>
    </div>
  </div>
</template>

<script>
import config from "../../js/api-comfig.js";
export default {
  data() {
    return {
      info: {},
      hums: []
    };
  },
  methods: {
    //获取数据
    getInfo() {
      let url = comfig.url + this.$router.params.id;
      this.$http.get(url).then(res => {
        let body = res.body;
        body.status == 200 && (this.info = body.message[0]);
      });
    },
    //获取缩略图
    getHums() {
      let url = comfig.url + this.$router.params.id;
      this.$http.get(url).then(res => {
        let body = res.body;
        if(body.status==0){
          //遍历图片列表，修改每一个图片对象的img_url地址
          this.hums=body.message.map(function (photo,i) {
            photo.src=url+photo.src;
            return photo;
          })
        }
      });
    }
  },
  created(){
    this.getInfo();
    this.getHums();
  }
};
</script>

<style scoped>
</style>