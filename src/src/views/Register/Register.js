export default {
    name: "Register",
    data: function() {
        return {
            logo: require("../../assets/logo.png"),
            registerForm: {
                name: "",
                username: "",
                email: "",
                password: "",
                confirmPassword: ""
            },
            showPassword: false
        }
    }
}       