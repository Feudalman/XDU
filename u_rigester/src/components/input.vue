<template>
  <input
    @input="set_user"
    :type="my_type"
    :placeholder="placeholder"
    v-model="value"
  />
</template>

<script>
var account = "";
var password = "";

export default {
  name: "my_input",
  data() {
    return {
      value: "",
    };
  },
  props: {
    my_type: String,
    my_text: String,
    index: Number,
  },
  computed: {
    placeholder: function () {
      return "请输入" + this.my_text;
    },
  },
  methods: {
    set_user: function () {
      // console.log(this.value);
      const value = {
        type: this.index == 1 ? "account" : "password",
        input: this.value,
      };
      this.$emit("get_user", value); //当value改变触发父组件获取数据
    },
  },
};
</script>

<style scoped>
input {
  height: 60%;
  border: none;
  outline: none;
  padding-left: 10px;
  font-size: 17px;
  color: gray;
  width: 45vh;
}
input::-webkit-input-placeholder {
  /* // 针对 谷歌 内核 */
  color: rgb(184, 182, 182);
}
input:-moz-placeholder {
  /* // 火狐 */
  color: rgb(184, 182, 182);
}
input:-ms-input-placeholder {
  /* // 微软ie */
  color: rgb(184, 182, 182);
}
</style>