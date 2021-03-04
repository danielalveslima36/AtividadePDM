const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};
//USUARIO PADRAO
console.log(usuario)

//USUARIO COM NOME EDITADO
const usr1 = {...usuario, nome: 'Gabriel'}
console.log(usr1)

//USUARIO COM CIDADE EDITADA
const aux = {...usuario.endereco}
const endereco = {...aux, cidade: 'Lontras'}
const usr2 = {...usuario, endereco: endereco}
console.log(usr2)
