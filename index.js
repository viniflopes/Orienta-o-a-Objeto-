import {Cliente} from "./Cliente.js"
import { Gerente } from "./Funcionario/Gerente.js"
import { Diretor } from "./Funcionario/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 2356895867);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Laura", 5000, 2415636298);
gerente.cadastrarSenha("123");

const estaLogado = SistemaAutenticacao.login(gerente, "123");

console.log(estaLogado);
