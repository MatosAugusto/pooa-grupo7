//Classes
class Perfil {
    private nome: string;
    private criadoEm: Date;
    private alteradoEm: Date;
    constructor(nome: string, criadoEm: string, alteradoEm: string){
        this.nome = nome;
        this.criadoEm = new Date(criadoEm);
        this.alteradoEm = new Date(alteradoEm);
    }
    public adicionarNovaAcao(nomeAcao: string, codigoAcao: string){ 
    }
    public podeExecutar(nomeAcao: string, codigoAcao: string){

    }
}
class Acoes {
    private nome: string;
    private codigo: string;
    constructor(nome: string, codigo: string){
        this.nome = nome;
        this.codigo = codigo;
    }
}
class Usuario {
    private nome: string;
    private cpf: string;
    private dataNascimento: Date;
    private senha: string;
    private perfil: Perfil;
    constructor(nome: string, cpf: string, dataNascimento: string, senha: string, perfil: Perfil){
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = new Date(dataNascimento);
        this.senha = senha;
        this.perfil = perfil;
    }
    public atualizaUsuario(idUsuario: string, novosDados: Usuario){}
    public removeUsuario(idUsuario: string){}
}
class Aluno extends Usuario{
    private RA: string;
    private disciplinas: Disciplinas[];
    private statusBiblioteca: boolean;
    constructor(RA: string, disciplinas: Disciplinas[], statusBiblioteca: boolean, nome: string, cpf: string, dataNascimento: string, senha: string, perfil: Perfil){
        super(nome, cpf, dataNascimento, senha, perfil);
        this.RA = RA;
        this.disciplinas = disciplinas;
        this.statusBiblioteca = statusBiblioteca;
    }
}
class Disciplinas{
    private id: string;
    private nome: string;
    constructor(id: string, nome: string){
        this.id = id;
        this.nome = nome;
    }
}
class Professor extends Usuario{
    private nroUniversidade: string;
    private departamento: Departamento;
    private statusBiblioteca: boolean;
    constructor(nroUniversidade: string, departamento: Departamento, statusBiblioteca: boolean, nome: string, cpf: string, dataNascimento: string, senha: string, perfil: Perfil){
        super(nome, cpf, dataNascimento, senha, perfil);
        this.nroUniversidade = nroUniversidade;
        this.departamento = departamento;
        this.statusBiblioteca = statusBiblioteca;
    }
}
class Departamento{
    private id: string;
    private nome: string;
    private sigla: string;
    constructor(id: string, nome: string, sigla:string){
        this.id = id;
        this.nome = nome;
        this.sigla = sigla;
    }
}
class GrupoAcademico{
    private id: string;
    private nome: string;
    private descricao: string;
    private dataCriacao: Date;
    private status: boolean = true;
    private departamento: Departamento;
    private responsavel: Usuario;
    private representantes: Aluno[];
    private limiteParticipantes: number;
    private participantes: Aluno[];
    private listaEventos: Evento[];
    private eventosParticipados: Evento[];
    constructor(id: string, nome: string, descricao: string, dataCriacao:string, status: boolean, departamento: Departamento, responsavel: Usuario, representantes: Aluno[], limiteParticipantes: number, participantes: Aluno[], listaEventos: Evento[], eventosParticipados: Evento[]){
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.dataCriacao = new Date(dataCriacao);
        this.status = status;
        this.departamento = departamento;
        this.responsavel = responsavel;
        this.representantes = representantes;
        this.limiteParticipantes = limiteParticipantes;
        this.participantes = participantes;
        this.listaEventos = listaEventos;
        this.eventosParticipados = eventosParticipados;
    }
    public alterarLimiteParticipantes(limiteParticipantes:number){
        this.limiteParticipantes = limiteParticipantes;
    }
    public mudarStatus(status: boolean){
        this.status = status;
    }
    public acrescentarEvento(evento: Evento){}
}
class Evento{
    private nome: string;
    private data: Date;
    private horaInicio: Date;
    private horaFim: Date;
    private organizadores: Aluno[];
    private local: Local;
    private palestrantes: Usuario[];
    private grupoResponsavel: GrupoAcademico[];
    constructor(nome: string, data: string, horaInicio: number, horaFim: number, organizadores: Aluno[], local: Local, palestrantes: Usuario[], grupoResponsavel: GrupoAcademico[]){
        this.nome = nome; 
        this.data = new Date(data);
        this.horaInicio = this.data;
        this.horaFim = this.data;
        this.horaInicio.setHours(horaInicio);
        this.horaFim.setHours(horaFim);
        //this.horaInicio = new Date().setHours(horaInicio);
       // this.horaFim = new Date().setHours(horaFim);
        this.organizadores = organizadores;
        this.local = local;
        this.palestrantes = palestrantes;
        this.grupoResponsavel = grupoResponsavel;
    }
    public atualizarEvento(){}
}
class Local{
    private cep:string;
    private logradouro: string;
    private numero: number;
    private bairro: string;
    private cidade: string;
    constructor(cep: string, logradouro: string, numero: number, bairro: string, cidade:string){
        this.cep = cep;
        this.logradouro = logradouro;
        this.numero = numero;
        this.bairro = bairro;
        this.cidade = cidade;
    }
}
class ProcessoSeletivo{
    private data: Date;
    private nroInscritos: number;
    private nroVagas: number;
    private nroAprovados: number;
    private etapas: Etapa[];
    constructor(data: string, nroInscritos: number, nroVagas: number, nroAprovados: number, etapas: Etapa[]){
        this.data = new Date(data);
        this.nroInscritos = nroInscritos;
        this.nroVagas = nroVagas;
        this.nroAprovados = nroAprovados;
        this.etapas = etapas;
    }
    public verificaAluno(aluno: Aluno){}
}
class Etapa{
    private nome: string;
    private descricao: string;
    constructor(nome: string, descricao: string){
        this.nome = nome;
        this.descricao = descricao;
    }
}
