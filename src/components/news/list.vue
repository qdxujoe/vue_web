<template>
	
  <div>
      <!-- <ul class="mui-table-view">
				<li v-for="item in list" :key="item.id"  class="mui-table-view-cell mui-media">
					<router-link :to="/news/details/" + item.id>
						<img class="mui-media-object mui-pull-left" :src="item.imgUrl">
						<div class="mui-media-body">
							{{item.title}} -->
							<!-- <div> -->
                <!-- 时间 -->
                <!-- <span>{{item.time | formatDate('YYYY-MM-DD')}}</span> -->
                <!-- 点击量 -->
                <!-- <span>{{item.click}}</span> -->
              <!-- </div>
						</div>
					</router-link>
				</li>
			</ul> -->

			<v-title :title="title"></v-title>
      <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media">
					<!-- <router-link :to="{name:'新闻详情页'}"> -->
						<router-link to="/news/details/">
						<img class="mui-media-object mui-pull-left" src="../../assets/hb.jpg">
						<div class="mui-media-body">
							幸福
							<p class="mui-ellipsis">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
						</div>
				</router-link>
			
				</li>
		

			</ul>
  </div>
</template>

<script>
// import config from '../../js/api-comfig.js'
import title from '../commpon/title.vue';
  export default {
    data(){
      return{
				title:'新闻咨询',
        // list:[]
      }
		},
		components:{
			'v-title':title
		},
    methods:{
      // getList(){
      //   let url="";
      //   this.$http.get(url).then(res=>{
      //     console.log(res);
      //   res.data.status==200 &&(this.list==res.data.data)

        
          
        // })
      // }
    },
    created(){
    //   this.getList();
     }
  }
</script>

<style scoped lang="less>

</style>