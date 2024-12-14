import Vue from 'vue'
import VueRouter from 'vue-router'

import HerroView from '../views/HerroView.vue'
import OurCoffeeView from '../views/OurCoffeeView.vue'
import ForYourPlease from '../views/ForYourPleasure.vue'
import ContactUs from '../views/ContactUs.vue'
import ThankYouPage from '../views/ThankYouPage.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: HerroView },
    { path: '/our-cofee', component: OurCoffeeView },
    { path: '/for-your', component: ForYourPlease },
    { path: '/contact-us', component: ContactUs },
    { path: '/thank-you', component: ThankYouPage },
]

const router = new VueRouter({
    mode: "history",
    routes
})

export default router
