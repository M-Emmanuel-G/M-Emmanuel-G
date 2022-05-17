function login(){
    let nome = document.getElementById('email');
    let senha = document.getElementById('senha');
    let userCadastrados = ["admin",]
    if (nome.value !== userCadastrados[0]){
        alert("Usuario nao Cadastrado")
    }
    else
    if(senha.value !== "admin"){
        alert("Senha invalida ou nao informada")
    }

    else{
        alert("Usuario logado")
        location.href='TelaInicial.html'
    }
    
}
/*---------------------------------------------*/  
let btn = document.getElementById('botao')
let container = document.getElementById("reg")

btn.addEventListener('click',function(){
    if( container.style.display === 'none'){
        container.style.display = 'flex';
    }else{
        container.style.display = 'none';
    }
})

