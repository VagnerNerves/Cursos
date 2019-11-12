// Desafio 01-3. Funções e estruturas de repetição
// Desafios para fortalecer os conhecimentos obtidos até aqui.

// Usuários e tecnologias
// Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array), por exemplo:

// const usuarios = [
//   { nome: 'Carlos', tecnologias: ['HTML', 'CSS'] },
//   { nome: 'Jasmine', tecnologias: ['JavaScript', 'CSS'] },
//   { nome: 'Tuane', tecnologias: ['HTML', 'Node.js'] }
// ]
// Percorra a lista de usuários com uma estrutura de repetição imprimimndo em tela as informações dos usuários:

// Carlos trabalha com HTML, CSS
// Jarmine trabalha com JavaScript, CSS
// Tuane trabalha com HTML, Node.js

const usuario = [
    {
        nome: 'Vagner',
        tecnologia: [ 'HTML' , 'CSS']
    },
    {
        nome: 'Carlos',
        tecnologia: [ 'JAVA' , 'HTML5']
    },
    {
        nome: 'Amaro',
        tecnologia: [ 'PHP' , 'JAVASCRIPT']
    }
]

function imprimeUsuarioEFuncao (usuario){
    for (let i = 0; i < usuario.length; i++) {
        let tecnologias = '';
        for (let t = 0; t < usuario[i].tecnologia.length; t++){
            if (tecnologias != '') {
                tecnologias = tecnologias + ','
            }
            tecnologias = tecnologias+' '+usuario[i].tecnologia[t];
        }
        console.log(`${usuario[i].nome} trabalha com ${tecnologias}`)
    }
}

imprimeUsuarioEFuncao(usuario);




// Busca por tecnologia
// Baseado no desafio anterior, utilize a mesma lista de usuários construída.

// Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. Essa função deve retornar um boolean true/false.

// Por exemplo:

// function checaSeUsuarioUsaCSS(usuario) {
//   // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
//   // SE encontrar, retorne true da função, caso contrário retorne false
// }
// Percorra o array de usuários e, para cada um, verifique se o mesmo trabalha com CSS utilizando a função construída acima, se SIM, imprima em tela as informações do usuário:

// for (let i = 0; i < usuarios.length; i++) {
//   const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuario[i])

//   if(usuarioTrabalhaComCSS) {
//     console.log(`O usuário ${usuario[i].nome} trabalha com CSS`)
//   }
// }



function checaSeUsuarioUsaCSS(usuario) {
    // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
    // SE encontrar, retorne true da função, caso contrário retorne false
    let usuarioUsaCSS = false
    for (i = 0; i < usuario.tecnologia.length; i++){
        if (usuario.tecnologia[i] == 'CSS'){
            usuarioUsaCSS = true
            i = usuario.tecnologia.length    
        }
    }
    return usuarioUsaCSS;
}

for (let i = 0; i < usuario.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuario[i])
    
    if(usuarioTrabalhaComCSS) {
      console.log(`O usuário ${usuario[i].nome} trabalha com CSS`)
    }
}


// Soma de despesas e receitas
// Crie um programa que calcula a soma de receitas e despesas de usuários e no fim retorna o saldo (receitas - despesas).

// Utilize o array de usuários abaixo:

// const usuarios = [
//   {
//     nome: 'Salvio',
//     receitas: [115.3, 48.7, 98.3, 14.5],
//     despesas: [85.3, 13.5, 19.9]
//   },
//   {
//     nome: 'Marcio',
//     receitas: [24.6, 214.3, 45.3],
//     despesas: [185.3, 12.1, 120.0]
//   },
//   {
//     nome: 'Lucia',
//     receitas: [9.8, 120.3, 340.2, 45.3],
//     despesas: [450.2, 29.9]
//   }
// ]
// Percorra o array de usuários e para cada usuário chame uma função chamada calculaSaldo que recebe como parâmetro as receitas e despesas do usuário:

// function calculaSaldo(receitas, despesas) {

// }
// Crie uma segunda função que recebe como parâmetro um array de números e retorna a soma deles e use-a para calcular a soma de receitas e despesas dentro da função calculaSaldo:

// function somaNumeros(numeros) {
//   // Soma todos números dentro do array "numeros"
// }
// A função calculaSaldo deve utilizar a função somaNumeros para calcular a soma de receitas e despesas e no fim retornar o saldo do usuário, ou seja receitas - despesas.

// No fim exiba todos usuários em telas, seu respectivo saldo e SE o saldo é POSITIVO ou NEGATIVO:

// Fulano possui saldo POSITIVO de 43.3
// Sicrano possui saldo NEGATIVO de -90.3

const usuarios = [
    {
      nome: 'Salvio',
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: 'Marcio',
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: 'Lucia',
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
]

function somaNumeros(numeros) {
    // Soma todos números dentro do array "numeros"
    let total = 0

    for (let i = 0; i < numeros.length; i++) { //NÃO PODE UTILIZAR A MESMA VARIAVEL DO FOR PRINCIPAL
        total = total + numeros[i]
    }

    return total
}

function calculaSaldo(receitas, despesas) {
    const totalReceitas = somaNumeros(receitas);
    const totalDespesas = somaNumeros(despesas);

    const total = totalReceitas - totalDespesas
    return total
}

for (let i = 0; i < usuarios.length; i++) {
    let saldo = calculaSaldo(usuarios[i].receitas,usuarios[i].despesas);

    if (saldo > 0) {
        console.log(`${usuarios[i].nome} possui saldo POSITIVO de ${saldo}`)
    } else {
        console.log(`${usuarios[i].nome} possui saldo NEGATIVO de ${saldo}`)
    }
}