<template>
  <div class="DepartmentDelete">
    <span>{{ info }}</span>
  </div>
</template>

<script>
import Api from "../../../../api/api";

export default {
  name: "DepartmentDelete",
  data() {
    return {
      info: "",
    };
  },
  props: {
    delete: String,
    checked:Array
  },
  methods: {
    confirm: async function () {
      const Token = this.$localData("get", "Token");
      const id = this.$localData("get", "DepartmentId");
      if (this.delete == "interviewer") {
        // 这里应该发送对应的interviewer的请求
        return false;
      } else if (this.delete == "member") {
        const deleting = this.$emit("getData");
        // 这里应该发送删除的请求
        console.log(this.checked);// 选中的人
        return false;
      } else {
        const res = await Api.DeleteDepartment(Token, id);
      }
      return true;
    },
  },
  created() {
    if (this.delete == "interviewer") {
      this.info = "删除后该用户将不能使用面试官端-小程序功能，请确认是否删除？";
    } else if (this.delete == "member") {
      this.info = `删除后所选成员将从部员名单中移除，请自行通知目标同学!!`;
    } else {
      this.info =
        "删除后该部门信息及其相关数据将被删除清空，请确认是否进行删除";
    }
  },
};
</script>

<style scoped>
.DepartmentDelete {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.DepartmentDelete span {
  font-size: 150%;
  font-weight: 600;
}
</style>