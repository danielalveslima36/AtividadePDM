// 4.1
const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

const nome = empresa.nome;
const cidade = empresa.endereco.cidade;
const estado = empresa.endereco.estado;

console.log(nome);
console.log(cidade);
console.log(estado);

// 4.2
const mostrarInfo =  (nome, idade) => {
    return `${nome} tem ${idade} anos.`;
}

console.log(mostrarInfo('Diego', 23));
