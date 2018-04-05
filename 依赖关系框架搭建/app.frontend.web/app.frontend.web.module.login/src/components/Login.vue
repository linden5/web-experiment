<template>
  <div class="header-page login-page">
    <NavHeaderBar/>
    <div v-show="!isLoggedIn">
      <h2>
        <van-icon name="contact"></van-icon>
        欢迎回来
      </h2>
      <van-cell-group>
        <van-field
          v-model="username"
          label="用户名"
          icon="clear"
          placeholder="请输入用户名"
          required
          @click-icon="username = ''"
        />

        <van-field
          v-model="password"
          type="password"
          label="密码"
          placeholder="请输入密码"
          required
        />
      </van-cell-group>
      <van-button size="large" @click="login(username, password)">登录</van-button>
    </div>
    <div v-show="isLoggedIn">
      <h2>您好,{{username}}</h2>
      <van-button type="primary" bottom-action @click="logout()">退出</van-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      username: this.$store.state.userInfo.username || '',
      password: ''
    }
  },
  computed: {
    isLoggedIn () {
      return this.$store.state.userInfo
    }
  },
  methods: {
    login (username, password) {
      if (!username || !password) {
        this.$vant.Toast('请输入用户名或密码')
        return
      }
      this.$vant.Dialog.alert({
        title: '登录',
        message: '您输入的内容是：<br>用户名:' + username + '<br>密码:' + password
      }).then(() => {
        this.$store.commit('setUserInfo', {
          username: username,
          password: password
        })
      })
    },
    logout () {
      this.$store.commit('setUserInfo', null)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-page {
  padding: 10px;
}
input {
  margin: 5px;
  height: 2em;
  line-height: 2em;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
