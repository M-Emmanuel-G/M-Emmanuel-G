function cadastrar(){
    var nome = document.getElementById('nome') 
    var usuario = document.getElementById('usuario') 
    var email = document.getElementById('email1') 
    var senha1 = document.getElementById('senha1') 
    var senha2 = document.getElementById('senha2') 

    if(nome.value == ""){
        alert('Digite seu nome completo')
    }
    else
    if(usuario.value == ""){
        alert('Digite seu nome de Usuario')
    }
    else
    if(email.value == ""){
        alert('Email nao informado')
    }
    else
    if(senha1.value == ""){
        alert('Digite uma senha')
    }
    else
    if(senha2.value == ""){
        alert('Confirme sua senha')
    }
    else
    if(senha1.value != senha2.value){
        alert('Senhas nao Coincidem')
    }
    
    else{
        alert("Usuario cadastrado com sucesso")
        if(container.style.display === 'none'){
            container.style.display = 'flex';
        }
        else{
            container.style.display = 'none';
        }
     }    
}

function voltar(){
    if(container.style.display === 'none'){
        container.style.display = 'flex';
    }
    else{
        container.style.display = 'none';
    }
}


