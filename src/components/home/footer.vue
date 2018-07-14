<template>
  <div class="footer">
   ​<nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class=" mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">8</span></span>
				<span class="mui-tab-label">微淘</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">消息</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">购物车</span>
			</a>
      <a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">我的淘宝</span>
			</a>
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