<template>
  <div class="header">
    <van-nav-bar :title="title" @click-left="login" @click-right="notImplemented">
      <van-tabbar slot="left">
        <van-tabbar-item icon="contact" class="header-icon" dot/>
      </van-tabbar>
      <van-icon name="chat" class="header-icon" slot="right"/>
    </van-nav-bar>
  </div>
</template>
<script>
export default {
  name: 'HomeHeaderBar',
  computed: {
    title () {
      return this.$store.state.title
    }
  },
  methods: {
    login () {
      console.log('fuck')
      this.$router.push('Login')
    },
    notImplemented () {
      this.$vant.Dialog.alert({
        title: '客服联系方式',
        message: 'liuyunxng@foxmail.com'
      })
    }
  }
}
</script>
<style>
.header-icon .van-tabbar-item__icon {
  margin-bottom: 0;
}
</style>
