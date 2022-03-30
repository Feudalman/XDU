

const VC = {
    data: {
        component: "error",
        confirm: "确认"
    },
    methods: {
        // 点击取消，调用父组件里面的show_toast
        quit: function () {
            this.$emit("show_toast_simple");
        },
        // 点击确认，调用子组件中的api
        // confirm 返回一个promise对象 要解开
        // 解开之后是布尔值
        confirmed: async function () {
            const if_success = await this.$refs.toast_main.confirm();
            // 一定要有返回值，需要为布尔值
            // 不然就算请求成功，show_toast也不能被调用
            if (if_success == false) { return false; }

            if (this.title == "招新日期配置") {
                this.$emit("modify_info_time", this.$refs.toast_main.time);
            } else if (this.title == "部门信息配置" || "部门信息编辑") {
                this.$emit("setDepartments");
            } else if (this.title == "是否确认删除") {
                // 删除之后是不是要随时更新嘛
                this.$emit("setDepartments");
            } else if (this.title == " 成员信息配置") {
                // 新增了东西是不是也要同步更新列表嘛
            } else if (this.title == "面试官信息配置") {
                // 这里应该调用父组件里面的方法更新面试官列表
                console.log("1");
            }
            this.$emit("show_toast");
        },
    },
    // 创建组件的时候根据标题的不同切换组件和确认按钮
    created: function () {
        if (this.title == "招新日期配置") {
            this.component = "TimeConfigure";
            this.confirm = "确认";
        } else if (this.title == "部门信息配置") {
            this.component = "DepartmentConfigure";
            this.confirm = "确认"
        } else if (this.title == "部门信息编辑") {
            this.component = "DepartmentEdit";
            this.confirm = "保存";
        } else if (this.title == "error") {
            this.component = "error";
        } else if (this.title == "是否确认删除") {
            this.component = "DepartmentDelete";
            this.confirm = "确认"
        } else if (this.title == "面试官信息配置") {
            this.component = "DepartmentInterviewer";
            this.confirm = "确认"
        } else if (this.title == "成员信息配置") {
            this.component = "AddMember";
            this.confirm = "添加"
        } else if (this.title == "面试信息配置-淘汰") {
            this.component = "EditEliminateInfo";
            this.confirm = "发送";
        } else if (this.title == "面试信息配置-面试通知") {
            this.component = "EditInterviewInfo";
            this.confirm = "发送";
        }
    }
}

export default VC;