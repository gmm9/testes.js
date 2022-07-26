// medias 10, 6.5, 8, 7.5;

// let nota1 = 10;
// let nota2 = 6.5;
// let nota3 = 8;
// let nota4 = 7.5;

// const notas = [10,6.5,8,7.5]

// // let media = (nota1 + nota2 + nota3 + nota4) / 4;

// let media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length;

// console.log(media);

// #########################

// const notas = [10,6,8];

// notas.push(7);

// console.log(notas);

// let media = (notas[0]+ notas[1] + notas[2] + notas[3])/notas.length;

// console.log(media);

// #########################

// const notas = [10,7,8,5,10];

// notas.pop();

// console.log(notas);

// let media = (notas[0]+ notas[1] + notas[2] + notas[3])/notas.length;

// console.log(media);
// console.log(`A media é ${media}`)

// ########################


// const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinicius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

// const sala1 = nomes.slice(0, nomes.length/2);
// const sala2 = nomes.slice(nomes.length/2);

// console.log(sala1.length);
// console.log(sala2.length);

// #########################

// const listaDeChamada = ['João','Ana','Caio','Lara','Marjorie','Leo'];

// listaDeChamada.splice(1,2,'Rodrigo');
// console.log(listaDeChamada);

// #########################

// const salaPython = ['Melissa','Helena','Rodrigo'];
// const salaJS = ['Ju','Leo','Raquel'];

// const salaUnidas = salaPython.concat(salaJS);

// console.log(salaUnidas);

// #########################

// const alunos = ['João','Juliana','Caio','Ana'];
// const medias = ['10','8','7.5','9'];

// let listaCompleta = [alunos,medias];

// console.log(`${listaCompleta[0][0]}, a sua média é ${listaCompleta[1][0]}`);
// console.log(`${listaCompleta[0][1]}, a sua média é ${listaCompleta[1][1]}`);

// #########################

// const alunos = ['João','Juliana','Caio','Ana'];
// const medias = ['10','8','7.5','9'];

// let listaCompleta = [alunos,medias];

// const exibeTudo = (nomeAluno) => {
//     if (listaCompleta[0].includes(nomeAluno)) {
//         indice = listaCompleta[0].indexOf(nomeAluno)
//         return listaCompleta[0][indice] + `,sua media é ` + listaCompleta[1][indice];
//     } else {
//         return "Aluno não esta cadastrado";
//     }
// }
// console.log(exibeTudo('Ana'));

// #########################

// const numeros = [100, 200, 300, 400, 500, 600];

// for (let i = 0; i < numeros.length; i++) {
//     console.log(i, numeros[i]);
// }

// #########################

// const notas = [10,6.5,8,7.5];

// let somaNotas = 0;

// for(i = 0; i < notas.length; i++) {
//     somaNotas += notas[i];

// }
// let media = somaNotas/notas.length;

// console.log(media);

// ##########################

//  const notas = [10,6.5,8,7.5];

//  let somaNotas = 0;

//  notas.forEach(nota => {
//     somaNotas  += nota 
//  })

//  let media = somaNotas/notas.length;
//  console.log(media);

// #############################

// const notas1 = [10 , 6.5, 8 ,7.5]
// const notas2 = [9  , 6  , 6]
// const notas3 = [8.5, 9.5]

// const notasGerais = [notas1,notas2,notas3]

// let media = 0

// for (let i = 0; i < notasGerais.length; i++) {
//   for (let j = 0; j < notasGerais[i].length; j++) {
//     media += notasGerais[i][j]/notasGerais[i].length;
//   }
// }

// media = media/notasGerais.length


// console.log(media)

// const nomes = ["Ana","Ju","Leo","Paula"]

// nomes.forEach(imprimiNomes)

// function imprimiNomes(nome) {
//     console.log(nome);
// }

// #########################

// const notas = [10, 9, 8, 7, 6];

// const novasNotas = notas.map( nota => nota == 10 ? nota : ++nota);

// console.log(novasNotas);

// const nomes = ['ana Julia','Caio vinicius','BIA silva'];

// const nomesAtualizados = nomes.map(nome => nome.toUpperCase())

// console.log(nomesAtualizados);

// ####################

// const alunos = ['Ana','Marcos','Maria','Mauro'];

// const medias = [7,4.5,8,7.5];

// const reprovados = alunos.filter((nome,indice) => medias[indice] < 5)

// console.log(`reprovados: ${reprovados}`);

// ####################

const salaJS = [7,8,8,7,10,6.5,4,10,7];
const salaJava = [6,5,8,9,5,6];
const salaPython = [7,3.5,8,9.5];

function mediaSala(notasSalas) {
    const somaNotas = notasSalas.reduce((acum,atual) => atual + acum,0)
    return somaNotas/notasSalas.length
}

console.log(`Média da sala de JS ${mediaSala(salaJS)}`)
console.log(`Média da sala de Java ${mediaSala(salaJava)}`)
console.log(`Média da sala de Python ${mediaSala(salaPython)}`)