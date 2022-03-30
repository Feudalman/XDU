<template>
    <div class="interviewer_block">
        <div class="title">新增面试官</div>
        <div class="sec_title">配置面试官ID</div>
        <img :src="src" alt="" @click="show_toast">
    </div>
</template>

<script>
export default{
    name:"InterBlock",
    data(){
        return {
            src:require("@/data/imgs/配置招新日期+新增面试官ID.png")
        }
    },
    methods:{
        show_toast:function(){
            this.$emit("show_toast","add_inter");
        }
    }
}
</script>

<style scoped>
.interviewer_block{
    width: 22.5%;
    height: 100%;
    background-color: white;
    border-radius: 10px;
}

.interviewer_block .title{
    font-size: 170%;
    font-weight: 600;
    position: relative;
    left: 10%;
    top: 25%;
}

.interviewer_block .sec_title{
    position:relative;
    left: 12%;
    top: 33%;
    font-size: 110%;
    font-weight: 500;
}

.interviewer_block img{
    width: 20%;
    position: relative;
    left: 70%;
    bottom: 20%;
    cursor: pointer;
}
</style>