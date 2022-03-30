
const VC = {
    data: {
        title: "西电青年志愿者协会 | 青鸢工作室",
        if_toast: false,
        title:"面试官信息配置",
        det_type:"interviewer",
        interviewer: [
            {
                name:"面试官NO.1",
                ID:12345679
            },{
                name:"面试官NO.1",
                ID:12345679
            },{
                name:"面试官NO.1",
                ID:12345679
            },{
                name:"面试官NO.1",
                ID:12345679
            },{
                name:"面试官NO.1",
                ID:12345679
            },{
                name:"面试官NO.1",
                ID:12345679
            },{
                name:"面试官NO.1",
                ID:12345679
            },
        ]
    },
    show_toast: function (e) {
        if(e == "add_inter"){
            this.title = "面试官信息配置"
        }else if(e == "delete"){
            this.title = "是否确认删除"
        }
        this.show_toast_simple();
    },
    show_toast_simple: function () {
        this.if_toast = !this.if_toast;
    }
}

export default VC;