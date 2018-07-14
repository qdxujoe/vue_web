<template>
  <div>
    <v-swipe></v-swipe>
    <v-nav></v-nav>
  </div>
</template>

<script>
import swipe from "./swipe.vue";
import  nav from "./nav.vue";
  export default {
    components:{
      'v-swipe':swipe,
      'v-nav':nav
    }
  }
</script>

<style scoped >

</style>