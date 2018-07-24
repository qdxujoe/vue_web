<template>
  <div class="comment">
    <!-- 评论页面 -->

    <!-- 发表评论 -->
    <div class="mui-card">
      <div class="mui-card-header">提交评论</div>
      <div class="mui-card-content">
        <textarea v-model="content" id="textarea" rows="5" placeholder="请发表评论"></textarea>
        <button @click="submitComment" type="button" class="mui-btn mui-btn-warning mui-btn-block">发表</button>
      </div>
    </div>

    <!-- 评论列表 -->
    <div class="mui-card">
      <div class="mui-card-header">评论列表</div>
      <ul class="mui-table-view">
				 <li class="mui-table-view-cell">Item 1</li>
		         <li class="mui-table-view-cell">Item 2</li>
		         <li class="mui-table-view-cell">Item 3</li>
			</ul>
      <!-- <ul class="mui-table-view">
        <li class="mui-table-view-cell" v-for="(item,i) in list" :key="i">
          <div>
            <span>第{{i+1}}楼</span>
            <span>用户名：{{item.name}}</span>
            <span>发表时间:{{item.time | formatDate}}</span>
          </div>
          <p>{{item.content}}</p>
        </li>
        
      </ul> -->

      <!-- 加载更多 加载更多跟列表评论上逻辑差不多，就绑定一个点击事件，调用评论列表那个方法就行了-->
      <!-- 给加载更多按钮加上 ref 属性 加上这个特殊属性就可以获取得到按钮 实例上$refs上就有了 -->
      <button ref="loadMoreBtn" @click="getList" type="button" class="mui-btn mui-btn-warning mui-btn-block">加载更多</button>
    </div>
  </div>
</template>

<script>
import config from "../../js/api-comfig.js";
import { Toact } from "mint-ui";
export default {
  data() {
    return {
      content: "",
      pageindex:1,
      list:[]
    };
  },
  // 接收来自父的id
  props: ["id"],
  methods: {
    //发表评论
    submitComment() {
      let url = config.commentPut + this.id;
      let data = { content: this.content };
      // {}:默认提交的数据是字符串（json格式）-------{emulateJSOM:true}->
      this.$http.post(url, data, { emulateJSOM: true }).then(res => {
        let body = res.body;
        //发表成功后给出的提示
        if (body.status == 200) {
          Toast({
            message: "操作成功",
            iconClass: "icon icon-success"
          });
          //把评论加载到评论列表的最前面
          this.list.unshift({
            name:'',
            time:Date.now(),
            content:this.content
          });
          // 并清空输入框
          this.content = "";
        }
      });
    },
    //评论列表
    getList(){
      // let url=config+commentList+this.id +'?pageindex'
      //以下是ES6语法的写法
      let url=`${config+commentList+this.id}?pageindex=${this.pageindex}` ;
      this.$http.get(url).then(res=>{
        let body=res.body;
        //如果当前页已经有数据了，那么久不用push 也不用pageindex++了
        if(body.status==0 && body.message.length>0){
            this.list.push(...body.message);
            this.pageindex++;
        }else{
          //如果美誉数据了，就把加载更多的按钮禁用掉
          this.$refs.loadMoreBtn.disabled='true'
        }
      })
    },

    
  },
  created(){
    this.getList();
  }
};
</script>

<style scoped>
</style>