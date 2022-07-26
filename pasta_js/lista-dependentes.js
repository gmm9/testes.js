const cliente = {
    nome: "Andre",
    idade: "36",
    cpf: "12543652266",
    email: "andre@email.com",
    fones: ["5591234598", "5521988743124"],
    dependentes: [{ 
        nome: "Sara",
     parentesco: "filha",
     dataNasc:"20/03/2011" 
    }]
}

cliente.dependentes.push({
    nome:"Samia Maria",
    parentesco:"filha",
    dataNasc:"04/01/2014"
})

// console.log(cliente)

const filhaNova = cliente.dependentes.filter(dependente => dependente.dataNasc==="04/01/2014")

console.log(filhaNova[0].nome)