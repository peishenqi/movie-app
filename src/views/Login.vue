<template>
  <div class="login">
    <header>
      <van-icon name="cross" @click="user" />
      <p>帮助</p>
    </header>

    <section>
      <h2>欢迎来到猫眼</h2>
      <van-cell-group>
        <van-field
          type="tel"
          label="+86  >"
          placeholder="请输入手机号"
          :value="value"
          clickable
          @click="show = true"
        />
        <van-number-keyboard
          v-model="value"
          :show="show"
          :maxlength="11"
          @blur="show = false"
        />
      </van-cell-group>
      <div :hidden="ishidden">
        <span>未注册的手机号验证后自动创建猫眼账户</span>
      </div>
      <div :hidden="!ishidden">
        <van-cell-group>
          <van-field
            class="password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            :value="value"
            clickable
            @click="show = true"
          />
          <van-number-keyboard
            v-model="value"
            :show="show"
            :maxlength="12"
            @blur="show = false"
          />
        </van-cell-group>
      </div>

      <van-button size="large" color="#ef2609">获取短信验证码</van-button>
      <h6 :hidden="ishidden" @click="hidden">密码登录</h6>
      <h6 :hidden="!ishidden" @click="hidden">验证码登录</h6>

    </section>

    <footer>
      <p>
        登录代表您以同意<a>《猫眼用户协议》</a>、<a>《隐私政策》</a>
        并授权使用您的猫眼账号信息（如昵称、头像、收货地址）以便您统一管理
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ishidden: false,
      tel: "",
      show: false,
      value: "",
      password: ""
    };
  },
  methods: {
    hidden() {
      this.ishidden = !this.ishidden;
    },
    user(){
        this.$router.push({
            path:"/user"
        })
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.login {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
header {
  height: 45px;
  line-height: 45px;
  background: #fff;
  position: relative;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  color: red;
}
header .van-icon {
  height: 45px;
  line-height: 45px;
  font-size: 1.3rem;
}

section {
  flex: 1;
  padding: 2.5rem;
}
section h2 {
  margin-bottom: 2rem;
  font-weight: 500;
}
section .van-cell {
  height: 3rem;
  line-height: 3rem;
}
section span {
  font-size: 12px;
  color: #646566;
  display: block;
}
.van-button {
  margin: 2rem 0;
  border-radius: 10px;
}
.van-button span {
  color: #fff;
}
section h6 {
  font-size: 0.6rem;
  font-weight: 100;
}
.password {
  margin-top: 1rem;
}

footer {
  min-height: 30px;
  /* background: red; */
  font-size: 0.5rem;
  padding: 1rem;
  color: #646566;
}
footer a {
  color: red;
}
</style>
