const projetos = [
    { nome: 'projeto1', valor: 10000, empresa: 'A', endereco:{rua:'x',cidade:'Z', num:45} },
    { nome: 'projeto2', valor: 20000, empresa: 'B', endereco:{rua:'y',cidade:'T', num:4} },
    { nome: 'projeto3', valor: 15000, empresa: 'C', endereco:{rua:'a',cidade:'Z', num:5} },
];

// 2.1
const valores = projetos.map(projeto => projeto.valor);
console.log(valores);

// 2.2
const projetosMesmaCidade = projetos.filter(projeto => projeto.endereco.cidade === 'Z');
console.log(projetosMesmaCidade);

// 2.3
const projetosGoogle = projetos.find(projeto => projeto.empresa === 'Google');
console.log(projetosGoogle);

// 2.4
projetos.forEach(projeto => projeto.valor =  projeto.valor * 2);
const projetosNoLimite = projetos.filter(projeto => projeto.valor <= 30000);
console.log(projetosNoLimite);
