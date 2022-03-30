<template>
  <div id="master">
    <!-- 背景颜色图 -->
    <div class="background"></div>
    <!-- 主界面 -->
    <div id="main_container">
      <!-- 顶部的东西 -->
      <h-title
        :bottom="true"
        welcome="超级管理员"
        title="西电青年志愿者协会"
      ></h-title>
      <!-- 下面的好东西 -->
      <div class="main">
        <!-- 招新配置项 -->
        <div class="configure">
          <sm-configure
            @show_toast="show_toast"
            type_="date"
            :info="con_date.info"
          ></sm-configure>
          <sm-configure
            @show_toast="show_toast"
            type_="club"
            :info="con_club.info"
          ></sm-configure>
        </div>
        <!-- 部门 -->
        <div class="club">
          <div class="div">
            <sm-department
              @show_toast="show_toast"
              v-for="(item, index) in departments"
              key="item.id"
              :item="item"
            ></sm-department>
          </div>
        </div>
      </div>
    </div>
    <!-- 弹窗 -->
    <toast
      v-if="if_toast"
      :title="title"
      @show_toast="show_toast"
      @show_toast_simple="show_toast_simple"
      @modify_info_time="modify_info_time"
      @setDepartments="setDepartments"
    ></toast>
  </div>
</template>

<script>
import HTitle from "../../title.vue";
import SmConfigure from "../super_block_configure/super_block_configure.vue";
import SmDepartment from "../super_block_department/super_block_department.vue";
import Toast from "../../toast/toast.vue";
import VC from "./super_configure";

export default {
  name: "SuperConfigure",
  components: {
    HTitle,
    SmConfigure,
    SmDepartment,
    Toast,
  },
  data() {
    return VC.data;
  },
  methods: {
    show_toast: VC.show_toast,
    modify_info_time: VC.modify_info_time,
    timestampToTime: VC.timestampToTime,
    show_toast_simple: VC.show_toast_simple,
    setDepartments: VC.setDepartments,
  },
  created: VC.created,
};
</script>

<style scoped>
@import url("./super_configure.css");
</style>