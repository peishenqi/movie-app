<template>
  <div class="home">
    <van-tabbar v-model="active">
      <van-tabbar-item to="/" icon="video-o">电影</van-tabbar-item>
      <van-tabbar-item to="/Cinema" icon="shop-o">影院</van-tabbar-item>
      <van-tabbar-item to="/User" icon="user-circle-o">我的</van-tabbar-item>
    </van-tabbar>
     <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data() {
    return {
      active: 0
    }
  }
};
</script>
