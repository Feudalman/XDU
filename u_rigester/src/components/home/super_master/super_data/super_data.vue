<template>
  <div id="master">
    <!-- 背景图 -->
    <div class="background"></div>
    <div class="super_data">
      <h-title :bottom="false" welcome="超级管理员" title="西电青年志愿者协会"></h-title>
      <div class="main">
        <div class="total_data">
          <data-block
            v-for="item in org_data"
            :item="item"
            key="item.index"
          ></data-block>
        </div>
        <div class="table_data">
          <div class="table_title">
            <span class="textTitle">组织内各部门招新数据</span>
            <br />
            <span class="idTitle">{{ OrgID }}</span>
          </div>
          <div class="table">
            <n-space vertical size="large">
              <n-data-table
              :loading="loading"
              :bordered="false"
              :columns="columns"
              :data="deps_data"
              :pagination="pagination"
              size="large"
              >
              </n-data-table>
            </n-space>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VC from "./super_data";
import HTitle from "../../title.vue";
import DataBlock from "../../data_block/data_block.vue";
import { NSpace, NDataTable } from "naive-ui";

export default {
  name: "SuperData",
  components: {
    HTitle,
    DataBlock,
    NSpace,
    NDataTable,
  },
  data() {
    return VC.data;
  },
  computed: {
    OrgID: VC.OrgID,
  },
  created: VC.created,
};
</script>

<style scoped>
@import url("./super_data.css");
</style>