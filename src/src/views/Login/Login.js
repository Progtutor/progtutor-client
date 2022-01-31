import Topbar from "@/components/Topbar/Topbar.vue"
import Footer from "@/components/Footer/Footer.vue"

export default {
    name: "Login",
    components: {
        Topbar,
        Footer
    },
    methods: {
        
    },

    data: function() {
        return {
            logo: require("../../assets/logo.png"),
            loginForm: {
                email: "",
                password: ""
            },
            showPassword: false
        }
    },

    computed: {

    }

}