import Cachorro from "./src/obj/index"

const date1: Date  | string = new Date("December 17, 2019 15:24:00").toLocaleDateString()
const date2 : Date | string = new Date("January 07, 2021 13:30:00").toLocaleDateString()
const date3 : Date | string = new Date("October 06, 2023 09:00:00").toLocaleDateString()

const cachorro = new Cachorro(
    {apelidoNome:'junin', primeiroNome:'Rafael', ultimoNome: 'Junior', nomeCompleto:"Rafael Junior"},
    {nomeVac: 'Vacina antirrábica', primeiraVac: date1, ultimaVac:date2, tomarDiaVac: date3, raca:'puldo'}, 
    { racaoComivel: ['Bummer', ' Cibau'], racaoPreferida: ['Bonny'] },
    {horarioS1:'9:30', horarioS2: '15:30', horarioS3: '19:00'},
    {responsavel:'Jeanne', responsavel2: 'Márcio', numResponsavel:"(85) 97272-1235", num2Responsavel:'(85) 96741-6712'},
)

//      horario saida
console.log('horario')
console.log(cachorro.meusHorarios)
cachorro.horarioSaida = {horarioS1:'10:00', horarioS2:'16:00', horarioS3: '19:30'}
console.log(cachorro.meusHorarios)

//      cartao vacina
console.log('cartao vacina')
console.log(cachorro.meuCartaoVac)
cachorro.proxVacina = {nomeVac:'Vacina Anti-carrapato', tomarDiaVac: date1}
console.log(cachorro.meuCartaoVac)
cachorro.proxVacina = {nomeVac:'Vacina Antiga-Pulga', tomarDiaVac: date1}
console.log(cachorro.meuCartaoVac)
//      racoes
console.log('racoes')
console.log(cachorro.racoes)
cachorro.addRacoesComivel = {racaoComivel: [' Pro Plan', ' Royal Canin']}
cachorro.addRacoesFav = {racaoPreferida:[' Golden',' Dog Chow',' Equilíbrio']}
console.log(cachorro.racoes)

//      nome cachorro
console.log('nome')
console.log(cachorro.nomeApelido)
console.log(cachorro.ultimoName)
console.log(cachorro.nomeCompleto)

//      colerinha
console.log(cachorro.colerinha)