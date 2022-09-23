import { dbQuery, dbQueryFirst } from "../services/db";
import { GrupoAcademico } from "../classes-integration/grupoacademico";

const insertGpAcademico = async (gpAcad: GrupoAcademico) => {
    await dbQuery(`INSERT INTO GrupoAcademico (nome, descricao, dataCriacao, statusGrupo, idDepartamento, cpfResponsavel, limiteParticipantes) VALUES (?, ?, ?, ?, ?, ?, ?)`, [gpAcad.nome, gpAcad.descricao, gpAcad.dataCriacao, gpAcad.statusGrupo, gpAcad.idDepartamento, gpAcad.cpfResponsavel, gpAcad.limiteParticipantes]);
    //console.log("testee")
    //let retorno = await dbQuery(`SELECT seq AS Id FROM sqlite_sequence WHERE name = 'GrupoAcademico' `, []);
    
    //return getGrupoAcademico(retorno[0].Id);
    return console.log('Inserido com sucesso');
}

const updateGpAcademico = async (gpAcad: GrupoAcademico, id: number) => {
    await dbQuery(`UPDATE GrupoAcademico SET nome = ?, descricao = ?, dataCriacao = ?, statusGrupo = ? , idDepartamento = ?, cpfResponsavel = ?, limiteParticipantes = ? WHERE idGrupo = ?`, [gpAcad.nome, gpAcad.descricao, gpAcad.dataCriacao, gpAcad.statusGrupo, gpAcad.idDepartamento, gpAcad.cpfResponsavel, gpAcad.limiteParticipantes, id]);
    return getGrupoAcademico(gpAcad.idGrupo);
}
const ativarGpAcademico = async (gpAcad: GrupoAcademico, id: number)=> {
    await dbQuery(`UPDATE GrupoAcademico SET statusGrupo = 1 WHERE idGrupo = ?`, [id]);
    return getGrupoAcademico(gpAcad.idGrupo);
}
const desativarGpAcademico = async (gpAcad: GrupoAcademico, id: number)=> {
    await dbQuery(`UPDATE GrupoAcademico SET statusGrupo = 0 WHERE idGrupo = ?`, [id]);
    return getGrupoAcademico(gpAcad.idGrupo);
}

const trocarResponsavelGpAcademico = async (gpAcad: GrupoAcademico, id: number)=> {
    await dbQuery(`UPDATE GrupoAcademico SET cpfResponsavel = ? WHERE idGrupo = ?`, [gpAcad.cpfResponsavel, id]);
    return getGrupoAcademico(gpAcad.idGrupo);
}

const listGpAcademico = async () => {
    const retorno =  await dbQuery(`SELECT * FROM GrupoAcademico`, []);
    return retorno as GrupoAcademico[];
}

const getGrupoAcademico = async (id: number) => {

    const retorno = await dbQueryFirst(`SELECT * FROM GrupoAcademico WHERE idGrupo = ?`, [id]);
    return retorno as GrupoAcademico | undefined;
}

const getGrupoAcademicoNome = async (nome: string) => {

    const retorno = await dbQueryFirst(`SELECT * FROM GrupoAcademico WHERE nome = ?`, [nome]);
    return retorno as GrupoAcademico | undefined;
}

const deleteGrupoAcademico = async (id: number) => {
    await dbQueryFirst(`DELETE FROM GrupoAcademico WHERE idGrupo = ?`, [id]);
}

export const GrupoAcademicoModel = {
    insertGpAcademico,
    listGpAcademico,
    getGrupoAcademico,
    deleteGrupoAcademico,
    updateGpAcademico,
    ativarGpAcademico,
    desativarGpAcademico,
    trocarResponsavelGpAcademico,
    getGrupoAcademicoNome
}