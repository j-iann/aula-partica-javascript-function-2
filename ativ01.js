//#1
const media_aluno = function(n1, n2) {
    var media = (n1 + n2) / 2;
    if (media >= 5 && media < 7) {
        return 'Recuperação!'
    }
    else if (media >= 7) {
        return 'Aprovado!';
    }
    else if (media < 5) {
        return 'Reprovado!';
    }
}

console.log(media_aluno(8, 7));

//#2
const tabuada3 = function() {
    var resultados = [];
    for (let p = 1; p <= 10; p++) {
        resultados.push(3 * p);
    }
    var resultadosString = resultados.toString();
    return resultadosString;
}
console.log(tabuada3());

//#3
const dataNascimento = ano => {
    if ((2021 - ano) >= 18) {
        return 'maior de idade';
    }
    else {
        return 'menor de idade';
    }
}
console.log(dataNascimento(2006));