
<template>
  <div style="height: 9%" :class="{ bottom: bottom }" class="h_title">
    <div class="left">{{title}}</div>
    <div class="right">
      <div style="font-size:130%;">欢迎回来，{{ welcome }} ~</div>
      <n-button ghost size="tiny" round @click="sign_off">退 出</n-button>
    </div>
  </div>
</template>

<script>
/*
这个样子传参
:bottom="true" welcome="超级管理员"
*/
import { NButton } from "naive-ui";

export default {
  name: "h_title",
  components: {
    NButton,
  },
  data() {
    return {};
  },
  props: {
    bottom: Boolean,
    welcome: String,
    title:String
  },
  methods:{
    sign_off:function(){
      this.$router.push("/");
      this.$localData('clean',"Token");
    }
  }
};
</script>

<style scoped>
* {
  font-size: 20px;
}
.h_title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.bottom {
  border-bottom: 2px solid rgb(235, 232, 232);
}

.left {
  margin-left: 5vh;
  font-size: 115%;
  color: whitesmoke;
}
.right {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  margin-right: 5vh;
  color: whitesmoke;
}
.n-button{
    height: 50px;
    width:100px;
    margin-left: 2vh;
    color: white;
}
</style>