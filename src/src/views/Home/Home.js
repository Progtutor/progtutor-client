import Topbar from "@/components/Topbar/Topbar.vue"
import Footer from "@/components/Footer/Footer.vue"
import Faq from "@/components/Faq/Faq.vue"

export default {
    name: "Home",
    components: {
        Topbar,
        Footer,
        Faq
    },
    methods: {
        
    },

    data: function() {
        return {
            imageCode: require("../../assets/coding.png"),
            stats: [{
                name: "Aulas disponíveis",
                value: 15
            }, {
                name: "Horas de conteúdo",
                value: 200
            }, {
                name: "Alunos matrículados",
                value: 100
            }, {
                name: "Novos vídeos mensalmente",
                value: 8
            }]
        }
    },

    computed: {

    }

}