import { ItemOrcamento } from "./itemOrcamento";

 export class ItemOrcamentoComplexo extends ItemOrcamento {
    nome: string
    constructor(nome: string, valor: number, historico: string) {
        super(historico, valor);
        this.nome = nome
    }

    
    public get getValor() : string {
        return `O objeto ${this.nome} custa ${this.valor}`
    }

    public get encontraItem() : string {
        return `Objeto ${this.nome} - Historico ${this.historico} `
    }
    
}