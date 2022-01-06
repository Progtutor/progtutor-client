export default {
    name: "Faq",

    data: function() {
        return {
            selectedTab: "",
            tabs: ["Geral", "Financeiro", "Metodologia", "Problemas"],
            doubts: ["Não sei programação, terei dificuldades em compreender as aulas e/ou desenvolver os projetos?",
                "Existe algum pré requisito para se inscrever nesse curso?", 
                "Eu posso pedir reembolso de alguma trilha pela plataforma?", 
                "Sobre o projeto avulso, terei acesso aos temas/assuntos de cada projeto e classificação da " +
                "linguagem para poder fazer a minha escolha?", 
                "Como as aulas funcionam? Elas podem sair da plataforma? Tem conteudo escrito?"]
        }
    },

    methods: {
        
    }

}