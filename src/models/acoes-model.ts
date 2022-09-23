import { dbQuery, dbQueryFirst } from "../services/db";
import { Acao } from "../classes-integration/acao";

const insertAcao = async (acao: Acao) => {
    await dbQuery(`INSERT INTO Acoes (codigo, nome) VALUES (?, ?)`, [acao.codigo, acao.nome]);
    let retorno = await dbQuery(`SELECT seq AS Id FROM sqlite_sequence WHERE name = 'Acoes' `, []);
    return getAcao(retorno[0].Id);
}

const updateAcao = async (acao: Acao, id: string) => {
    await dbQuery(`UPDATE Acoes SET codigo = ?, nome = ? WHERE codigo = ?`, [acao.codigo, acao.nome, id]);
    return getAcao(acao.codigo);
}

const listAcao = async () => {
    const retorno =  await dbQuery(`SELECT * FROM Acoes`, []);
    return retorno as Acao[];
}

const getAcao = async (codigo: string) => {
    const retorno = await dbQueryFirst(`SELECT * FROM Acoes WHERE codigo = ?`, [codigo]);
    return retorno as Acao | undefined;
}

const deleteAcao = async (codigo: string) => {
    await dbQueryFirst(`DELETE FROM Acoes WHERE codigo = ?`, [codigo]);
}

export const acaoModel = {
    insertAcao,
    listAcao,
    getAcao,
    deleteAcao,
    updateAcao
}