import Api from "../../api/api"

const VC = {
    data: {
        // 角色选择
        options: [
            {
                label: "超级管理员",
                value: "super_master",
            },
            {
                label: "管理员",
                value: "master",
            },
        ],
        role: "please select",
        // 账号信息
        account: "",
        password: "",
        // 密码是否可见
        Seen: false,
        // 红色 账号验证错误提示 是否显示
        isFail_login: true,
        // 错误提示
        warning: ""
    },
    // 在填入账号或密码时触发
    get_user: function (data) {
        if (data.type == "account") {
            this.account = data.input;
        } else if (data.type == "password") {
            this.password = data.input;
        }
    },
    // 密码可见
    switch_isSeen: function () {
        this.Seen = !this.Seen;
    },
    // 登录
    async login() {
        // 账号、密码、角色如未选择进行提示
        if (this.account == "" || this.password == "") {
            this.warning = "账号/密码不可为空"
        } else if (this.role == "please select") {
            this.warning = "请选择角色"
        } else {
            // 请求传参
            const params = {
                account: this.account,
                password: this.password,
            };
            // res接受请求返回值
            let res ;
            // 组织登录和部门登录不同
            if(this.role == "super_master"){
                res = await Api.OrganizationLogin(params);
                // console.log(this.role);
            } else{
                res = await Api.DepartmentLogin(params);
                // console.log(this.role);
            }
            // 验证错误
            if (res.data.code == 1004) {
                this.warning = "角色/账号/密码有误，请确认无误后登录"
            } else {
                // 成功请求！
                this.warning = ""
                // console.log(res);
                // 接下来应该把res存入VueX(目前暂存本地)
                this.$localData('set', "USER_INFO", res.data);
                this.$localData('set', "Token", res.data.accessToken);
                // 然后跳转到主界面
                // 根据选择的角色来决定跳转的页面
                const home = (this.role == "super_master") ? "super_master" : "master";
                this.$router.push(home);
            }
        }
    },
    computed: {
        isSeen: function () {
            return this.Seen
                ? require("@/data/imgs/密码可见.png")
                : require("@/data/imgs/密码不可见.png");
        },
        t_or_p: function () {
            return this.Seen ? "text" : "password";
        },
    },
}

export default VC;