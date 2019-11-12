//console.log(typeof notaAluno01);

// Criar um programa que calcula a média
// das turmas de alunos e envia
// mensagem do calculo da média

const alunosDaTurmaA = [
    {
        nome: "Vagner",
        nota: 3.8
    },
    {
        nome: "Nerves",
        nota: 10
    },
    {
        nome: "Fulano",
        nota: 2
    }
]

const alunosDaTurmaB = [
    {
        nome: "Cleiton",
        nota: 5
    },
    {
        nome: "Robson",
        nota: 0
    },
    {
        nome: "Ciclano",
        nota: 2
    },
    {
        nome: "Novo Aluno",
        nota: 5
    }
]

function calculaMedia (alunos) {
    let soma = 0
    for (let i = 0; i < alunos.length; i++ ) {
        soma = soma + alunos[i].nota;
    }
    
    const media = soma / alunos.length
    return media;
}

const media1 = calculaMedia(alunosDaTurmaA)
 const media2 = calculaMedia(alunosDaTurmaB)

function enviaMensagem (media, turma) {
    //Se a média for maior que 5 parabenizar a turma
    if (media > 5) {
        console.log(`A média da turma ${turma} foi de ${media}. Parabens.`)
    } else {
        console.log(`A média da turma ${turma} é menor que 5.`)
    }
}

 enviaMensagem(media1, 'turmaA');
 enviaMensagem(media2, 'turmaB');


 // Marcar aluno repovador se a nota for menor que 5
 // e tambem enviar uma mensagem

function marcarComoRerpovado(aluno) {
    aluno.reprovado = false
    if (aluno.nota < 5 ){
        aluno.reprovado = true;
    }
        
}

function enviarMensagemReprovado(aluno){
    if (aluno.reprovado){
        console.log(`O aluno ${aluno.nome} esta reprovado!`)
    }
}

function alunoReprovado(alunos){
    for (let aluno of alunos ) {
       marcarComoRerpovado(aluno)
       enviarMensagemReprovado(aluno) 
    } 
}

alunoReprovado(alunosDaTurmaA)
alunoReprovado(alunosDaTurmaB)

 









