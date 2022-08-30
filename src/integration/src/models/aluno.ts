import Disciplinas from "./disciplinas";

type Aluno = {
    RA: string;
    disciplinas: Disciplinas[];
    statusBiblioteca: boolean;
}
export default Aluno