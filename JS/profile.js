


async function getCountryData() {

let resposta = await fetch ('https://covid-api.mmediagroup.fr/covid-19')
let dados = await resposta.json()
console.log(dados)
console.log(dados.name)

}

getCountryData()