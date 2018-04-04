<template>
  <div class="hello">
    <Template title="401" msg="没权限" class="status-bg-4"/>
  </div>
</template>

<script>
import Template from './Template'

export default {
  name: 'Error401',
  components: {
    Template
  }
}
</script>
