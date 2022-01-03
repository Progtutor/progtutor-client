import Vue from "vue"
import App from "./App.vue"
import vuetify from "./plugins/vuetify"
import Toasted from "vue-toasted"

Vue.use(Toasted, {
    position: "top-center",
    className: "toasted-font",
    duration: 3000,
    singleton: true
})

Vue.config.productionTip = false
new Vue({
    vuetify,
    render: h => h(App)
}).$mount("#app")