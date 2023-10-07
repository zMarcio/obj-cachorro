import { cartaoVac, cartaoVacTomada, horariosSaida, nome, racao, coleira, racaoPref, racaoComivel } from "../types";

class Cachorro {

    constructor(
        private _nome:nome, 
        private _cartaoVacina:cartaoVac, 
        private _racao:racao, 
        private _horarioSaida:horariosSaida,
        private _colera:coleira
    ) {}

    set horarioSaida(horarios:horariosSaida){
        this._horarioSaida = horarios
    }

    set addRacoesFav(racao:racaoPref){
        this._racao.racaoPreferida.push(...racao.racaoPreferida)
    }
    
    set addRacoesComivel(racao:racaoComivel){
        this._racao.racaoComivel.push(...racao.racaoComivel)
    }

    set proxVacina(ProxVacina:cartaoVacTomada){
        this._cartaoVacina.nomeVac = ProxVacina.nomeVac 
        this._cartaoVacina.tomarDiaVac = ProxVacina.tomarDiaVac  
    }
    
    get nomeApelido(){
        return `Meu apelido é ${this._nome.apelidoNome}, num é fofo!!`
    }

    get primeiroName(){
        return `Meu primeiro nome é ${this._nome.primeiroNome}`
    }

    get ultimoName(){
        return `Meu segundo nome é ${this._nome.ultimoNome}`
    }

    get nomeCompleto(){
        return `Meu nome comple é ${this._nome.primeiroNome} ${this._nome.ultimoNome}`
    }

    get meusHorarios(){
        return `Esses são meus horario: ${this._horarioSaida.horarioS1}, ${this._horarioSaida.horarioS2} e ${this._horarioSaida.horarioS3}`
    }

    get meuCartaoVac(){
        return `Meu cartão de vacina é:\n Nome: ${this._nome.primeiroNome} ${this._nome.ultimoNome} | Apelido: ${this._nome.apelidoNome}
        \n Primeira vacina: ${this._cartaoVacina.primeiraVac} | Ultima vacina: ${this._cartaoVacina.ultimaVac} 
        \n Proxima vacina a se tomar: ${this._cartaoVacina.nomeVac} | Dia para se tomar: ${this._cartaoVacina.tomarDiaVac}`
    }

    get colerinha(){
        return `
        Esses são meus responsaveis
        \n nome: ${this._colera.responsavel} cel: ${this._colera.numResponsavel} 
        \n nome: ${this._colera.responsavel2} cel: ${this._colera.num2Responsavel}
        `
    }

    get racoes(){
        return `Essas são as minhas rações favoritas: ${this._racao.racaoPreferida} e essas são as que eu como, mas não gosto muito: ${this._racao.racaoComivel} `
    }
}


export default Cachorro