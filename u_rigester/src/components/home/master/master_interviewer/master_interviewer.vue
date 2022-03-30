<template>
  <div id="master">
    <div class="background"></div>
    <div style="width: 100%; height: 100%">
      <h-title :bottom="true" :title="title" welcome="管理员"></h-title>
      <div class="container">
        <div class="add_interviewer">
          <inter-block @show_toast="show_toast"></inter-block>
        </div>
        <div class="interviewers">
          <div class="box">
            <inters-block
              v-for="item in interviewer"
              key="item.ID"
              :item="item"
              @show_toast="show_toast"
            ></inters-block>
          </div>
        </div>
      </div>
    </div>
  </div>
  <toast
    :delete="det_type"
    :title="title"
    v-if="if_toast"
    @show_toast="show_toast"
    @show_toast_simple="show_toast_simple"
  ></toast>
</template>

<script>
import VC from "./master_interviewer";
import HTitle from "../../title.vue";
import InterBlock from "./interviewer_block/interviewer_block.vue";
import Toast from "../../toast/toast.vue";
import IntersBlock from "./interviewers_block/interviewers_block.vue";

export default {
  name: "MasterInterviewer",
  components: {
    HTitle,
    InterBlock,
    Toast,
    IntersBlock,
  },
  data() {
    return VC.data;
  },
  methods: {
    show_toast: VC.show_toast,
    show_toast_simple: VC.show_toast_simple,
  },
};
</script>

<style scoped>
@import url("./master_interviewer.css");
</style>