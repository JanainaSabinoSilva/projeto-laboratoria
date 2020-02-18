var name = prompt("Bem-vindx a prova de conhecimentos sobre a Laboratória! \n Qual seu nome?")
var camponome=document.getElementById("nome-do-aluno")
camponome.innerHTML= "Olá, " + name
var decisao=confirm("Deseja continuar este questionário sobre conhecimentos gerais da Laboratória?")
if (decisao==true) {
   var fundacao=prompt("Quem fundou a Laboratória? \n a) Mariana Costa Checa \n b) Paula Gonçalves Checa \n c) Mariana Gonçalves Checa")
   var fundacaoBrasil=prompt("Quem fundou a Laboratória no Brasil? \n a) Paula Fernandes \n b) Juliana F. \n c) Regina Acher")
   var fundacaoColombia=prompt("Em qual país foi fundada uma nova Laboratória? \n a) Montevideo, Uruguai \n b) Bogotá, Colombia \n c) São Petersburgo, Russia")
}
if (fundacao=="a") {
    var respostas=document.getElementById("resposta-certa")
    respostas.innerHTML= fundacao + ","
} else {
    var respostas=document.getElementById("resposta-errada")
    respostas.innerHTML= fundacao + ","
}
if (fundacaoBrasil=="c") {
    var respostas=document.getElementById("resposta-certa")
    respostas.innerHTML+= fundacaoBrasil + ","
} else {
    var respostas=document.getElementById("resposta-errada")
    respostas.innerHTML+= fundacaoBrasil + ","
}
if (fundacaoColombia=="b") {
    var respostas=document.getElementById("resposta-certa")
    respostas.innerHTML+= fundacaoColombia
} else {
    var respostas=document.getElementById("resposta-errada")
    respostas.innerHTML+= fundacaoColombia

}

