<template>
  <div id="super_master">
    <sm-nav></sm-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import VC from "./super_master";
import SmNav from "../../../components/home/super_master/nav/SMNav.vue";

export default {
  name: "SuperMaster",
  components: {
    SmNav,
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
@import url('./super_master.css');
</style>