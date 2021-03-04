"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};
//USUARIO PADRAO
console.log(usuario);
//USUARIO COM NOME EDITADO
var usr1 = __assign(__assign({}, usuario), { nome: 'Gabriel' });
console.log(usr1);
//USUARIO COM CIDADE EDITADA
var aux = __assign({}, usuario.endereco);
var endereco = __assign(__assign({}, aux), { cidade: 'Lontras' });
var usr2 = __assign(__assign({}, usuario), { endereco: endereco });
console.log(usr2);
