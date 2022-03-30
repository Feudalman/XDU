<template>
  <div class="time_configure">
    <span>选择开始和结束时间</span>
    <n-date-picker
      v-model:value="time"
      type="datetimerange"
      class="time_picker"
      size="large"
    ></n-date-picker>
    <div class="warning" v-show="show_warning">请先选择日期再确认！</div>
  </div>
</template>

<script>
import { NDatePicker } from "naive-ui";
import Api from "../../../../api/api"

export default {
  name: "time_configure",
  components: {
    NDatePicker,
  },
  data() {
    return {
      time: 0,
      show_warning: false,
    };
  },
  methods: {
    // 这个方法是由父组件toast调用的
    // 当点击toast的确认按钮触发
    confirm: async function () {
      // 如果没有添加日期
      if (this.time == 0) {
        this.show_warning = true;
        return false
      } else {
        // 设置参数，调用API发送POST请求
        const params = {
          start : this.time[0],
          end : this.time[1],
        }
        const Token = this.$localData("get","Token");
        const res = await Api.SetRecruitmentDate(Token,params);
        return true
      }
    },
  },
};
</script>


<style scoped>
.time_configure {
  width: 60%;
  position: relative;
  top: 15%;
  left: 5%;
}

.time_configure span {
  font-size: 130%;
  font-weight: 600;
}

.time_configure .time_picker {
  margin-top: 1%;
}

.time_configure .warning {
  width: 100%;
  text-align: center;
  font-size: 120%;
  color: red;
}
</style>
