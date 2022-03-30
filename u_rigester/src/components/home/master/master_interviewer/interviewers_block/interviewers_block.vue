<template>
  <div class="interviewers_block">
    <div class="name">{{ item.name }}</div>
    <div class="ID">ID：{{ item.ID }}</div>
    <img :src="src" alt="" @click="show_toast">
  </div>
</template>

<script>
export default {
  name: "IntersBlock",
  props: {
    item: Object,
  },
  data() {
    return {
      src:require("@/data/imgs/错误-方框.png")
    };
  },
  methods:{
    show_toast:function(){
      this.$emit("show_toast","delete");
    }
  }
};
</script>

<style scoped>
.interviewers_block {
  width: 22.5%;
  height: 14vh;
  background-color: white;
  border-radius: 10px;
  margin-bottom: 1.8%;
  margin-right: 2.5%;
  box-shadow: 0px 3px 6px 0px rgba(110, 16, 251, 0.3);
}

.interviewers_block .name{
  font-size: 150%;
  letter-spacing: 0.12rem;
  font-weight: 600;
  position: relative;
  top: 22%;
  left: 10%;
}

.interviewers_block .ID{
  font-size: 120%;
  position: relative;
  top: 30%;
  left: 10%;
}

.interviewers_block img{
  width: 8%;
  position: relative;
  bottom: 20%;
  left: 80%;
  cursor: pointer;
}
</style>