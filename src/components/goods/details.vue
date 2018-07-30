<template>
  <article class="goods-detail">
    <!-- 标题 -->
    <v-title :title="title"></v-title>
    <!-- 轮播图 -->
    <v-swipe :list="lunbos"></v-swipe>
  	<!-- 商品购买 -->
    <div class="mui-card">
      <!-- 名称 -->
      <div class="mui-card-header">标题</div>
      <!-- 价格 -->
      <div class="mui-card-content mui-card-content-inner">
        <!-- <div class="price"> <s>市场价:￥{{ goods.market_price }}</s> <span>销售价: </span> <em>￥{{ goods.sell_price }}</em> </div> -->
         <div class="price"> <s>市场价:￥80</s> <span>销售价: </span> <em>￥100</em> </div>
        <div> <span>购买数量：</span>
          <!--数字输入框 -->
          <v-numbox :initVal="total" @change="upTotal"></v-numbox>
        </div>
      </div>
      <!-- 按钮 -->
      <div class="mui-card-footer">
      	<router-link to="/shopcart/list" class="mui-btn mui-btn-success mui-btn-block mui-btn-outlined">结算</router-link>
        <div></div>
        <button type="button" class="mui-btn mui-btn-success mui-btn-block mui-btn-outlined" @click="addShopcart">加入购物车</button>
      </div>
    </div>

		<!-- 评论与介绍 -->
		<div class="mui-card">
			<!-- 选项卡 -->
		  <mt-navbar v-model="selectedTab">
			  <mt-tab-item id="v-comment">商品评论</mt-tab-item>
			  <mt-tab-item id="v-info">图文介绍</mt-tab-item>
			</mt-navbar>
			<!-- 显示内容，需要传入id，需要根据is值来控制组件的切换 -->
		  <component :id="id" :is="selectedTab"></component>
		</div>

    <!-- 评论与介绍 -->
		<!-- <div class="mui-card">
		  <mt-navbar v-model="selectedTab">
			  <mt-tab-item id="comment">商品评论</mt-tab-item>
			  <mt-tab-item id="info">图文介绍</mt-tab-item>
			</mt-navbar>
		  <mt-tab-container v-model="selectedTab">
			  <mt-tab-container-item id="comment">
			    <v-comment :id="id"></v-comment>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="info">
			    <v-info :id="id"></v-info>
			  </mt-tab-container-item>
			</mt-tab-container>
		</div> -->

  </article>
</template>

<script>
import title from '../../components/commpon/title.vue';
import swipe from '../commpon/swipe.vue'
import config from '../../js/api-comfig.js'
  export default {
    data(){
      return{
        title:'商品详情',
        lunbos:[]
     }
    },
    methods:{
      //获取轮播图
      getLunbos(){
        // let url=config.photoHums+this.$route.params.id;
        let url=config.swipe;
        this.$http.get(url).then(res=>{
          console.log(res);
          this.lunbos=res.data.data;
          // let body=res.data.data;
          // if(body.status==200){
            //以下是图片url不全，所以要给每个url全
            // this.lunbos=body.message.map(item=>{
            //   item.src=config.swipe +item.imgUrl;
            //   return item;
            // })
          // }
          
          // let body=res.body;
          // body.status==0 && (this.lunbos=body.message);
        })
      }
    },
    created(){
      this.getLunbos();
    },
    components:{ 
      'v-title':title,
      'v-swipe':swipe
    }
  }
</script>
<style lang="less">
  .goods-detail {
    .mui-card-content {
      .price {
        color: rgb(51, 51, 51);
        margin-bottom: 4px;
        span {
          margin-left: 6px;
        }
        em {
          font-size: 18px;
          color: red;
        }
      }
    }
    .mui-card-footer {
      div {
        width: 100%;
      }
      .mui-btn {
        padding: 8px 0;
        font-size: 16px;
      }
    }
    .mint-tab-item {
    	&.is-selected {
    		margin-bottom: 0;
    		border-bottom: 3px solid #2ce094;
    		color: #2ce094;
    	}
    }
    .mint-tab-item-label {
    	font-size: 18px;
    	color: #2ce094;
    }
  }
</style>