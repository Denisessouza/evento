let anoAtual= 2021
let anoNascimento= 1982

if(anoAtual-anoNascimento < 18) {
    console.log("Menor de 18 anos - Cadastro não permitido")
} else {
    console.log("Prossiga com o cadastro")
}

let dataEvento = new Date ('03/12/2022')
let dataHoje = new Date ()

if (dataEvento > dataHoje) {
    console.log("Selecione o evento")
}
else {
    console.log("Data inválida")
}

let listaInscritos = ["Marcio Caldas", "Luis Carlos Medeiros", "Manoel Candeia", "Maria Aline"]
if (listaInscritos > 4) {
    console.log("Vaga disponível, cadastra-se !")
} else {
    console.log("Não há vagas para este evento")
}

for (let contador =0; contador < listaInscritos.length; contador++) {
    console.log(`Participante: ${listaInscritos[contador]}`)
}

