import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/',
            component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: { title: '自述文件' },
            children: [
                {
                    path: '/home',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Dashboard.vue'),
                    meta: { title: '系统首页' }
                },         
                {
                    path: '/404',
                    component: () => import(/* webpackChunkName: "404" */ '../components/page/404.vue'),
                    meta: { title: '404' }
                },
                {
                    path: '/query',
                    component: () => import(/* webpackChunkName: "403" */ '../components/page/HealthyQuery.vue'),
                    meta: { title: '健康资讯' }
                },
                {
                    path: '/remind',
                    component: () => import(/* webpackChunkName: "403" */ '../components/page/MedicineRemind.vue'),
                    meta: { title: '服药提醒' }
                },
                {
                    path: '/personInfo',
                    component: () => import(/* webpackChunkName: "403" */ '../components/page/InfoForm.vue'),
                    meta: { title: '完善资料' }
                },
                {
                    path: '/mission',
                    component: () => import(/* webpackChunkName: "403" */ '../components/page/MissionList.vue'),
                    meta: { title: '积分签到' }
                },
                {
                    path: '/icon',
                    component: () => import(/* webpackChunkName: "403" */ '../components/page/Icon.vue'),
                    meta: { title: '图标管理' }
                },
                {
                    path: '/opintion',
                    component: () => import(/* webpackChunkName: "403" */ '../components/page/Opintion.vue'),
                    meta: { title: '健康管理' }
                },
            ]
        },
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
            meta: { title: '登录' }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ],
    mode:'history'
});
