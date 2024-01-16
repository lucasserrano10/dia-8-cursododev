// extraindo informações do usuário
let nome = prompt("insira seu nome :")
let idade = parseInt(prompt("insira sua idade :"))
let peso = Number(prompt("insira seu peso:"))
let altura = Number(prompt("insira sua altura :"))
let profissão = prompt("insira sua área de ocupação :")

// logando essas informações acima 
console.log("Olá" + nome + "sua idade é :" + idade + "seu peso é :" + peso + "kg" + "sua altura é :" + altura + "m" + "e sua profissão é :" + profissão)

console.log("---------------------------------------------")

 if(idade < 18){
    console.log("Você não pode tomar umas geladas")
 }else {
    console.log("Está liberado tomar umas geladas")
 }

 console.log("---------------------------------------------")

let anos = (idade *1)
let meses = (idade * 12)
let dias = (idade * 365)

console.log("Sua idade em anos é :" + idade + "Em meses :" + meses + "Em dias :" + dias)

console.log("---------------------------------------------")
// calculando imc 

let indice = (peso / (altura * altura))

if(indice < 18.5){
    console.log("seu indice de massa corporal indica magreza")
}else if (indice >=18.5 && indice <=24.9){
    console.log("seu indice de massa corporal indica normal ")
}else if (indice >24.9 && indice <=30){
    console.log("seu indice de massa corporal indica sobrepeso")
}else{
    console.log("seu indice de massa corporal indica obeso")
}

console.log("---------------------------------------------")
// descobrindo o ano do usuario pela idade
let descobrindo = 2023 - idade
console.log(descobrindo)
console.log("---------------------------------------------")
let contador = 0
for(contador = 0;contador <= idade; contador++ && descobrindo ++ ){
    console.log(contador + "-" + descobrindo)
}
console.log("---------------------------------------------")
let continuar = true
do{
  let perguntaContinuar = prompt("deseja continuar o programa ? (s/n)")
  if(perguntaContinuar = "s"){
    continuar = true
  }else{
    continuar = false
  }
}while(continuar = false){
console.log("ACABOU O PROGRAMA, OBRIGADO")
}