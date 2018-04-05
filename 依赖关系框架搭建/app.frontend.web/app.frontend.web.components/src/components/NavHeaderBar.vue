<template>
  <div class="header">
    <van-nav-bar
      :title="title"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>
<script>
export default {
  name: 'NavHeaderBar',
  computed: {
    title () {
      return this.$store.state.title
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    }
  }
}
</script>
