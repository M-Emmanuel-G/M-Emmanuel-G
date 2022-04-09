function login(){
    var nome = document.getElementById('email');
    var senha = document.getElementById('senha');
    if (nome.value != "admin"){
        alert("Usuario nao Cadastrado")
    }
    else
    if(senha.value != "admin"){
        alert("Senha de invalida")
    }

    else{
        alert("Usuario logado")
        location.href='TelaInicial.html'
    }
    
}
/*---------------------------------------------*/  
var btn = document.getElementById('botao')
var container = document.getElementById("reg")

btn.addEventListener('click',function(){
    if( container.style.display === 'none'){
        container.style.display = 'flex';
    }else{
        container.style.display = 'none';
    }
})

