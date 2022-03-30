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
              color="rgba(100,20,251,1)"
              :ghost="true"
              :strong="true"
              @click="delete_member"
              >删除成员</n-button
            >
            <n-button
              :round="true"
              size="large"
              color="rgb(105, 7, 252)"
              :ghost="true"
              :strong="true"
              @click="add_member"
              >新增成员</n-button
            >
            <n-button size="large" color="rgb(105, 7, 252)" :strong="true"
              >导出成员名单</n-button
            >
          </div>
          <n-data-table
            :columns="columns"
            :data="data"
            :loading="loading"
            size="large"
            :pagination="pagination"
            :row-key="(row) => row.uid"
            @update:checked-row-keys="do_ckeck"
            :single-line="false"
          ></n-data-table>
        </div>
      </div>
    </div>
    <toast
      v-if="if_toast"
      :title="title"
      delete="member"
      @show_toast="show_toast"
      @show_toast_simple="show_toast_simple"
      :checked="checked"
    ></toast>
  </div>
</template>

<script>
import VC from "./master_admission";
import HTitle from "../../title.vue";
import { NDataTable, NButton } from "naive-ui";
import Toast from "../../toast/toast.vue";

export default {
  name: "MasterAdmission",
  components: {
    HTitle,
    NDataTable,
    NButton,
    Toast,
  },
  data() {
    return VC.data;
  },
  methods: {
    do_ckeck: VC.do_ckeck,
    show_toast: VC.show_toast,
    show_toast_simple: VC.show_toast_simple,
    delete_member:VC.delete_member,
    add_member:VC.add_member,
  },
  created: VC.created,
};
</script>

<style scoped>
@import url("./master_admission.css");
@import url("../../../../style/master_table.css");
</style>