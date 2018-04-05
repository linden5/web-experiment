<template>
  <div class="header-page">
    <HomeHeaderBar/>
    <van-swipe :autoplay="3000" class="my-swipe">
      <van-swipe-item class="my-swipe-item">资讯1</van-swipe-item>
      <van-swipe-item class="my-swipe-item">资讯2</van-swipe-item>
      <van-swipe-item class="my-swipe-item">资讯3</van-swipe-item>
      <van-swipe-item class="my-swipe-item">资讯4</van-swipe-item>
    </van-swipe>
    <van-row class="my-row">
      <van-col span="6">
        <van-icon name="success" class="my-icon"/>
        <p id="test-success">成功</p>
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
      <van-row class="recommend-list" v-for="(recommend, index) in recommends" :key="index">
        <van-col span="8">
          <p class="highlight">{{recommend.rate}}%</p>
          <p>登录查看</p>
        </van-col>
        <van-col span="16">
          <p>{{recommend.name}}</p>
          <van-tag plain type="primary">{{recommend.risk}}</van-tag>
          <van-tag plain>{{recommend.duration}}天</van-tag>
          <van-tag plain>{{recommend.startPrice}}万元起购</van-tag>
        </van-col>
      </van-row>
    </van-panel>
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  name: 'Home',
  data () {
    return {
      // lang: require('../locales/' + process.env.LANG + '.json'),
      active: 0,
      recommends: [
        {
          rate: 10.00,
          name: '广发收益宝364天期',
          risk: '低风险',
          duration: 364,
          startPrice: 5
        },
        {
          rate: 10.00,
          name: '广发收益宝364天期',
          risk: '低风险',
          duration: 364,
          startPrice: 5
        }
      ]
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
    tabClick () {

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
  padding-bottom: 60px;
}
</style>
