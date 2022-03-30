<template>
  <div class="create_department">
    <div id="name">
      <n-space vertical>
        <span>部门全称</span>
        <n-input
          v-model:value="name"
          placeholder="请输入10位以内中英文字符的部门全称，如xx部"
        ></n-input>
        <div class="warning">{{ NET }}</div>
      </n-space>
    </div>
    <div id="account">
      <n-space vertical>
        <span>配置部门管理账号</span>
        <n-input
          v-model:value="account"
          placeholder="可包含12~18位英文字符/数字/@."
        ></n-input>
        <div class="warning">{{ AOT }}</div>
      </n-space>
    </div>
    <div id="password">
      <n-space vertical>
        <span>配置部门管理密码</span>
        <n-input
          v-model:value="password"
          placeholder="可包含12~18位英文字符/数字/@."
        ></n-input>
        <div class="warning">{{ PST }}</div>
      </n-space>
    </div>
  </div>
</template>

<script>
import { NInput, NSpace } from "naive-ui";
import Api from "../../../../api/api";

export default {
  name: "DepartmentEdit",
  components: {
    NInput,
    NSpace,
  },
  data() {
    return {
      name: "",
      account: "",
      password: "",
      NET: "",
      AOT: "",
      PST: "",
    };
  },
  methods: {
    confirm: async function () {
      // 父组件调用此方法发送请求
      // 如果校验发现有空未填
      if (!this.if_empty()) {
        return false;
      }
      const params = {
        name: this.name,
        account: this.account,
        password: this.password,
      };
      const Token = this.$localData("get", "Token");
      const id = this.$localData("get","DepartmentId")
      const res = await Api.EditDepartment(Token, params,id);
      console.log(res);
      if (this.if_createD_success(res.data.msg)) {
        return true;
      }
      return false;
    },
    // 校验是否为空
    if_empty() {
      let count = 0;
      if (this.name == "") {
        this.NET = "部门全称不能为空！";
        count++;
      }
      if (this.account == "") {
        this.AOT = "部门账号不能为空！";
        count++;
      }
      if (this.password == "") {
        this.PST = "部门密码不能为空！";
        count++;
      }
      if (count == 0) {
        return true;
      }
      return false;
    },
    // 校验部门是否创建成功
    if_createD_success(msg) {
      if (msg == "名字非法，请更换") {
        this.clear();
        this.NET = "部门名称重复或非法";
        return false;
      } else if (msg == "账号重复，请更换") {
        this.clear();
        this.AOT = msg;
        return false;
      } else if (msg == "密码格式错误") {
        this.clear();
        this.PST = msg;
        return false;
      }
      return true;
    },
    clear() {
      this.NET = "";
      this.PST = "";
      this.AOT = "";
    },
  },
};
</script>

<style scoped>
.create_department {
  width: 90%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
}

.create_department #name {
  width: 60%;
  position: relative;
  top: 12%;
}

.create_department #account {
  width: 45%;
  position: relative;
}

.create_department #password {
  width: 45%;
  position: relative;
  left: 5%;
}

.create_department span {
  font-size: 130%;
  font-weight: 600;
}

.create_department .warning {
  color: red;
  position: absolute;
}
</style>
