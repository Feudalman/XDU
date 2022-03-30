import { createRouter, createWebHistory } from "vue-router";
import Login from './pages/login/login.vue'
import Home from './pages/home/home.vue'

import SuperMaster from '../src/pages/home/super_master/super_master.vue'
import SuperConfigure from '../src/components/home/super_master/super_configure/super_configure.vue'
import SuperData from '../src/components/home/super_master/super_data/super_data.vue'

import Master from '../src/pages/home/master/master.vue'
import MasterAdmission from "../src/components/home/master/master_admission/master_admission.vue"
import MasterData from "../src/components/home/master/master_data/master_data.vue"
import MasterDelivery from "../src/components/home/master/master_delivery/master_delivery.vue"
import MasterEliminate from "../src/components/home/master/master_eliminate/master_eliminate.vue"
import MasterInterviewed from "../src/components/home/master/master_interviewed/master_interviewed.vue"
import MasterInterviewer from "../src/components/home/master/master_interviewer/master_interviewer.vue"


const routerHistorys = createWebHistory()

const routes = [
    {
        path: '/',
        name:"login",
        component: Login,
        // redirect: '/home'
        // redirect: '/super_master'
        redirect:'/master'
    }, {
        path: '/home',
        component: Home
    }, {
        path: '/super_master',
        name: "super_master",
        redirect:'/super_master/super_configure',
        component: SuperMaster,
        children: [
            {
                path: "super_configure",
                name: "SuperConfigure",
                component: SuperConfigure
            }, {
                path: "super_data",
                name: "SuperData",
                component: SuperData
            }
        ]
    }, {
        path: '/master',
        name: "master",
        redirect:"/master/MasterInterviewer",
        component: Master,
        children:[
            {
                path:"MasterAdmission",
                name:"MasterAdmission",
                component:MasterAdmission
            },{
                path:"MasterData",
                name:"MasterData",
                component:MasterData
            },{
                path:"MasterDelivery",
                name:"MasterDelivery",
                component:MasterDelivery
            },{
                path:"MasterEliminate",
                name:"MasterEliminate",
                component:MasterEliminate
            },{
                path:"MasterInterviewed",
                name:"MasterInterviewed",
                component:MasterInterviewed
            },{
                path:"MasterInterviewer",
                name:"MasterInterviewer",
                component:MasterInterviewer
            },
        ]
    }
]


const router = createRouter({
    history: routerHistorys,
    routes
})

export default router
