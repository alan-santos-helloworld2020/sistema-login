M.AutoInit();

let root = new Vue({
  el: "#root",
  data: {
    login:{
        email:null,
        senha:null
    },
    cadastro: {
      nome: null,
      telefone: null,
      email: null,
      cep: null,
      senha: null,
    },
  },
  methods: {
    enviar() {},
  },
});
