<template>
    <article class="goods-list">
    <v-title :title="title"></v-title>
    <ul class="mui-table-view mui-grid-view">
      <!-- 商品详情 -->
      <!-- <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="item in list" :key="item.id"> -->
        <li class="mui-table-view-cell mui-media mui-col-xs-6">
      	<!-- <router-link :to="{ name: 'Gdetails', params: { id: item.id } }"> -->
          <router-link :to="{name:'Gdetails'}">
	        <div class="mui-card">
	          <!-- 商品图片 -->
	          <div class="mui-card-header">
	          	<!-- <img :src="item.img_url"/> -->
              <img src="../../assets/sao.jpg" alt="">
	          </div>
	          <!-- 商品描述 -->
	          <div class="mui-card-footer ">
	            <p class="mui-ellipsis-2">时间</p>
	          </div>
	          <!-- 商品价格 -->
	          <div class="mui-card-content">
	            <p class="price">
	            	<span>￥80</span>
	            	<s>￥60</s>
	            </p>
	            <p class="tip">
	            	<span>热卖中</span>
	            	<span>剩余10件</span>
	            </p>
	          </div>
	        </div>
        </router-link>
      </li>
    </ul>
    <!-- 加载更多 -->
    <button class="mui-btn mui-btn-success mui-btn-block mui-btn-outlined" ref="loadMoreBtn" @click="getList">加载更多</button>
  </article>
</template>

<script>
//  import config from '../../js/api-comfig.js';
import title from '../../components/commpon/title.vue'
  export default {
    data(){
      return{
        title:'商品列表',
          //  pageindex: 1,
        list: []
     }
    },
    // methods:{
    //   getList(){
    //     let url=config.goodsList+ '?pageindex' +this.pageindex;
    //     this.$http.get(url).then(res=>{
    //       let body=res.body;
    //       // 加载更多
    //       if(body.status==0 && body.message.lenght >0){
    //           this.list.push(...body.message);
    //           this.pageindex;
    //       }
    //       //如果是最后一页数据了，那么把按钮禁止掉
    //       else if (body.message.lenght==0) {
    //         this.$refs.loadMoreBtn.disabled=true;
    //       }          
    //     })
    //   }
    // },
    // created(){
    //   this.getList();
    // },
    components:{
      'v-title':title
    }
  }
</script>

<style lang="less">
  .goods-list {
  	.mui-card {
  		box-shadow: 0px 0px 4px rgba(0, 0, 0, .3);
  	}
  	.mui-card-header {
  		padding: 8px;
  		/*height: 100px;*/
  		img {
  			width: 100%;
  			height: 100%;
  		}
  	}
    .mui-card-content {
      text-align: center;
      .price {
        margin-bottom: 4px;
        color: #000;
        span {
          color: red;
        }
      }
      .tip {
        overflow: hidden;
        padding: 0 8px;
        font-size: 12px;
        span:first-child {
          float: left;
        }
        span:last-child {
          float: right;
        }
      }
    }
  }
</style>