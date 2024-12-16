import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: () => import('@/views/HerroView.vue') },
    { path: '/our-cofee', component: () => import('@/views/OurCoffeeView.vue') },
    { path: '/for-your', component: () => import('@/views/ForYourPleasure.vue') },
    { path: '/contact-us', component: () => import('@/views/ContactUs.vue') },
    { path: '/thank-you', component: () => import('@/views/ThankYouPage.vue') },
    { path: '/our-cofee-item', component: () => import('@/views/OurCoffeeItem.vue') },
]

const router = new VueRouter({
    mode: "history",
    routes
})

export default router
