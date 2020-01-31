<template>
  <div class="user">
    <van-sticky>
      <header>
        <!-- <van-nav-bar title="我的" /> -->
        <van-icon name="bell" color="#fff" />
      </header>
    </van-sticky>

    <section>
      <!-- 登录 -->
      <div class="login">
        <div class="left">
          <img
            src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3118677635,2054510391&fm=26&gp=0.jpg"
            alt=""
          />
        </div>
        <div class="right" @click="login">
          <h5>立即登录</h5>
        </div>
      </div>
      <!-- 导航 -->
      <div class="nav">
        <ul>
          <li>电影</li>
          <li>热映</li>
          <li>即将上映</li>
          <li>综艺</li>
          <li>书籍</li>
        </ul>
      </div>
      <!-- 全部订单 -->
      <div class="seek">
        <van-cell-group>
          <van-cell title="我的订单" is-link value="全部订单" />
        </van-cell-group>
      </div>
      <!-- 我的服务 -->
      <div>
        <van-grid :column-num="4">
          <van-grid-item icon="vip-card-o" text="折扣卡" />
          <van-grid-item icon="coupon-o" text="优惠劵" />
          <van-grid-item icon="refund-o" text="退款办理" />
          <van-grid-item icon="debit-pay" text="银行活动" />
          <van-grid-item icon="bag-o" text="周边商城" />
          <van-grid-item icon="idcard" text="账号实名" />
          <van-grid-item icon="records" text="备案中" />
          <van-grid-item icon="video-o" text="0元看电影" />
          <van-grid-item icon="certificate" text="猫眼号认证" />
          <van-grid-item icon="gold-coin-o" text="天天领现金" />
          <van-grid-item icon="discount" text="零花钱借钱" />
        </van-grid>
      </div>
    <!-- 设置 -->
    <div class="set">
        <van-cell-group>
          <van-cell title="设置" is-link />
          <van-cell title="好礼不停" is-link />
        </van-cell-group>
    </div>

    </section>

    <footer></footer>
  </div>
</template>

<script>
export default {
  methods: {
      login(){
      this.$router.push({
        path:'/login'
      })
    }
  },
  // mutations:{
  //   login(){
  //     this.$router.push({
  //       path:'/login'
  //     })
  //   }
  // }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.van-ellipsis {
  margin: 0 auto;
}
.user {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
header {
  height: 45px;
  /* height:32px; */
  background: red;
  position: relative;
}
header .van-icon{
    position: absolute;
    right:1rem;
    top: 1rem;
    font-size: 1.5rem;
}
section {
  flex: 1;
  overflow-y: auto;
  background: #fff;
}
/* 头像 */
.login {
  /* width:100%; */
  /* height: 5rem; */
  background: red;
  padding: 0 1rem;
  display: flex;
}
.left {
  width: 3rem;
  height: 3rem;
  float: left;
  border-radius: 50%;
  margin-top: 1rem;
}
.left img {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
}
.right {
  flex: 1;
  float: left;
  line-height: 5rem;
  margin-left: 1rem;
  color: #fff;
  border-bottom: 1px solid #fff;
}
/* 导航 */
.nav {
 background: red;
  height: 5rem;
  padding: 0 1rem;
}
.nav ul {
  display: flex;
  height: 4rem;
  line-height: 4rem;
  justify-content: space-between;
  font-size: 0.8rem;
}
/* 全部订单 */
.seek {
   background: linear-gradient(red, white);
  height: 3rem;
  position: relative;
}
.seek .van-cell-group {
  width: 90%;
  height: 3rem;
  position: absolute;
  left: 5%;
  top: -1rem;
  padding: 0 1rem;
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 0 0 20px red;
}
.seek .van-cell ,.seek .van-icon{
  height: 3rem;
  line-height: 3rem;
}
/* 设置 */
.set{
    min-height: 2rem;
    /* margin: 0.5rem; */
    background: #ccc;
    border-top: 0.3rem solid #ccc;
    border-bottom: 0.3rem solid #ccc;
}
.set .van-icon{
    margin-top: 0.5em;
}
.set .van-cell{
    height: 3rem;
    line-height: 3rem;
    padding:0 1rem;
}

footer {
  height: 50px;
}
</style>
