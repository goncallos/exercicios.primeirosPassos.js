function escrevaMeuNome(nome) {
    return 'Meu nome é ' + nome;
}


function verificaridade(idade) {
    if (idade >= 18) {
        console.log(escrevaMeuNome('Leandro') + 'Sou maior de idade');
    }else {
        console.log(escrevaMeuNome('Murilo') + 'sou menor de idade')
    }
}

verificaridade(11)