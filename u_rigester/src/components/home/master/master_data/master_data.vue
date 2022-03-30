<template>
  <div id="master">
    <div class="background"></div>
    <div class="master_data">
      <h-title :bottom="true" :title="title" welcome="管理员"></h-title>
      <div class="main">
        <div class="total_data">
          <data-block
            v-for="item in dep_data"
            :item="item"
            key="item.index"
          ></data-block>
        </div>
        <div class="table_data">
          <img class="data_img" :src="src" alt="图片加载失败！但是这个图无关紧要，不要紧。">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HTitle from "../../title.vue";
import VC from "./master_data";
import DataBlock from "../../data_block/data_block.vue";

export default {
  name: "MasterData",
  components: {
    HTitle,
    DataBlock,
  },
  data() {
    return VC.data;
  },
  created: VC.created,
};
</script>

<style scoped>
@import url("./master_data.css");
</style>