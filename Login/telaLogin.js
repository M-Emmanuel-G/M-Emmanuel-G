function login(){
    var nome = document.getElementById('email');
    var senha = document.getElementById('senha');
    if (nome.value == ""){
        alert("Usuario nao informado")
    }
    else
    if(senha.value == ""){
        alert("Senha nao informada")
    }

    else{
        alert("Usuario logado")
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

