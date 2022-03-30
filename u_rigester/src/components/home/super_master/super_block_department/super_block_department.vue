<template>
  <div class="item_dep">
    <div class="title">
      <span>ID：{{ item.id }}</span>
      <img :src="_delete" style="cursor: pointer" @click="delete_" />
    </div>
    <div class="name">
      <img
        :src="name"
        style="height: 80%; position: relative; bottom: 26%"
        alt="name"
      />
      <span class="_name overflow" :title="item.name">{{ item.name }}</span>
      <img :src="edit" class="edit" @click="edit_"/>
    </div>
    <div class="count overflow">
      <span :title="item.name">账号：{{ item.account }}</span>
      <br />
      <span :title="item.password">密码：{{ item.password }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "sm_department",
  data() {
    return {
      _delete: require("@/data/imgs/错误-方框.png"),
      name: require("@/data/imgs/复制.png"),
      edit: require("@/data/imgs/编辑.png"),
    };
  },
  props: {
    item: Object,
    // { "name": "test1", "account": "testte2", "password": "12345678qqcom", "id": 43 }
  },
  methods: {
    delete_: function () {
      // 存一下，删除的时候要用ID
      this.$localData("set","DepartmentId",this.item.id);
      this.$emit("show_toast","delete");
    },
    edit_:function(){
      // 存一下，编辑的时候要用ID
      this.$localData("set","DepartmentId",this.item.id);
      this.$emit("show_toast","edit");
    }
  },
};
</script>

<style scoped>
.item_dep {
  width: 22.5%;
  height: 17vh;
  margin-top: 2.4vh;
  margin-right: 2.5%;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 3px 6px 0px rgba(110, 16, 251, 0.3);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.item_dep .title {
  width: 90%;
  height: 15%;
  padding-top: 3%;
  font-size: 70%;
  color: rgb(128, 128, 128);
  display: flex;
  justify-content: space-between;
  /* border: 1px solid black; */
}
.item_dep .title .delete {
  padding-right: 1.5%;
  padding-left: 1.5%;
  border: 1px solid rgb(128, 128, 128);
  cursor: pointer;
  border-radius: 3px;
}
.item_dep .name {
  width: 90%;
  height: 25%;
  font-size: 140%;
  /* border: 1px solid black; */
}
.item_dep .count {
  width: 80%;
  height: 40%;
  font-size: 75%;
}

/* 超出文本边点 */
.overflow {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.edit {
  transform: scale(0.15);
  position: relative;
  bottom: 185%;
  left: 63.5%;
  cursor: pointer;
}
._name {
  position: relative;
  top: -12%;
  left: 3%;
  width: 75%;
  display: inline-block;
  font-weight: 550;
  /* border: 1px solid black; */
}
</style>
