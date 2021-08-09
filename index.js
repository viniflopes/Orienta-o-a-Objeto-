import {Cliente} from "./Cliente.js"

import {contaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);
let numeroDeContas = 0;
const contaCorrenteRicardo = new contaCorrente(cliente1, 1001);

contaCorrenteRicardo.depositar(500);
const conta2 = new contaCorrente(cliente2, 102);


contaCorrenteRicardo.transferir(200, conta2)

console.log(contaCorrente.numeroDeContas);
