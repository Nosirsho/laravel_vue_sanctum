import { createRouter, createWebHistory } from 'vue-router'
export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/get', component: () => import('./components/Get.vue'),
            name: 'get.index'
        },
        {
            path: '/user/get', component: () => import('./components/Login.vue'),
            name: 'user.login'
        },
        {
            path: '/user/registration', component: () => import('./components/Registration.vue'),
            name: 'user.registration'
        }
    ],
});
