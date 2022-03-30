<template>
  <!-- 超级管理员，左侧导航栏 -->
  <div id="nav">
    <!-- 顶部logo -->
    <div class="logo"></div>
    <!-- 下部导航 -->
    <div class="nav">
      <router-link class="router-link" to="/super_master/super_configure">
        <div class="text_unselect">
          <img
            class="img"
            src="@/data/imgs/超级配置+面试官配置.png"
            alt="123"
          />
          超级配置
        </div>
      </router-link>
      <router-link class="router-link" to="/super_master/super_data">
        <div class="text_unselect">
          <img
            class="img"
            src="@/data/imgs/招新数据.png"
            alt="123"
          />
          招新数据
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import VC from "./SMNav.js";

export default {
  name: "SmNav",
  data() {
    return VC.data;
  },
};
</script>

<style scoped>
@import url("./SMNav.css");
@import url("../../../../style/router-link.css");
@import url('../../../../style/page_general.css');
</style>
