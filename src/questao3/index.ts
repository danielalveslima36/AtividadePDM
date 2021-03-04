// 3.1
const arr = [1, 2, 3, 4, 5];
arr.map(i => i + 10);

// 3.2
const usuario1 = { nome : 'Diego', idade : 23 };

const mostraIdade = (usuario) => { return usuario.idade; };

console.log(mostraIdade(usuario1));

// 3.3
const nome = "Diego";
const idade = 23;

const mostraUsuario = (nome = 'Diego', idade = 18) => { return { nome, idade }; };

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

// 3.4 
const promises = () => {
    return new Promise((resolve, reject) => {
        return resolve(null);
    });
};
