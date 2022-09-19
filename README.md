# Sistema para Gerenciamento de Grupos Acadêmicos

Projeto realizado para a disciplina de Programação Orientada a Objetos Avançada. (PROJETO EM DESENVOLVIMENTO)

## Descrição

Assim como descrito no documento de requisitos fornecido, o sistema de gerenciamento de grupos acadêmicos tem como objetivo o gerenciar (cadastrar, consultas, incluir aluno, etc) grupos acadêmicos no contexto de uma universidade X. Para tal, o sistema deve fornecer endpoint REST para que gerenciamento seja feito por outro sistema, pessoa ou front-end. 

O documento de requisitos original foi fornecido apenas para os alunos da disciplinas. Então, foi criado um resumo que você poderá encontrar em /docs.

## Detalhes Técnicos

### Linguagem 

![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) 

### Banco de Dados 

![mySQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white) 

### API

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) 
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge) 
  
### Arquitetura
Utilizamos um conceito similar ao de "Clean Architecture", o sistema possui camadas para facilitar a manuntenção futura. Da mais interna para a mais externa: *Classe*, *Service* e *Controller*

Outra peculiaridade do nosso sistema é a utilização do conceito de *Profille* e *Action*. Todo usuário possui um perfil, ou seja, possui uma categoria q permite (ou não) ele realizar certas ações.


## Autores

Augusto Matos
[@MatosAugusto](https://github.com/MatosAugusto)

Jorge Pires
[@jorgeprj](https://github.com/jorgeprj)

Matheus Silva
[@Theu011](https://github.com/Theu011)

## Histórico de Versão

* 0.1
    * Esqueleto das classes que vão ser utilizadas e seus relacionamentos.
* 0.2
    * Criação de um Banco de Dados
    * Esqueleto da API 
    * Estruturação quase completa das classes.
* 0.3
    * Finalização do Banco de Dados
    * Estruturação quase completa da API
    * Criação quase completa da integração CLASSE -> CONTROLLER -> SERVICE -> REPOSITORY

 
 ## Links Externos
 * [Documento de Requisitos](https://github.com/MatosAugusto/pooa-grupo7/blob/main/docs/Requisitos.md)
