<template>
  <div class="hello">
    <logo/>
    <Button>有赞Button</Button>
    <h1>{{lang.home.msg}}</h1>
    <h2>{{lang.home.title}}</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          {{lang.home.coreDoc}}
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          {{lang.home.forum}}
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          {{lang.home.community}}
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          {{lang.home.twitter}}
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          {{lang.home.templateDoc}}
        </a>
      </li>
    </ul>
    <h2>{{lang.home.ecosystem}}</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          {{lang.home.vueRouter}}
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          {{lang.home.vuex}}
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          {{lang.home.vueLoader}}
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          {{lang.home.awesomeVue}}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { Logo } from '@gfloan/app.frontend.web.components'
import { Button } from 'vant'

export default {
  name: 'HelloWorld',
  components: {
    Logo,
    Button
  },
  data () {
    return {
      lang: require('../locales/' + process.env.LANG + '.json')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
