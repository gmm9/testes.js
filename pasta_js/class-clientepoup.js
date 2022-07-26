class Cliente {
    constructor(nome,email,cpf,saldo){
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
    }
    exibirSaldo() {
        console.log(this.saldo);
    }
}

class ClientePoupanca extends Cliente{
    constructor(nome,email,cpf,saldo,saldoPoup){
        super(nome,email,cpf,saldo);
        this.saldoPoup = saldoPoup;
    }
    depositarPoupanca(valor) {
        this.saldoPoup += valor * 1.1;
    }
}

const andre = new ClientePoupanca("Andre","andre@gmail.com","1232131245",100,200);

console.log(andre.saldoPoup);

andre.depositarPoupanca(10);

console.log(andre.saldoPoup)