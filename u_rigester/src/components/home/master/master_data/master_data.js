import Api from "../../../../api/api"

const VC = {
    data: {
        title: "西电青年志愿者协会 | 青鸢工作室",
        src:require("../../../../data/imgs/招新数据-管理员.png"),
        dep_data:[
            {
                title:"部门招新投递总数",
                data:0,
                index:0
            },{
                title:"部门招新通过总数",
                data:0,
                index:1
            },{
                title:"招新通过男生总数",
                data:0,
                index:2
            },{
                title:"招新通过女生总数",
                data:0,
                index:3
            },
        ]
    },
    created: async function () {
        const token = this.$localData('get', "Token");
        const res = await Api.GetDepartmentData(token);
        this.dep_data[0].data = res.data.reg_sum ;
        this.dep_data[1].data = res.data.pass_sum ;
        this.dep_data[2].data = res.data.pass_male ;
        this.dep_data[3].data = res.data.pass_female ;
        console.log(res.data);
    }
}

export default VC;