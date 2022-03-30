import Api from "../../../api/api"

const VC = {
    data: {
    },
    beforeCreate: async function () {
        // console.log(this.$localData("get","USER_INFO"));
        // console.log(this.$localData("get","Token"));
        const Token = this.$localData('get', "Token");
        // console.log(Token)
        // 如果没有Token,回去重新登录
        if (Token == null) {
            this.$router.push('/')
            alert("请重新登陆！");
        }
        // 拿到所有部门信息
        const Departments = await Api.GetAllDepartments(Token);
        this.$localData("set","Departments",Departments.data.departments);
    }
}


export default VC;