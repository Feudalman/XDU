<template>
  <!-- 超级管理员，左侧导航栏 -->
  <div id="nav">
    <!-- 顶部logo -->
    <div class="logo"></div>
    <!-- 下部导航 -->
    <div class="nav">
      <router-link
        v-for="item in router"
        key="item.title"
        class="router-link"
        :to="item.to"
      >
        <div class="text_unselect space">
          <img class="img" :src="item.src" alt="" />
          <span>{{item.title}}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MNav",
  data() {
    return {
      router: [
        {
          to: "/master/MasterInterviewer",
          src: require("@/data/imgs/超级配置+面试官配置.png"),
          title: "面试官配置",
        },{
          to: "/master/MasterDelivery",
          src: require("@/data/imgs/新投递数据.png"),
          title: "新投递数据",
        },{
          to: "/master/MasterInterviewed",
          src: require("@/data/imgs/已面试数据.png"),
          title: "已面试数据",
        },{
          to: "/master/MasterEliminate",
          src: require("@/data/imgs/淘汰数据.png"),
          title: "淘汰名单",
        },{
          to: "/master/MasterAdmission",
          src: require("@/data/imgs/录为部员数据.png"),
          title: "录取名单",
        },{
          to: "/master/MasterData",
          src: require("@/data/imgs/招新数据.png"),
          title: "招新数据",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url("./MNav.css");
@import url("../../../../style/router-link.css");
@import url("../../../../style/page_general.css");
</style>
