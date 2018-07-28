<template>
  <div class="footer">
   ​<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item mui-active" to="/index">
				<span class=" mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/goods/list">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">8</span></span>
				<span class="mui-tab-label">商品购买</span>
			</router-link>
			<router-link class="mui-tab-item" to="">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">消息</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcart">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
      <router-link class="mui-tab-item" to="/self">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">我的淘宝</span>
			</router-link>
		</nav>
		<div class="div"></div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped lang='less'>
.footer{
	position: fixed;
	.div{
		height:3.125rem /* 50/16 */ ;
	}
}
</style>