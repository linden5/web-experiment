<template>
  <div class="hello">
    <Template title="500" msg="服务器挂了" class="status-bg-5"/>
  </div>
</template>

<script>
import Template from './Template'

export default {
  name: 'Error500',
  components: {
    Template
  }
}
</script>
