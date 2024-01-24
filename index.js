let saldoDeVitorias = soma(20,0 )

switch(true){
    case (saldoDeVitorias >= 1 && saldoDeVitorias <= 10) :
        console.log(" O Herói tem o saldo de " + saldoDeVitorias + " vitórias e está no nivel Ferro.")
        break;

    case (saldoDeVitorias >= 11 && saldoDeVitorias <= 20):
        console.log(" O Herói tem o saldo de " + saldoDeVitorias + " vitórias e está no nivel Bronze.")
        break;
        
    case (saldoDeVitorias >= 21 && saldoDeVitorias <= 50):
        console.log(" O Herói tem o saldo de " + saldoDeVitorias + " vitórias e está no nivel Prata.")
        break;
    
    case (saldoDeVitorias >= 51 && saldoDeVitorias <= 80):
        console.log(" O Herói tem o saldo de " + saldoDeVitorias + " vitórias e está no nivel Ouro.")
        break;
        
    case (saldoDeVitorias >= 81 && saldoDeVitorias <= 90):
        console.log(" O Herói tem o saldo de " + saldoDeVitorias + " vitórias e está no nivel Diamante.")
        break;
        
    case (saldoDeVitorias >= 91 && saldoDeVitorias < 100):
        console.log(" O Herói tem o saldo de " + saldoDeVitorias + " vitórias e está no nivel Lendário.")
        break;
        
    case (saldoDeVitorias >= 101):
        console.log("O Herói tem o saldo de " + saldoDeVitorias + " vitórias e está no nivel Imortal.")
}

function soma(vitorias, derrotas) {
    let saldoDeVitorias = vitorias - derrotas
    return saldoDeVitorias
}