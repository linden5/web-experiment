<template>
  <div>
    <van-nav-bar :title="title">
      <van-icon name="contact" class="header-icon" slot="left" />
      <van-icon name="chat" class="header-icon" slot="right" />
    </van-nav-bar>
  </div>
</template>
<script>
export default {
  name: 'HeaderBar',
  computed: {
    title () {
      return this.$store.state.title
    }
  }
}
</script>
<style>
.header-icon {
  font-size: 25px;
}
</style>
