import Vue from "vue"
import Vuetify from "vuetify/lib/framework"
import pt from "vuetify/lib/locale/pt"

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        themes: {
            light: {
                white: "#E5E5E5"
            }
        },
        options: {
            customProperties: true
        }
    },
    icons: {
        iconfont: "mdi"
    },
    lang: {
        locales: {pt},
        current: "pt"
    }
})