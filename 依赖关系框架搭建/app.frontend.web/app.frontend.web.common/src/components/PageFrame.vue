<template>
  <div>
    <router-view/>
    <van-tabbar class="tab-bar" v-model="active">
      <van-tabbar-item icon="after-sale" @click="tabNav(active)">借款</van-tabbar-item>
      <van-tabbar-item icon="cash-back-record"  @click="tabNav(active)">还款</van-tabbar-item>
      <van-tabbar-item icon="gold-coin" dot  @click="tabNav(active)">理财</van-tabbar-item>
      <van-tabbar-item icon="contact"  @click="tabNav(active)">我</van-tabbar-item>
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
  },
  methods: {
    tabNav (active) {
      console.log(active)
      if (active === 2) {
        this.$router.push('Finance')
      } else {
        this.$vant.Toast('该功能尚未开发完成')
      }
    }
  }
}
</script>
<style>
.header-page {
  padding-top: 50px;
}
.tab-bar {
  position: fixed;
}
</style>
