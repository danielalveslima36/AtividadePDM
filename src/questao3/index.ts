// 3.1
const array = [1, 2, 3, 4, 5];
array.map(i => i + 10);

// 3.2
const usuario1 = { nome : 'Diego', idade : 23 };

const mostraIdade = (usuario: any) => { return usuario.idade; };

mostraIdade(usuario1);

// 3.3
const nomeUsuario = "Diego";
const idadeUsuario = 23;

const mostraUsuario = (nome = 'Diego', idade = 18) => { return { nome, idade }; };

mostraUsuario(nomeUsuario, idadeUsuario);
mostraUsuario(nomeUsuario);

// 3.4 
const promises = () => {
    return new Promise((resolve, reject) => {
        return resolve(null);
    });
};