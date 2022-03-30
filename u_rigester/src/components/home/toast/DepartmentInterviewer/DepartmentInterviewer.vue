<template>
  <div id="interviewer">
    <span class="title">面试官小程序用户ID</span>
    <div style="width: 60%">
      <n-input
        placeholder="请输入目标面试官的数字ID"
        v-model:value="value"
      ></n-input>
    </div>
    <span class="warning">{{ warning }}</span>
  </div>
</template>

<script>
import { NInput } from "naive-ui";
import Api from "../../../../api/api";

export default {
  name: "DepartmentInterview",
  components: {
    NInput,
  },
  data() {
    return {
      value: "",
      warning: "",
    };
  },
  methods: {
    confirm: async function () {
      if (this.value == "") {
        this.warning = "不可为空！";
        return false;
      } else {
        // 这个，绑定value返回的自动是string类型的
        // 所以转一下，这个函数只会截到数字，会剔除字符
        const value = parseInt(this.value);
        if (this.value != value + "") {
          this.warning = "请填写数字！";
          return false;
        }
        const Token = this.$localData("get", "Token");
        const res = await Api.SetInterviewerID(Token, value);
        console.log(res);
        return true;
      }
    },
  },
};
</script>

<style scoped>
#interviewer {
  position: relative;
  top: 25%;
  left: 15%;
}

#interviewer .title {
  display: block;
  font-size: 120%;
  font-weight: 600;
  margin-bottom: 1%;
}

#interviewer .warning {
  color: red;
}
</style>