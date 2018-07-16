<template>
  <div>
    <van-nav-bar :title="title" left-text="返回" right-text="按钮" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
  </div>
</template>

<script>
export default {
  props:["title"],
  data(){
    return{
     
    }
  },
   methods: {
    onClickLeft() { 
      this.$router.go(-1)
    },
    onClickRight() {
      Toast('按钮');
    }
  }
};
</script>

<style scoped>
</style>.