<template>
  <div id="master">
    <m-nav></m-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import VC from "./master";
import MNav from "../../../components/home/master/nav/MNav.vue"

export default {
  name: "master",
  components:{
    MNav
  },
  data() {
    return {};
  },
  
  computed: {},
  methods: {},
  beforeCreate: VC.beforeCreate,
};
</script>

<style scoped>
@import url("./master.css");
</style>