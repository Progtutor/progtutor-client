import Vue from "vue"
import VueRouter from "vue-router"
import Home from "@/views/Home/Home.vue"
import Plans from "@/views/Plans/Plans.vue"
import About from "@/views/About/About.vue"

Vue.use(VueRouter)

const routes = [{
    path: "/",
    name: "Home",
    component: Home
}, {
    path: "/planos",
    name: "Plans",
    component: Plans
}, {
    path: "/sobre",
    name: "About",
    component: About
}]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
})

export default router