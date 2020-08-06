import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path: '/',
            redirect: '/data'
        },
        {
            path: '/data',
            name:'data',
            component: resolve => require(['../views/data.vue'],resolve),
            meta: {
                title: '数据'
            }
        },{
            path: '/line',
            name:'line',
            component: resolve => require(['../views/line.vue'],resolve),
            meta: {
                title: '数据'
            }
        },{
            path: '/video',
            name:'video',
            component: resolve => require(['../views/video.vue'],resolve),
            meta: {
                title: '视频流'
            }
        }
    ]
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
