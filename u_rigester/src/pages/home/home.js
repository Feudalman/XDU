
const VC = {
    data:{
        // user_info
    },
    beforeCreate: function () {
        console.log(this.$localData("get","USER_INFO"));
        console.log(this.$localData("get","Token"));
    }
}


export default VC ;