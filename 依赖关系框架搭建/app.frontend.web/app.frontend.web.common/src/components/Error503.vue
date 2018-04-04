<template>
  <div class="hello">
    <Template title="503" msg="服务器开小差" class="status-bg-5"/>
  </div>
</template>

<script>
import Template from './Template'

export default {
  name: 'Error503',
  components: {
    Template
  }
}
</script>
