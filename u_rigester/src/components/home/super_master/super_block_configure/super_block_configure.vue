<template>
  <div class="item">
    <div class="title">{{ title }}</div>
    <div class="info">{{ info }}</div>
    <img :src="src" class="img" @click="toast" />
  </div>
</template>

<script>
export default {
  name: "SmConfigure",
  data() {
    return {
      show: true,
    };
  },
  props: {
    type_: {
      type: String,
    },
    info: String,
  },
  computed: {
    title: function () {
      return this.type_ == "date" ? "招新日期设置" : "新增部门";
    },
    src: function () {
      return this.type_ == "date"
        ? require("@/data/imgs/配置招新日期+新增面试官ID.png")
        : require("@/data/imgs/新增部门.png");
    },
  },
  methods: {
    toast: function () {
      this.$emit("show_toast", this.type_);
    },
  },
};
</script>


<style scoped>
.item {
  height: 100%;
  width: 22.5%;
  margin-right: 2.5%;
  border-radius: 10px;
  background-color: white;
}
.item .title {
  position: relative;
  top: 20%;
  left: 10%;
  font-size: 150%;
  font-weight: 700;
}
.item .info {
  position: relative;
  font-size: 85%;
  top: 20%;
  left: 10%;
  width: 60%;
  height: 40%;
  /* border: 1px solid black; */
}
.item .img {
  position: relative;
  left: 67%;
  bottom: 55%;
  height: 50%;
  width: 21.5%;
  cursor: pointer;
}
</style>