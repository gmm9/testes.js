const cliente = {
    nome: "Andre",
    idade: "36",
    cpf:"12543652266",
    email:"andre@email.com"
}

const chaves = ['nome','idade','cpf','email'];

// for (i = 0; i<chaves.length; i++){
// console.log(cliente[chaves[0]])
// }

chaves.forEach(i=>console.log(cliente[i]))
