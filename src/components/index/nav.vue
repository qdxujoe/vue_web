<template>
	<div class="nav">
		<div class="mui-content">
			<ul class="mui-table-view mui-grid-view mui-grid-9">
			<li class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-2">
				<a href="#">
					<span class="mui-icon mui-icon-home"></span>
					<div class="mui-media-body">天猫</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-2">
				<a href="#">
					<span class="mui-icon mui-icon-email">
						<span class="mui-badge">5</span>
					</span>
					<div class="mui-media-body">聚划算</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-2">
				<a href="#">
					<span class="mui-icon mui-icon-chatbubble"></span>
					<div class="mui-media-body">天猫国际</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-2">
				<a href="#">
					<span class="mui-icon mui-icon-location"></span>
					<div class="mui-media-body">外卖</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
				<a href="#">
					<span class="mui-icon mui-icon-search"></span>
					<div class="mui-media-body">天猫超市</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-2">
				<a href="#">
					<span class="mui-icon mui-icon-phone"></span>
					<div class="mui-media-body">充值中心</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-2">
				<a href="#">
					<span class="mui-icon mui-icon-gear"></span>
					<div class="mui-media-body">飞猪旅行</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-2">
				<a href="#">
					<span class="mui-icon mui-icon-info"></span>
					<div class="mui-media-body">领金币</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-2">
				<a href="#">
					<span class="mui-icon mui-icon-more"></span>
					<div class="mui-media-body">拍卖</div>
				</a>
			</li>
				<li class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-2">
				<a href="#">
					<span class="mui-icon mui-icon-more"></span>
					<div class="mui-media-body">分类</div>
				</a>
			</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped lang='less'>
.body{
	background-color: #fff;
}
.nav{
	// border: 1px solid red;
	// margin-top:2.1875rem /* 35/16 */;
	width: 100%;
	height: 12.5rem /* 200/16 */;

	
margin: 0 auto;
	.mui-content{
		width: 100%;
		height: 100%;
		// border: 1px solid #000;
		 display: flex;
		 background-color: #fff;
	}
	li{
		// border: 1px solid blue;
		width: 20%;
		height: 50%;
		.mui-icon{
			// border: 1px solid #000;
		border-radius: 100%;
		}
	
	}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
    font-size: .625rem /* 10/16 */; 
}
.mui-content > .mui-table-view:first-child {
     margin-top: 0px; 
}
}
</style>