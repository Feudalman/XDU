<template>
  <div id="main">
    <div style="height: 50%">
      <div id="background_1" class="text_unselect">
        <h1 style="font-size: 50px; color: #fff">Welcome!</h1>
      </div>
      <div id="background_2"></div>
    </div>
    <div id="background_3"></div>
    <!-- 登录框框 -->
    <div id="login_block">
      <!-- 登录组件 -->
      <submitBlock></submitBlock>
    </div>
    <!-- 四个流星 -->
    <img :src="src" class="stars" style="top: 15%; left: 25%" />
    <img :src="src" class="stars" style="top: 70%; left: 8%" />
    <img :src="src" class="stars" style="top: 75%; left: 60%" />
    <img
      src="../../data/imgs/蓝色流星--已处理不透明度.png"
      class="stars"
      style="top: 50%; left: 90%"
    />
  </div>
</template>

<script>
import SubmitBlock from "./submit_block.vue";
export default {
  name: "login",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    SubmitBlock,
  },
  data() {
    return {
      src: require("@/data/imgs/白色流星--已处理不透明底.png"),
    };
  },
  methods: {},
};
</script>


<style scoped>
@import url("../../style/page_general.css");

/* 用来设置背景颜色 */
#background_1 {
  /* 渐变色 */
  background: linear-gradient(
    to right,
    #717af1,
    #c081ff
  ); /* Opera 11.1 - 12.0 */
  height: 37.5%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#background_2 {
  background-color: #333bc8; /* Opera 11.1 - 12.0 */
  height: 62.5%;
  width: 100%;
}
#background_3 {
  background-color: #172b4d;
  height: 50%;
  width: 100%;
}
/* 登录功能模块 */
#login_block {
  width: 38%;
  height: 57.7%;
  margin: auto;
  position: relative;
  bottom: 76vh;
  border-radius: 20px;
  background-color: #f7fafc;
  z-index: 999;
}
/* 流星 */
.stars {
  height: 20%;
  position: fixed;
  left: 0;
  top: 0;
}
</style>