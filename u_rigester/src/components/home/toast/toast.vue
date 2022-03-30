<template>
  <div class="toast_block">
    <!-- 弹窗头部，展示信息和按钮 -->
    <div class="top">
      <div class="div">
        <span class="span">{{ title }}</span>
        <div class="button">
          <n-button @click="quit">取 消</n-button>
          <n-button class="bg" @click="confirmed">{{ confirm }}</n-button>
        </div>
      </div>
    </div>
    <!-- 主要部分 -->
    <div class="toast_main">
      <component
        :is="component"
        :delete="delete"
        ref="toast_main"
        :checked="checked"
      ></component>
    </div>
  </div>
</template>

<script>
import VC from "./toast.js";
import { NButton } from "naive-ui";
import Error from "./error/error.vue";
import TimeConfigure from "./time_configure/time_configure.vue";
import DepartmentConfigure from "./DepartmentConfigure/DepartmentConfigure.vue";
import DepartmentEdit from "./DepartmentEdit/DepartmentEdit.vue";
import DepartmentDelete from "./DepartmentDelete/DepartmentDelete.vue";
import DepartmentInterviewer from "./DepartmentInterviewer/DepartmentInterviewer.vue";
import AddMember from "./AddMember/AddMember.vue";
import EditEliminateInfo from "./EditEliminateInfo/EditEliminateInfo.vue"
import EditInterviewInfo from "./EditInterviewInfo/EditInterviewInfo.vue"

export default {
  name: "toast",
  components: {
    NButton,
    Error,
    TimeConfigure,
    DepartmentConfigure,
    DepartmentEdit,
    DepartmentDelete,
    DepartmentInterviewer,
    AddMember,
    EditEliminateInfo,
    EditInterviewInfo
  },
  data() {
    return VC.data;
  },
  props: {
    title: String,
    delete: String,
    checked:Array
  },
  methods: VC.methods,
  created: VC.created,
};
</script>


<style scoped>
.toast_block {
  position: fixed;
  top: 31.5%;
  left: 38.8%;
  width: 40%;
  height: 33.5%;
  border-radius: 20px;
  background-color: rgb(245, 245, 245);
  box-shadow: 6px 5px 3px rgb(113, 122, 238);
  overflow: hidden;
}

.toast_block .top {
  width: 100%;
  height: 15%;
  background-color: white;
  display: flex;
  justify-content: center;
}
.toast_block .top .div {
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.toast_block .top .div .span {
  font-size: 150%;
  font-weight: 700;
}

.toast_block .top .button {
  display: flex;
  align-items: center;
  justify-content: right;
  width: 30%;
  height: 100%;
}

.toast_block .top .button button {
  width: 35%;
  height: 73%;
  margin-left: 10%;
  border-radius: 20px;
  color: #717af1;
  font-size: 120%;
}
.toast_block .top .button .bg {
  background-color: #717af1;
  color: white;
}

.toast_main {
  width: 100%;
  height: 85%;
}
</style>