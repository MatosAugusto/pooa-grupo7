"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkStatusAluno = void 0;
function checkStatusAluno(aluno) {
    var cpfAluno = aluno.getCpf();
    //retorna true se tiver pendências e false se não tiver
    var api = "https://rest-api-projeto-pooa-grupo1.herokuapp.com/situacao?cpf=" + cpfAluno;
    //retorna o número de disciplinas que o aluno está inscrito
    var api2 = "https://rest-api-projeto-pooa-grupo5.herokuapp.com/situacao?cpf=" + cpfAluno;
    if (!api) {
        return true;
    }
    return false;
    // if (!api && api2 >= 3){ 
    //     return true;
    // }
    // return false;
}
exports.checkStatusAluno = checkStatusAluno;
