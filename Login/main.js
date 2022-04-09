function voltar(){
    alert("Usuario Desconectado")
    location.href="index.html"
}

function calculo(){
    var num1 = document.getElementById("number1")
    var num2 = document.getElementById("number2")
    var num3 = document.getElementById("number3")
    var resultado = parsefloat(num1.value) + parsefloat(num2.value) + parsefloat(num3.value)
    document.querySelector(".display").innerHTML = resultado
    alert(resultado)
}