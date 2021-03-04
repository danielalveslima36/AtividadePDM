export class ItemOrcamento {
    historico: String
    valor: number

    constructor(historico: String, valor: number) {
        this.historico = historico;
        this.valor = valor
    }

    
    public get getvalor() : number {
        return this.valor
    }

    
    public get gethistorico() {
        return this.historico
    }
    
    


}