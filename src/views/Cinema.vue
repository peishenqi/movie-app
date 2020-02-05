<template>
  <div class="cinema">
    <van-tabs v-model="active">

      <van-tab title="热映">
        <van-card
          desc="描述信息"
          title="商品标题"
          thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        >
          <div slot="tags">
            <van-tag plain type="danger">标签</van-tag>
            <van-tag plain type="danger">标签</van-tag>
          </div>
          <div slot="footer">
            <van-button size="mini">按钮</van-button>
            <van-button size="mini">按钮</van-button>
          </div>
        </van-card>
      </van-tab>

      <van-tab title="影院">
        <van-dropdown-menu active-color="#ee0a24">
          <van-dropdown-item v-model="value1" :options="option1" />
          <van-dropdown-item v-model="value2" :options="option2" />
          <van-dropdown-item v-model="value3" :options="option3" />
        </van-dropdown-menu>
        <van-card
          desc="我也不知道在哪里，我是随便写的，哈哈哈"
          title="万达影城"
        >
          <div slot="tags">
            <van-tag plain type="danger">标签</van-tag>
            <van-tag plain type="danger">标签</van-tag>
          </div>
        </van-card>
      </van-tab>

      <van-tab title="待映">
          <h3>预告片推荐</h3>
          


           <van-card
          desc="描述信息"
          title="商品标题"
          thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        >
          <div slot="tags">
            <van-tag plain type="danger">标签</van-tag>
            <van-tag plain type="danger">标签</van-tag>
          </div>
          <div slot="footer">
            <van-button size="mini">按钮</van-button>
            <van-button size="mini">按钮</van-button>
          </div>
        </van-card>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 1,
      value1: 0,
      value2: "a",
      value3: "c",
      option1: [
        { text: "全部", value: 0 },
        { text: "其他", value: 1 }
      ],
      option2: [
        { text: "距离近", value: "a" },
        { text: "价格低", value: "b" }
      ],
      option3: [
        { text: "筛选全部", value: "a" },
        { text: "可退票", value: "b" },
        { text: "可改签", value: "c" }
      ]
    };
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.cinema {
  height: 100%;
  background: #96979933;
}
.van-card {
  margin: 0;
}
.van-card {
  background: #fff;
}
</style>
