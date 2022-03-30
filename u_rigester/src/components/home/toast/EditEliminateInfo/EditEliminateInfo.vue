<template>
  <div
    style="
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    "
  >
    <div class="EditEliminateInfo">
      <n-input
        v-model:value="eli_info"
        type="textarea"
        :autosize="{
          minRows: 15,
          maxRows: 20,
        }"
        size="large"
        maxlength="200"
        show-count
        clearable
        :placeholder="placeholder"
      ></n-input>
    </div>
  </div>
</template>

<script>
import { NInput } from "naive-ui";

export default {
  name: "EditEliminateInfo",
  components: {
    NInput,
  },
  data() {
    return {
      placeholder: "请输入短信内容！",
      eli_info:
        "xx同学你好：\n感谢同学投递【xxxx部门】，经评估认为您暂时与本部门需求不匹配，\n也预祝同学成功加入其他心仪部门 ♥\n（如非本人请忽略本条信息)",
    };
  },
  props: {
    checked: Array,
  },
  methods: {
    confirm: function () {
      if (this.eli_info == "") {
        this.placeholder = "短信内容不可为空！！！";
      }
      console.log(this.checked);
      return false;
    },
  },
};
</script>

<style scoped>
.EditEliminateInfo {
  width: 100%;
  height: 100%;
}
</style>