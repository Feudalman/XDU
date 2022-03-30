<template>
  <div>Home</div>
</template>

<script>
import VC from "./home";

export default {
  name: "Home",
  data() {
    return VC.data;
  },
  computed: {},
  methods: {},
  beforeCreate: VC.beforeCreate,
};
</script>
