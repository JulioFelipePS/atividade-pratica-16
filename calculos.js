/* Desenvolva aqui a rotina */
const valorReceita =document.getElementById("valor_receita")
const valorAlimentacao = document.getElementById("valor_alimentacao")
const valorTransporte= document.getElementById("valor_transporte")
const valorBase = document.getElementById("valor_base" )
const valorAutomovel =document.getElementById("valor_automovel")
const faltas = document.getElementById("faltas")
const descontos = document.getElementById("valor_descontos")
const valorTotal = document.getElementById("valor_total")
const botao = document.getElementById("btn_calcular")

//2

valorAlimentacao.addEventListener('change',()=>{
    valorReceita.value = Number(valorBase.value)+Number(valorTransporte.value)+Number(valorAlimentacao.value)
})
valorBase.addEventListener('change',()=>{
    valorReceita.value = Number(valorBase.value)+Number(valorTransporte.value)+Number(valorAlimentacao.value)
})
valorTransporte.addEventListener('change',()=>{
    valorReceita.value = Number(valorBase.value)+Number(valorTransporte.value)+Number(valorAlimentacao.value)
})


faltas.addEventListener('change',()=>{
    descontos.value = Number(faltas.value)+Number(valorAutomovel.value)

})

valorAutomovel.addEventListener('change',()=>{
    descontos.value = Number(faltas.value)+Number(valorAutomovel.value)

})

//1

botao.addEventListener('click',()=>{
    valorTotal.value = 0
    valorTotal.value = valorReceita.value-descontos.value
    if (valorTotal.value>0) {
        return valorTotal.style.color = 'green'
    }
    if (valorTotal.value<0) {
        return valorTotal.style.color = 'red'
    }
    if (valorTotal.value=0) {
        return valorTotal.style.color = 'grey'
    }
    
})