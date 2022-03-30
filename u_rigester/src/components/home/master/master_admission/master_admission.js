import Api from "../../../../api/api.js"

const VC = {
    data: {
        title_: "西电青年志愿者协会 | 青鸢工作室",
        title: "",
        columns: [
            {
                title: "select",
                type: "selection"
            }, {
                title: "姓名",
                key: "name"
            }, {
                title: "性别",
                key: "sex"
            }, {
                title: "联系电话",
                key: "phone"
            }, {
                title: "邮箱",
                key: "email"
            }, {
                title: "学号",
                key: "student_num"
            }, {
                title: "楼号",
                key: "docu"
            }, {
                title: "大类"
            }

        ],
        loading: true,
        data: [],
        pagination: {
            pageSize: 10,
        },
        if_toast: false,
        title: "",
        checked: []
    },
    do_ckeck: function (e) {
        this.checked = e;
    },
    show_toast_simple() {
        this.if_toast = !this.if_toast;
    },
    show_toast() {
        this.show_toast_simple();
    },
    delete_member() {
        this.title = "是否确认删除"
        this.show_toast_simple();
    },
    add_member() {
        this.title = "成员信息配置"
        this.show_toast_simple();
    },
    created: async function () {
        const Token = this.$localData("get", "Token");
        const res = await Api.GetAdmissionInfo(Token);
        console.log(res);
        if (res.data.sum == 0) {
            console.log("部门暂无录取人员！");
        } else if (res.data.sum > 0) {
            this.data = res.data.users;
        }
        this.loading = false;
    }
}

export default VC