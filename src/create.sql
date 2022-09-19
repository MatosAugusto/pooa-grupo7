drop database if exists Grupo7;

create database Grupo7;

use Grupo7;

create table Perfil(
    nome varchar(30) not null, 
    criadoEm varchar(20) not null,
    alteradoEm varchar(20) not null,
    primary key(nome)
);

create table Acoes( 
    nome varchar(256) not null, 
    codigo varchar(4) not null,
    primary key(codigo)
); 

create table AcoesPerfil(
    acao varchar(4) not null,
    perfil varchar(30) not null, 
    primary key (acao, perfil),
    foreign key (acao) references Acoes(codigo),
    foreign key (perfil) references Perfil(nome)
);

create table Usuario(
    nome varchar(256) not null, 
    cpf varchar(11) unique, 
    dataNascimento varchar(20), 
    senha varchar(256) not null, 
    perfil varchar(30),
    primary key (cpf),
    foreign key (perfil) references Perfil(nome)
);

create table Aluno(
    cpfUsuario varchar(11) not null,
    ra varchar(10) not null,
    statusBiblioteca varchar(9),
    primary key (ra),
    foreign key (cpfUsuario) references Usuario(cpf),
    CONSTRAINT status_check CHECK (statusBiblioteca IN('EM_DIA', 'DEVENDO'))
);

create table Departamento(
    idDepartamento bigint not null auto_increment, 
    nome varchar(256) not null, 
    sigla varchar(5) not null,
    primary key(idDepartamento)
);

create table Professor(
    cpfUsuario varchar(11) not null, 
    idDepartamento bigint not null, 
    nroUniversidade varchar(10) not null, 
    statusBiblioteca boolean,
    primary key (nroUniversidade), 
    foreign key (cpfUsuario) references Usuario(cpf),
    foreign key (idDepartamento) references Departamento(idDepartamento)
);

create table Disciplina(
    idDisciplina bigint not null auto_increment,
    nome varchar(256) not null,
    primary key(idDisciplina) 
);

create table AlunoDisciplinas(
    raAluno varchar(10) not null,
    idDisciplina bigint not null,
    primary key(raAluno, idDisciplina),
    foreign key(raAluno) references Aluno(ra),
    foreign key(idDisciplina) references Disciplina(idDisciplina)
);

create table Etapa(
    idEtapa bigint not null auto_increment, 
    nome varchar(256) not null, 
    descricao varchar(256) not null,
    primary key(idEtapa)
); 

create table ProcessoSeletivo(
    idProcesso bigint not null auto_increment,
    dataProcesso varchar(20),
    nroInscritos int,
    nroVagas int,
    nroAprovados int,
    etapaAtual int,
    primary key(idProcesso) 
);

create table EtapaProcesso(
    etapa bigint not null,
    processo bigint not null,
    primary key (etapa, processo),
    foreign key (etapa) references Etapa(idEtapa),
    foreign key (processo) references ProcessoSeletivo(idProcesso)
);

create table EtapaAluno(
    etapa bigint not null,
    raAluno varchar(10) not null,
    primary key (etapa) references Etapa(idEtapa),
    foreign key(raAluno) references Aluno(ra)
);

create table GrupoAcademico(
    idGrupo varchar(5) not null,
    nome varchar(256) not null, 
    descricao varchar(256) not null,
    dataCriacao varchar(20) not null,
    statusGrupo boolean not null,
    idDepartamento bigint not null,
    cpfResponsavel varchar(11),
    limiteParticipantes int,
    primary key(idGrupo),
    foreign key (idDepartamento) references Departamento(idDepartamento),
    foreign key (cpfResponsavel) references Usuario(cpf)
);

create table Representantes(
    idGrupo varchar(5) not null,
    raAluno varchar(10) not null,
    primary key(idGrupo, raAluno),
    foreign key(idGrupo) references GrupoAcademico(idGrupo),
    foreign key(raAluno) references Aluno(ra)
);

create table Participantes(
    idGrupo varchar(5) not null,
    raAluno varchar(10) not null,
    primary key(idGrupo, raAluno),
    foreign key(idGrupo) references GrupoAcademico(idGrupo),
    foreign key(raAluno) references Aluno(ra)
);

create table LocalEvento(
    cep varchar(8) not null,
    logradouro varchar(100) not null,
    numero int,
    bairro varchar(100) not null,
    cidade varchar (100) not null,
    primary key(cep)
);

create table Evento(
    nome varchar(100) not null, 
    dataCriacao varchar(20) not null,
    statusEvento boolean not null,
    horaInicio varchar(20) not null,
    horaFim varchar(20) not null,
    cepLocal varchar(8) not null,
    statusEvento varchar(12) not null,
    primary key(nome),
    foreign key (cepLocal) references LocalEvento(cep),
    CONSTRAINT status_check CHECK (statusEvento IN('A_ACONTECER', 'ACONTECENDO', 'CANCELADO'))
);

create table Organizadores(
    nomeEvento varchar(100) not null,
    raAluno varchar(10) not null,
    primary key(nomeEvento, raAluno),
    foreign key(nomeEvento) references Evento(nome),
    foreign key(raAluno) references Aluno(ra)
);

create table Palestrantes(
    nomeEvento varchar(100) not null,
    cpfUsuario varchar(10) not null,
    primary key(nomeEvento, cpfUsuario),
    foreign key(nomeEvento) references Evento(nome),
    foreign key(cpfUsuario) references Usuario(cpf)
);

create table GrupoEvento(
    nomeEvento varchar(100) not null,
    idGrupo varchar(10) not null,
    tipo varchar(20) not null,
    primary key(nomeEvento, idGrupo),
    foreign key(nomeEvento) references Evento(nome),
    foreign key(idGrupo) references GrupoAcademico(idGrupo),
    CONSTRAINT tipo_check CHECK (tipo IN('ORGANIZADOR', 'PARTICIPANTE'))
);
 