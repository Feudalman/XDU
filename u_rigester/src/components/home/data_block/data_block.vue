<template>
  <div class="data_block">
    <div class="data">
      <div class="left">
        <n-space vertical>
          <span class="title">{{ item.title }}</span>
          <span class="number">{{ item.data }}</span>
          <span class="time">2022-2023学年</span>
        </n-space>
      </div>
      <div class="right">
        <img :src="src" :style="bg">
      </div>
    </div>
  </div>
</template>

<script>
import { NSpace } from "naive-ui";

export default {
  name: "DataBlock",
  components: {
    NSpace,
  },
  data() {
    return {};
  },
  props: {
    item: Object,
  },
  computed: {
    src: function () {
      if (this.item.index == 0) {
        return require("@/data/imgs/招新总投递数.png");
      } else if (this.item.index == 1) {
        return require("@/data/imgs/招新通过总数.png");
      } else if (this.item.index == 2) {
        return require("@/data/imgs/招新通过总男生.png");
      } else {
        return require("@/data/imgs/招新通过总女生.png");
      }
    },
    bg: function () {
      if (this.item.index == 0) {
        return "background-color: #FE4066";
      } else if (this.item.index == 1) {
        return "background-color: #FE9940";
      } else if (this.item.index == 2) {
        return "background-color: #009966";
      } else {
        return "background-color: #1017FB";
      }
    },
  },
};
</script>

<style scoped>
@import url("./data_block.css");
</style>