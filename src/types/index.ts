import { type } from "os";

type nome = {
    primeiroNome:string;
    ultimoNome:string;
    apelidoNome:string;
    nomeCompleto:string
}

type cartaoVac = {
    primeiraVac:Date | string;
    ultimaVac: Date | string;
    nomeVac:string;
    tomarDiaVac:Date | string;
    raca:string
} 

type cartaoVacTomada = {
    nomeVac:string;
    tomarDiaVac:Date | string;
} 

type racao = {
    racaoPreferida: string[];
    racaoComivel: string[];
}

type racaoPref = {
    racaoPreferida: string[]
}

type racaoComivel = {
    racaoComivel : string[]
}

type horariosSaida = {
    horarioS1:string | null;
    horarioS2:string | null;
    horarioS3:string | null;
}

type coleira = {
    responsavel:string;
    responsavel2:string;
    numResponsavel:string;
    num2Responsavel:string;
}

export { horariosSaida, racao, cartaoVac, cartaoVacTomada, nome, coleira, racaoPref, racaoComivel } 