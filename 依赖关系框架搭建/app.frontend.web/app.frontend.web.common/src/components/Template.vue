<template>
  <div class="status-bg">
      <h2 class="status-title">{{title}}</h2>
      <p class="status-msg">{{msg}}</p>
  </div>
</template>
<script>
export default {
  name: 'Template',
  props: ['title', 'msg']
}
</script>
<style>
body {
    margin: 0;
}
.status-bg-5 {
    background:firebrick;
}
.status-bg-4 {
    background: orange;
}
.status-bg {
    position: fixed;
    width: 100%;
    height: 100%;
    color: white;
}
.status-title {
    margin-top: 45%;
    font-size: 60px;
}
.status-msg {
    font-size: 20px;
}
</style>
