"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var serviceAluno_1 = require("../services/serviceAluno");
function inscreverNoPS(aluno, ps) {
    var aluno2 = new serviceAluno_1.serviceAluno();
    aluno2.inscreverNoPS(aluno, ps);
}
