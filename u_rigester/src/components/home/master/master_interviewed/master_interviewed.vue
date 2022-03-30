<template>
  <div id="master">
    <div class="background"></div>
    <div style="width: 100%; height: 100%">
      <h-title :bottom="true" :title="title_" welcome="管理员"></h-title>
      <div class="main_table">
        <div class="table">
          <div class="table_title">本部门新投递数据</div>
          <div class="table_button">
            <n-button
              :round="true"
              size="large"
              color="rgba(110,16,251,1)"
              :ghost="true"
              :strong="true"
              @click="eliminate_note"
              >淘汰且通知</n-button
            >
            <n-button
              :round="true"
              size="large"
              color="rgba(110,16,251,1)"
              :strong="true"
              @click="admit_note"
              >录取通过且通知</n-button
            >
          </div>
          <n-data-table
            :columns="columns"
            :data="data"
            :loading="loading"
            size="large"
            :pagination="pagination"
            :row-key="(row) => row.uid"
            @update:checked-row-keys="do_check"
            :single-line="false"
          ></n-data-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HTitle from "../../title.vue";
import Api from "../../../../api/api";
import { NDataTable, NButton } from "naive-ui";

export default {
  name: "MasterInterviewed",
  components: {
    HTitle,
    NDataTable,
    NButton,
  },
  data() {
    return {
      title_: "西电青年志愿者协会 | 青鸢工作室",
      columns: [
        {
          type: "selection",
          key: "selection",
        },
        {
          title: "姓名",
          key: "name",
        },
        {
          title: "性别",
          key: "sex",
        },
        {
          title: "联系电话",
          key: "phone",
        },
        {
          title: "邮箱",
          key: "email",
        },
        {
          title: "面评评价",
          key: "eva",
        },
        {
          title: "评分",
          key: "mark",
        },
        {
          title: "状态字段",
          key: "status",
        },
      ],
      data:[]
    };
  },
  created: async function () {
    const Token = this.$localData("get", "Token");
    const res = await Api.GetSecondStudents(Token);
    this.data = res.data.users;
    console.log(res);
  },
};
</script>


<style scoped>
@import url("../../../../style/master_table.css");
</style>