<template>
  <div class="loading-bg">
      <router-link to="/home" class="loading-skip">跳过</router-link>
      <span class="loading-tip">聚沙成塔</span>
      <img src="../../../node_modules/@gfloan/app.frontend.web.resource/assets/image/logo.png">
  </div>
</template>
<script>
export default {
  name: 'Loading',
  mounted () {
    setTimeout(() => {
      this.$router.push('Home')
    }, 3000)
  }
}
</script>
<style>
.loading-bg {
    position: fixed;
    width: 100%;
    height: 100%;
    /* background: url(../assets/loading.png) no-repeat; */
    background: goldenrod;
    background-size: cover;
}

.loading-skip {
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 10px;
    color: white;
    background: rgba(0,0,0,0.4);
    border-radius: 5px;
}

.loading-tip {
    position: absolute;
    top: 40%;
    left: 50%;
    padding: 1em;
    color: white;
    font-size: 30px;
    background: rgba(0,0,0,0.4);
    transform: translate(-50%, -50%);
}
</style>
