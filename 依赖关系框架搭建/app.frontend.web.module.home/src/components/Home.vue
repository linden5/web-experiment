<template>
  <div class="hello">
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-swipe :autoplay="3000" class="my-swipe">
      <van-swipe-item class="my-swipe-item">1</van-swipe-item>
      <van-swipe-item class="my-swipe-item">2</van-swipe-item>
      <van-swipe-item class="my-swipe-item">3</van-swipe-item>
      <van-swipe-item class="my-swipe-item">4</van-swipe-item>
    </van-swipe>
    <van-row class="my-row">
      <van-col span="6">
        <van-icon name="success" class="my-icon"/>
        <p>成功</p>
      </van-col>
      <van-col span="6">
        <van-icon name="chat" class="my-icon"/>
        <p>聊天</p>
      </van-col>
      <van-col span="6">
        <van-icon name="shop" class="my-icon"/>
        <p>购物</p>
      </van-col>
      <van-col span="6">
        <van-icon name="question" class="my-icon"/>
        <p>问题</p>
      </van-col>
    </van-row>
    <van-row class="my-row">
      <van-col span="6">
        <van-icon name="clock" class="my-icon"/>
        <p>钟表</p>
      </van-col>
      <van-col span="6">
        <van-icon name="logistics" class="my-icon"/>
        <p>后勤</p>
      </van-col>
      <van-col span="6">
        <van-icon name="edit" class="my-icon"/>
        <p>编辑</p>
      </van-col>
      <van-col span="6">
        <van-icon name="exchange" class="my-icon"/>
        <p>交换</p>
      </van-col>
    </van-row>
    <van-panel title="灵活期限" desc="" status="更多 >" class="text-left">
      <van-row class="recommend-list font-small">
        <van-col span="8" class="text-center">
          <h4>现金增利</h4>
          <p>保证金余额理财</p>
          <p>支持快存快取</p>
          <van-icon name="after-sale" class="my-icon"></van-icon>
        </van-col>
        <van-col span="8" class="text-center">
          <h4>现金增利</h4>
          <p>保证金余额理财</p>
          <p>支持快存快取</p>
          <van-icon name="points" class="my-icon"></van-icon>
        </van-col>
        <van-col span="8" class="text-center">
          <h4>现金增利</h4>
          <p>保证金余额理财</p>
          <p>支持快存快取</p>
          <van-icon name="discount" class="my-icon"></van-icon>
        </van-col>
      </van-row>
    </van-panel>

    <van-panel title="固定期限" status="更多 >" class="text-left bottom-component">
      <van-row class="recommend-list">
        <van-col span="8">
          <p class="highlight">10.10%</p>
          <p>登录查看</p>
        </van-col>
        <van-col span="16">
          <p>广发收益宝364天期</p>
          <van-tag plain type="primary">低风险</van-tag>
          <van-tag plain>364天</van-tag>
          <van-tag plain>5万元起购</van-tag>
        </van-col>
      </van-row>
    </van-panel>

    <van-tabbar v-model="active">
      <van-tabbar-item icon="shop">商店</van-tabbar-item>
      <van-tabbar-item icon="chat" dot>聊天</van-tabbar-item>
      <van-tabbar-item icon="records" info="5">记录</van-tabbar-item>
      <van-tabbar-item icon="gold-coin" info="20">金币</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from 'vue'
import { Logo } from '@gfloan/app.frontend.web.components'
import { Button, NavBar, Icon, Toast, Swipe, SwipeItem, Panel, Row, Col, Tabbar, TabbarItem, Tag, Dialog  } from 'vant'

Vue.use(Button)
  .use(NavBar)
  .use(Icon)
  .use(Toast)
  .use(Swipe)
  .use(SwipeItem)
  .use(Panel)
  .use(Row).use(Col)
  .use(Tabbar).use(TabbarItem)
  .use(Tag)

export default {
  name: 'Home',
  components: {
    Logo,
  },
  data () {
    return {
      lang: require('../locales/' + process.env.LANG + '.json'),
      active: 0
    }
  },
  computed: {
    // active() {
    //   return 0
    // }
  },
  methods: {
    onClickLeft () {
      Toast('返回')
    },
    onClickRight () {
      Toast('按钮')
    },
    tabClick() {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p, h4 {
  margin: 0;
}
.my-icon {
  padding: .5rem;
  font-size: 3rem;
}

.my-swipe {
  margin-bottom: 15px;
  height: 10rem;
  line-height: 10rem;
  background: #66c6f2;
}

.my-row {
  margin-bottom: 10px;
}

.text-left {
  text-align: left;
}

.text-center {
  text-align: center
}
.font-small {
  font-size: 14px;
}
.recommend-list {
  padding: 15px;
}

.highlight {
  color: red;
  font-size: 18px;
}

.bottom-component {
  padding-bottom: 10rem;
}
</style>
