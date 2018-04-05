<template>
  <div class="header-page">
    <HomeHeaderBar/>
    <van-swipe :autoplay="3000" class="my-swipe">
      <van-swipe-item class="my-swipe-item">资讯1</van-swipe-item>
      <van-swipe-item class="my-swipe-item">资讯2</van-swipe-item>
      <van-swipe-item class="my-swipe-item">资讯3</van-swipe-item>
      <van-swipe-item class="my-swipe-item">资讯4</van-swipe-item>
    </van-swipe>
    <div class="promotion">
      <p class="promotion-title">随意借最高额度(元)</p>
      <p class="promotion-money">5000.00</p>
      <van-tag type="danger" class="promotion-btn">我要申请</van-tag>
    </div>
    <van-tabs :active="active" class="no-padding">
        <van-tab v-for="(value, tabindex) in tabs" :title="value" :key="tabindex">
            <van-row class="recommend-list" v-for="(recommend, index) in recommends[tabindex]" :key="index">
                <van-col span="2">
                    <van-icon name="shop" class="leading-icon"></van-icon>
                </van-col>
                <van-col span="11" class="text-left">
                    <p class="product-title">{{recommend.name}}</p>
                    <p class="product-desc">{{recommend.desc}}</p>
                </van-col>
                <van-col span="11">
                    <van-tag plain type="danger">{{recommend.start | money}}-{{recommend.end | money}}</van-tag>
                    <van-tag plain type="danger">日息万{{recommend.rate}}起</van-tag>
                </van-col>
            </van-row>
        </van-tab>
    </van-tabs>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      // lang: require('../locales/' + process.env.LANG + '.json'),
      tabs: ['热门推荐', '极速推荐', '低息推荐'],
      active: 0,
      recommends: [
        [
          {
            rate: 10.00,
            name: '广发收益宝364天期',
            desc: '低风险',
            start: 100,
            end: 10000,
            startPrice: 5
          },
          {
            rate: 10.00,
            name: '广发收益宝365天期',
            desc: '低风险',
            start: 100,
            end: 10000,
            duration: 365,
            startPrice: 5
          }
        ],
        [
          {
            rate: 9,
            name: '极速推荐1',
            desc: '低风险',
            start: 100,
            end: 10000,
            startPrice: 5
          },
          {
            rate: 9,
            name: '极速推荐2',
            desc: '低风险',
            start: 2000,
            end: 500000,
            duration: 365,
            startPrice: 5
          }
        ],
        [
          {
            rate: 9,
            name: '低息推荐1',
            desc: '低风险',
            start: 100,
            end: 10000,
            startPrice: 5
          },
          {
            rate: 9,
            name: '低息推荐2',
            desc: '低风险',
            start: 2000,
            end: 500000,
            duration: 365,
            startPrice: 5
          }
        ]
      ]
    }
  },
  filters: {
    money (value) {
      if (value >= 100 && value < 1000) {
        return parseInt(value / 100) + '百'
      }
      if (value >= 1000 && value < 10000) {
        return parseInt(value / 1000) + '千'
      }
      if (value >= 10000) {
        return parseInt(value / 10000) + '万'
      }
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

.bottom-component {
  padding-bottom: 60px;
}

.product-title {
  font-size: 18px;
}

.product-desc {
  font-size: 14px;
  color: gray;
}

.leading-icon {
  position: relative;
  top: 5px;
}

.promotion {
  margin: 20px;
  padding: 20px;
  color: white;
  background: #f44;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.promotion-title {
  font-size: 18px;
}
.promotion-money {
  font-size: 40px;
}
.promotion-btn {
  font-size: 18px;
}

.no-padding {
  padding: 0;
}
</style>
