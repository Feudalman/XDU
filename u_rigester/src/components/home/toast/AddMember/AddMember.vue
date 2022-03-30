<template>
  <div class="AddMember">
    <div style="width: 28%">
      <span>成员姓名:</span>
      <n-input placeholder="请输入成员姓名" v-model:value="add.name"></n-input>
    </div>
    <div style="width: 28%">
      <span>成员学号:</span>
      <n-input
        placeholder="请输入成员学号"
        v-model:value="add.student_num"
      ></n-input>
    </div>
    <div style="width: 15%">
      <span>性别:</span>
      <n-select v-model:value="add.sex" :options="option"></n-select>
    </div>
    <div style="width: 40%">
      <span>联系电话:</span>
      <n-input
        placeholder="请输入成员联系电话"
        v-model:value="add.phone"
      ></n-input>
    </div>
    <div style="width: 40%">
      <span>邮箱:</span>
      <n-input placeholder="请输入成员邮箱" v-model:value="add.email"></n-input>
    </div>
    <div style="width: 40%">
      <span>楼号:</span>
      <n-input placeholder="请输入成员楼号" v-model:value="add.dor"></n-input>
    </div>
    <div style="width: 40%">
      <span>大类:</span>
      <n-input placeholder="请输入成员大类" v-model:value="add.class"></n-input>
    </div>
    <div class="warning">{{ warning }}</div>
  </div>
</template>

<script>
import { NInput, NSelect } from "naive-ui";

export default {
  name: "AddMember",
  components: {
    NInput,
    NSelect,
  },
  data() {
    return {
      warning:"",
      add: {
        name: "",
        student_num: "",
        sex: "男",
        phone: "",
        email: "",
        dor: "",
        class: "",
      },
      option: [
        {
          value: "男",
          label: "男",
        },
        {
          value: "女",
          label: "女",
        },
      ],
    };
  },
  methods: {
    confirm: function () {
      const params = this.add;
      for (let i in params) {
        if (params[i] == "") {
          this.warning = "请将要添加者的信息填写完善！";
          return false;
        }
      }
      console.log(this.add);
    },
  },
};
</script>

<style scoped>
.AddMember {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  align-content: space-around;
}

.AddMember span {
  font-size: 120%;
  font-weight: 600;
}

.AddMember .warning {
  width: 100%;
  height: 5%;
  color: red;
  text-align: center;
}
</style>