function voltar(){
    alert("Usuario Desconectado")
    location.href="index.html"
}

function calculo(){
    let num1 =document.getElementById("number1")
    let num2 = document.getElementById("number2")
    let resultado = parseInt(num1.value) / parseInt(num2.value)
    document.querySelector('.display').innerHTML = resultado
}