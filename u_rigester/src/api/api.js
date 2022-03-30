import service from "../utils/serve"

const Api = {
    // 组织登录
    OrganizationLogin(params) {
        return service({
            url: "/org/login",
            method: "post",
            data: params,
        })
    },
    // 部门登录
    DepartmentLogin(params) {
        return service({
            url: "/dep/login",
            method: "post",
            data: params,
        })
    },
    // 获取组织的全部部门信息
    GetAllDepartments(token) {
        return service({
            url: "/org/deps",
            method: "get",
            headers: {
                "Authorization": token
            },
        })
    },
    // 设置组织招新日期
    SetRecruitmentDate(token, params) {
        return service({
            url: "/org/add-time",
            method: "post",
            headers: {
                "Authorization": token
            },
            data: params
        })
    },
    // 新增部门
    AddDepartment(token, params) {
        return service({
            url: "/org/cre-dep",
            method: "post",
            headers: {
                "Authorization": token
            },
            data: params
        })
    },
    // 修改部门配置
    EditDepartment(token, params, id) {
        return service({
            url: "/org/dep/" + id,
            method: "patch",
            headers: {
                "Authorization": token
            },
            data: params
        })
    },
    // 获取单个部门的详情
    GetSingleDepartment(token, id) {
        return service({
            url: "/org/dep/" + id,
            method: "get",
            headers: {
                "Authorization": token
            }
        })
    },
    // 删除对应部门
    DeleteDepartment(token, id) {
        return service({
            url: "/org/dep/" + id,
            method: "delete",
            headers: {
                "Authorization": token
            },
        })
    },
    // 获取组织的招新数据
    GetOrganizationData(token) {
        return service({
            url: "/org/get-data",
            method: "get",
            headers: {
                "Authorization": token
            }
        })
    },

    // 部门
    // 设置面试官ID
    SetInterviewerID(Token, id) {
        return service({
            url: "/dep/add-inter/" + id,
            method: "post",
            headers: {
                "Authorization": Token
            }
        })
    },
    // 获取部门报名信息
    GetDepartmentData(Token) {
        return service({
            url: "/dep/reg-data",
            method: "get",
            headers: {
                "Authorization": Token
            }
        })
    },
    // 获取已录取人员信息
    GetAdmissionInfo(Token, params) {
        return service({
            url: "/dep/getenroll",
            method: "post",
            headers: {
                "Authorization": Token
            },
            data: params
        })
    },
    // 获取淘汰人员信息
    GetEliminateInfo(Token) {
        return service({
            url: "/dep/getout",
            method: "post",
            headers: {
                "Authorization": Token
            },
        })
    },
    // 获取一面所有人的状态
    GetFirstStudents(Token){
        return service({
            url: "/dep/getusers-first",
            method: "post",
            headers: {
                "Authorization": Token
            },
        })
    },
    // 获取二面状态
    GetSecondStudents(Token){
        return service({
            url: "/dep/getusers-first/interviewed",
            method: "post",
            headers: {
                "Authorization": Token
            },
        })
    }
}

export default Api;