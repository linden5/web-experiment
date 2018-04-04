<template>
  <div class="header">
    <van-nav-bar :title="title">
      <van-icon name="contact" class="header-icon" slot="left" />
      <van-icon name="chat" class="header-icon" slot="right" />
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
  }
}
</script>
<style>
.header-icon {
  font-size: 25px;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  height: 50px;
  width: 100%;
  z-index: 1;
}
</style>
