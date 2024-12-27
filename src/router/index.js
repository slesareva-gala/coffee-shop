import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: () => import('@/views/HerroView.vue') },
    { path: '/our-cofee', component: () => import('@/views/OurCoffeeView.vue') },
    { path: '/for-your-pleasure', component: () => import('@/views/ForYourPleasureView.vue') },
    { path: '/contact-us', component: () => import('@/views/ContactUsView.vue') },
    { name: "thank-you", path: '/thank-you', component: () => import('@/views/ThankYouView.vue') },
    { name: 'coffee', path: '/our-cofee/:id', component: () => import('@/views/GoodsItemView.vue') },
    { name: 'goods', path: '/for-your-pleasure/:id', component: () => import('@/views/GoodsItemView.vue') },
]

const router = new VueRouter({
    mode: "history",
    routes
})

export default router
