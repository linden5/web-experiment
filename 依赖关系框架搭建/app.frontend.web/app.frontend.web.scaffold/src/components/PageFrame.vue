<template>
  <div>
    <router-view/>
    <van-tabbar v-model="active" class="tab-bar">
      <van-tabbar-item icon="after-sale">借款</van-tabbar-item>
      <van-tabbar-item icon="cash-back-record">还款</van-tabbar-item>
      <van-tabbar-item icon="gold-coin">理财</van-tabbar-item>
      <van-tabbar-item icon="contact">我</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: 'PageFrame',
  data () {
    return {
      active: 0
    }
  }
}
</script>
<style>
.tab-bar {
  position: fixed;
}
</style>
