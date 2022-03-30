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
              @click="interview_note"
              >发送面试通知</n-button
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
    <toast
      v-if="if_toast"
      @show_toast_simple="show_toast_simple"
      @show_toast="show_toast"
      :title="title"
      :checked="checked"
    ></toast>
  </div>
</template>

<script>
import HTitle from "../../title.vue";
import { NDataTable, NButton } from "naive-ui";
import Api from "../../../../api/api";
import Toast from "../../toast/toast.vue";

export default {
  name: "MasterDelivery",
  components: {
    HTitle,
    NDataTable,
    NButton,
    Toast,
  },
  data() {
    return {
      title_: "西电青年志愿者协会 | 青鸢工作室",
      title:"",
      columns: [
        {
          key: "select",
          type: "selection",
          className: "select",
        },
        {
          title: "姓名",
          key: "name",
          width: 200,
          className: "select",
        },
        {
          title: "性别",
          key: "sex",
          width: 130,
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
          title: "学号",
          key: "student_num",
        },
        {
          title: "个人简介",
          key: "intro",
          ellipsis: true,
        },
        {
          title: "状态字段",
          key: "status",
        },
      ],
      data: [],
      loading: true,
      pagination: {
        pageSize: 10,
      },
      checked: [],
      if_toast: false,
    };
  },
  methods: {
    do_check(e) {
      this.checked = e;
    },
    show_toast_simple() {
      this.if_toast = !this.if_toast;
    },
    show_toast() {
      this.show_toast_simple();
    },
    eliminate_note(){
      this.title = "面试信息配置-淘汰"
      this.show_toast_simple();
    },
    interview_note(){
      this.title = "面试信息配置-面试通知";
      this.show_toast_simple();
    }
  },
  created: async function () {
    const Token = this.$localData("get", "Token");
    const res = await Api.GetFirstStudents(Token);
    const users = res.data.users;

    for (let i = 0; i < users.length; i++) {
      users[i].index = i;
      if (users[i].status == 3) {
        users[i].status = "状态字段3";
      }
    }

    this.data = users;
    this.loading = false;
    // console.log(res);
  },
};
</script>

<style scoped>
@import url("../../../../style/master_table.css");
</style>
