M.AutoInit();

let root = new Vue({
  el: "#root",
  data: {
    login:{
        username:null,
        password:null
    },
    cadastro: {
      username: null,
      telefone: null,
      email: null,
      cep: null,
      password: null
    },
  },
  methods: {
    
    logar(){
      fetch('/logar',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(this.login)

      })
      .then(result => result.json())
      .catch(err => console.log(err))
    },

    cadastrar(){
      
      fetch("/cadastrar",{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(this.cadastro)
      })
      .then(result => result.json())
      .then(data => {
        alert(data.data)
        this.cadastro={
          username: null,
          telefone: null,
          email: null,
          cep: null,
          password: null
        }
      })
      .catch(err => console.log(`Erro: ${err}`))
    }
  }
});
