"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemOrcamentoComplexo = void 0;
var itemOrcamento_1 = require("./itemOrcamento");
var ItemOrcamentoComplexo = /** @class */ (function (_super) {
    __extends(ItemOrcamentoComplexo, _super);
    function ItemOrcamentoComplexo(nome, valor, historico) {
        var _this = _super.call(this, historico, valor) || this;
        _this.nome = nome;
        return _this;
    }
    Object.defineProperty(ItemOrcamentoComplexo.prototype, "getValor", {
        get: function () {
            return "O objeto " + this.nome + " custa " + this.valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ItemOrcamentoComplexo.prototype, "encontraItem", {
        get: function () {
            return "Objeto " + this.nome + " - Historico " + this.historico + " ";
        },
        enumerable: false,
        configurable: true
    });
    return ItemOrcamentoComplexo;
}(itemOrcamento_1.ItemOrcamento));
exports.ItemOrcamentoComplexo = ItemOrcamentoComplexo;
