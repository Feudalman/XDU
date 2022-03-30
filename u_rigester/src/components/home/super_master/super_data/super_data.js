import Api from "../../../../api/api"

const VC = {
    data: {
        org_data: [
            {
                title: "组织招新总投总数",
                data: 0,
                index: 0
            }, {
                title: "组织招新通过总数",
                data: 0,
                index: 1
            }, {
                title: "组织招新通过男生总数",
                data: 0,
                index: 2
            }, {
                title: "组织招新通过女生总数",
                data: 0,
                index: 3
            },
        ],
        deps_data: [],
        orgID: 0,
        columns: [
            {
                title: "部门",
                key:"name"
            },
            {
                title: "投递总数",
                key:"sum",
            },
            {
                title: "通过总数",
                key:"pass"
            },
            {
                title: "通过男生总数",
                key:"male"
            },
            {
                title: "通过女生总数",
                key:"female"
            },
        ],
        pagination: {
            pageSize: 8
        },
        loading:true
    },
    OrgID() {
        if (this.orgID < 10) {
            return "0" + this.orgID;
        }
        return this.orgID
    },
    created: async function () {
        // 头部的统计数据
        const Token = this.$localData('get', "Token");
        const res1 = await Api.GetOrganizationData(Token);
        this.org_data[0].data = res1.data.org.sum;
        this.org_data[1].data = res1.data.org.pass;
        this.org_data[2].data = res1.data.org.male;
        this.org_data[3].data = res1.data.org.female;

        // 组织ID
        this.orgID = res1.data.org.Id;

        const deps = res1.data.dep;
        // // 后面，表单展示组织下各个部门的招新情况
        // for (let i = 0; i < deps.length; i++) {
        //     const res2 = await Api.GetSingleDepartment(Token, deps[i].Id);
        //     deps[i].name = res2.data.name;
        // }
        // this.deps_data = deps;

        const e = await Api.GetAllDepartments(Token);
        console.log(e.data.departments);
        for(let i=0 ; i< deps.length ; i++){
            deps[i].name = e.data.departments[i].name ;
        }
        this.deps_data = deps;
        this.loading = false;
    }
}


export default VC;