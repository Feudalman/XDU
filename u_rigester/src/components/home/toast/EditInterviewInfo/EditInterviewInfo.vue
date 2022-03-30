<template>
  <div class="EditInterviewInfo">
    <div class="choose_int_time">
      <span>选择面试时间</span>
      <n-date-picker
        v-model:value="time"
        :default-value="Date.now()"
        type="datetime"
        placeholder="请选择时间"
      ></n-date-picker>
      <div class="warning">{{ warning1 }}</div>
    </div>
    <div class="choose_int_place">
      <span>面试地点说明</span>
      <n-input v-model:value="place" placeholder="请输入面试地点"></n-input>
      <div class="warning">{{ warning2 }}</div>
    </div>
    <div class="master_connect">
      <span>负责人联系方式</span>
      <n-input
        v-model:value="connect"
        placeholder="请输入负责人联系方式，方便用户遇事联系"
      ></n-input>
      <div class="warning">{{ warning3 }}</div>
    </div>
  </div>
</template>

<script>
import { NInput, NDatePicker } from "naive-ui";

export default {
  name: "EditInterviewInfo",
  components: {
    NInput,
    NDatePicker,
  },
  data() {
    return {
      warning1: "",
      warning2: "",
      warning3: "",
      time: 0,
      place: "",
      connect: "",
    };
  },
  props: {
    checked: Array,
  },
  methods: {
    confirm: function () {
      const params = {
        time: this.time,
        place: this.place,
        connect: this.connect,
      };
      if (params.time == "") {
        this.warning1 = "请选择时间！";
      } else if (params.place == "") {
        this.warning2 = "请选择地点！";
      } else if (params.connect == "") {
        this.warning3 = "请填写负责人联系方式！";
      }
      console.log(params);
      console.log(this.checked);
      return false;
    },
  },
  created() {
    this.time = Date.now();
  },
};
</script>

<style scoped>
.EditInterviewInfo {
  width: 100%;
  height: 100%;
}

.EditInterviewInfo span {
  font-size: 120%;
  font-weight: 600;
}

.EditInterviewInfo .warning {
  color: red;
  position: absolute;
}

.choose_int_time {
  width: 35%;
  position: relative;
  left: 5%;
  top: 10%;
}

.choose_int_place {
  width: 50%;
  position: relative;
  left: 45%;
  bottom: 13%;
}

.master_connect {
  width: 65%;
  position: relative;
  left: 5%;
}
</style>