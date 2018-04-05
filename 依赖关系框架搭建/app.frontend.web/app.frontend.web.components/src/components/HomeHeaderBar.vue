<template>
  <div class="header">
    <van-nav-bar :title="title">
      <van-icon name="contact" class="header-icon" slot="left" />
      <van-icon name="chat" class="header-icon" slot="right" @click="notImplemented()"/>
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
    notImplemented () {
      this.$vant.Dialog.alert({
        title: '客服联系方式',
        message: 'liuyunxng@foxmail.com'
      })
    }
  }
}
</script>
