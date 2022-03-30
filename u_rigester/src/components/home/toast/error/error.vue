<template>
    <div>{{info}}</div>
</template>

<script>
export default{
    name:"error",
    data(){
        return {
            info:"发生错误，请稍后重试！谢谢！"
        }
    }
}
</script>

<style scoped>
div{
    width: 100%;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 200%;
}
</style>
