"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemOrcamento = void 0;
var ItemOrcamento = /** @class */ (function () {
    function ItemOrcamento(historico, valor) {
        this.historico = historico;
        this.valor = valor;
    }
    Object.defineProperty(ItemOrcamento.prototype, "getvalor", {
        get: function () {
            return this.valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ItemOrcamento.prototype, "gethistorico", {
        get: function () {
            return this.historico;
        },
        enumerable: false,
        configurable: true
    });
    return ItemOrcamento;
}());
exports.ItemOrcamento = ItemOrcamento;
