<template>
  <div id="master">
    <div class="background"></div>
    <div style="width: 100%; height: 100%">
      <h-title :bottom="true" :title="title_" welcome="管理员"></h-title>
      <div class="main_table">
        <div class="table">
          <div class="table_title">本部门已淘汰数据</div>
          <div>
            <n-data-table
              :columns="columns"
              :data="eliminate"
              :pagination="pagination"
              size="large"
              :loading="loading"
              :single-line="false"
            ></n-data-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HTitle from "../../title.vue";
import Api from "../../../../api/api";
import { NDataTable } from "naive-ui";

export default {
  name: "MasterEliminate",
  components: {
    HTitle,
    NDataTable,
  },
  data() {
    return {
      title_: "西电青年志愿者协会 | 青鸢工作室",
      title:"",
      eliminate: [
        // {
        //   email: "1721261216@qq.com",
        //   intro: "剧本而已剧本而已剧本而已剧本而已剧本而已剧本而已剧本而已剧本而已剧本而已剧本而已剧本而已剧本而已",
        //   name: "赖沐曦",
        //   phone: "15521144359",
        //   sex: "男",
        //   status: "已经淘汰",
        //   student_num: "20009200198",
        //   uid: 4,
        // },
      ],
      columns: [
        {
          title: "姓名",
          key: "name",
          width:200,
        },
        {
          title: "性别",
          key: "sex",
          width:100,
        },
        {
          title: "联系电话",
          key: "phone",
        },
        {
          title: "邮箱",
          key: "email",
        },
        {
          title: "面评评价",
          key: "intro",
          width:200,
          ellipsis: {
            tooltip: true,
          },
        },
        {
          title: "学号",
          key: "student_num",
          width:200
        },
        {
          title: "评分",
          key: "grade",
          width:100,
        },
        {
          title: "状态字段",
          key: "status",
          width:200,
          className:"status"
        },
      ],
      pagination: {
        pageSize: 11,
      },
      loading: true,
    };
  },
  created: async function () {
    const Token = this.$localData("get", "Token");
    const res = await Api.GetEliminateInfo(Token);
    if (res.data.sum == 0) {
      console.log("暂无被淘汰者！");
    } else if (res.data.sum > 0) {
      for (let i = 0; i < res.data.users.length; i++) {
        if (res.data.users[i].status == 4) {
          res.data.users[i].status = "已淘汰";
        }
      }
      this.eliminate = res.data.users;
    }
    this.loading = false;
    console.log(this.eliminate);
  },
};
</script>

<style scoped>
@import url("../../../../style/master_table.css");
</style>