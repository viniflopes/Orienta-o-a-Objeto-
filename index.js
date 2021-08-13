import {Cliente} from "./Cliente.js"
import { Gerente } from "./Funcionario/Gerente.js"
import { Diretor } from "./Funcionario/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 2356895867);
diretor.cadastrarSenha("321");
const gerente = new Gerente("Laura", 5000, 2415636298);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Luiza", 16256985487, "2209");

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "321");

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "2209");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);
