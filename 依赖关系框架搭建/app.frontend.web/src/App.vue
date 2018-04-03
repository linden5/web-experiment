<template>
  <div id="app">
    <HeaderBar/>
    <router-view/>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="shop">商店</van-tabbar-item>
      <van-tabbar-item icon="chat" dot>聊天</van-tabbar-item>
      <van-tabbar-item icon="records" info="5">记录</van-tabbar-item>
      <van-tabbar-item icon="gold-coin" info="20">金币</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
