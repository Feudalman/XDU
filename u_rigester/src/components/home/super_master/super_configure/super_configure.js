import Api from "../../../../api/api.js"

// VC 即为 VueCompoent 对象
const VC = {
    data: {
        con_date: {
            show: false,
            info: "配置招新时间"
        },
        con_club: {
            show: false,
            info: "配置部门信息"
        },
        departments: [],
        if_toast: false,
        title: "error"
    },
    // 切换弹窗显示
    show_toast: function (e) {
        // 根据点击按钮反馈回的参数选择不同的toast内容组件
        if (e == "date") {
            this.title = "招新日期配置";
        } else if (e == "club") {
            this.title = "部门信息配置";
        } else if (e == "delete") {
            this.title = "是否确认删除";
        } else if (e == "edit") {
            this.title = "部门信息编辑";
        } else{
            this.title == "error"
        }
        this.show_toast_simple();
    },
    show_toast_simple: function () {
        this.if_toast = !this.if_toast;
    },
    // 修改招新日期设置的info
    // 在toast日期配置组件被确认的时候修改
    modify_info_time: function (e) {
        const start = this.timestampToTime(e[0]);
        const end = this.timestampToTime(e[1]);
        this.con_date.info = start + " " + end;
    },
    timestampToTime(timestamp) {
        timestamp = timestamp ? timestamp : null;
        let date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        let Y = date.getFullYear() + '-';
        let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
        let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
        let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
        let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        return Y + M + D + h + m + s;
    },
    setDepartments:async function(){
        const Token = this.$localData('get', "Token");
        const e = await Api.GetAllDepartments(Token);
        this.departments = e.data.departments;
    },
    // 在一开始拿到部门数组进行v-for渲染
    created: function () {
        this.departments = this.$localData('get', "Departments");
    }

}

export default VC