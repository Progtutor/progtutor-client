export default {
    name: "Login",
    data: function() {
        return {
            logo: require("../../assets/logo.png"),
            loginForm: {
                email: "",
                password: ""
            },
            showPassword: false
        }
    }
}