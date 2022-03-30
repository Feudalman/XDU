<template>
  <div id="submit_block">
    <div class="title text_unselect">U报名后台管理系统-登录</div>
    <div class="input_block">
      <div class="item">
        <img src="../../data/imgs/角色选择.png" class="img" />
        <span class="text">角色</span>
        <n-space vertical style="width: 40%">
          <n-select :options="options" v-model:value="role"></n-select>
        </n-space>
      </div>
      <div class="item input_item">
        <img src="../../data/imgs/账号.png" class="img" />
        <span class="text">账号</span>
        <my-input
          @get_user="get_user"
          :index="1"
          my_type="text"
          my_text="账号"
        ></my-input>
      </div>
      <div class="item input_item">
        <img
          src="../../data/imgs/密码.png"
          style="height: 45px; padding-left: 0px"
          alt=""
        />
        <span class="text">密码</span>
        <my-input
          @get_user="get_user"
          :my_type="t_or_p"
          :index="2"
          my_text="密码"
        ></my-input>
        <img
          @click="switch_isSeen"
          :src="isSeen"
          style="height: 2.5vh; cursor: pointer"
        />
      </div>
    </div>
    <div class="fail_to_login_in" v-show="isFail_login">
      {{ warning }}
    </div>
    <n-button color="#676ee4" @click="login">登 录</n-button>
  </div>
</template>

<script>
import { NSpace, NSelect, NButton } from "naive-ui";
import MyInput from "../../components/input.vue";
import VC from "./submit_block";
export default {
  name: "submit-block",
  data() {
    return VC.data;
  },
  components: {
    NSpace,
    NSelect,
    MyInput,
    NButton,
  },
  computed: {
    isSeen: VC.computed.isSeen,
    t_or_p: VC.computed.t_or_p,
  },
  methods: {
    // 在填入账号或密码时触发
    get_user: VC.get_user,
    switch_isSeen: VC.switch_isSeen,
    login: VC.login,
  },
  mounted() {
    document.onkeyup = (e) => {
      if (e.code == "Enter") {
        this.login();
        // console.log("1");
      }
    };
  },
};
</script>


<style scoped >
@import url("../../style/page_general.css");
@import url("./submit_block.css");

</style>
