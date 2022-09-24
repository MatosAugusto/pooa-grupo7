# Sistema para Gerenciamento de Grupos Acadêmicos 

Esse `README-PROF.md` foi criado, exclusivamente, para a avaliação da disciplina Programação Orientada a Objetos Avançada, com o Professor Valter Vieira de Camargo (Ufscar).

- [Sistema para Gerenciamento de Grupos Acadêmicos](#sistema-para-gerenciamento-de-grupos-acadêmicos)
  - [Informações Básica](#informações-básica)
    - [Grupo 7 - Sistema de Gerenciamento de Grupos Acadêmicos](#grupo-7---sistema-de-gerenciamento-de-grupos-acadêmicos)
  - [Detalhes Técnicos](#detalhes-técnicos)
    - [Linguagem](#linguagem)
    - [Banco de Dados](#banco-de-dados)
    - [API](#api)
    - [Arquitetura](#arquitetura)
    - [Padrão Profile/Action](#padrão-profileaction)
    - [Fluxograma dos Dados](#fluxograma-dos-dados)
  - [Desenvolvimento do projeto](#desenvolvimento-do-projeto)
    - [Apresentação 1](#apresentação-1)
    - [Apresentação 2](#apresentação-2)
    - [Apresentação 3](#apresentação-3)
    - [Apresentação 4](#apresentação-4)
    - [Conclusão do Projeto](#conclusão-do-projeto)

## Informações Básica

### Grupo 7 - Sistema de Gerenciamento de Grupos Acadêmicos

* [Augusto Matos](https://github.com/MatosAugusto)
* [Jorge Pires](https://github.com/jorgeprj) 
* [Matheus Silva](https://github.com/Theu01)

## Detalhes Técnicos

### Linguagem 

![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) 

Escolhemos o typescript por conta da monitoria do Zanan. Foi a linguagem q ele utilizou para demonstrar alguns códigos e optamos por utiliza-la para ter alguns códigos para nos basear

### Banco de Dados 

![mySQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white) 

 
Obviamente, a camada mais interna do sistema. Foi criada no mySql apenas com o intuito de facilitar durante a criação dos códigos e para realizar alguns testes.
    
**Disponível em**: [`./src/create.sql`](https://github.com/MatosAugusto/pooa-grupo7/blob/main/src/create.sql)



### API

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) 
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge) 

Com certeza a parte mais dificil de criar. Como não tivemos nenhuma aula sobre, acabamos tendo que descobrir e aprender como fazer.

A API foi upada no Heroku e disponibilizamos o link para os 2 grupos que precisamos realizar a integração. Até a data de entrega, conseguimos implementar 2 funcionalidades através da API. A primeira, é a necessidade dos outros grupos: **Listagem de todos os grupos acadêmicos de um determinado aluno**: [Teste Criado](https://api-grupo7.herokuapp.com/api/v1/grupoAcademico/buscarRA/791085). A segunda funcionalidade é a listagem de todos os grupos acadêmicos: [Teste Criado](https://api-grupo7.herokuapp.com/api/v1/grupoAcademico)


**Disponível em**: https://api-grupo7.herokuapp.com/api/v1/grupoAcademico/buscarRA/791085

**Disponível em**: https://api-grupo7.herokuapp.com/api/v1/grupoAcademico


Outro ponto importante é como utilizaremos as outras APIs. As duas são utilizadas em apenas uma função, para checkar o status do aluno, que esta presente em `./src/interfaces/iIntegracao.ts`. Pensando em uma possível manuntenção futura, decidimos criar uma interface responsável apenas por isso. O que nos permite apenas altera-la em caso de alguma mudança com qualquer uma das APIs.


**Disponível em**: [`./src/interfaces/iIntegracao.ts`](https://github.com/MatosAugusto/pooa-grupo7/blob/main/src/create.sql)

### Arquitetura

![Arquitetura](https://uploaddeimagens.com.br/images/004/027/750/full/graphic.png?1663620271)

Utilizamos um conceito similar ao de "Clean Architecture", o sistema possui camadas para facilitar a manuntenção futura. Dessa forma, separamos o projeto em 6 pacotes, além do banco de dados.

* :file_folder: **Classes** 

    Camada responsavel pela determinação dos objetos: relações e atributos. 
    
    **Disponível em:** [`./src/classes`](https://github.com/MatosAugusto/pooa-grupo7/tree/main/src/classes)

* :file_folder: **Repositories**

    Camada responsavel pela conexão com o banco de dado. Será feita a integração por aqui.
    
    **Disponível em:** [`./src/repositories`](https://github.com/MatosAugusto/pooa-grupo7/tree/main/src/repositories)

* :file_folder: **Services**

    Aqui é onde está toda a lógica do projeto. É a conexão entre o controller e o banco de dados.
    
    **Disponível em:** [`./src/services`](https://github.com/MatosAugusto/pooa-grupo7/tree/main/src/services)

* :file_folder: **Interfaces**

    Uma camada para facilitar ainda mais nas manutenções futuras. Além disso, as interfaces impedem que classes saibam informações que não precisam.
    
    **Disponível em:** [`./src/interfaces`](https://github.com/MatosAugusto/pooa-grupo7/tree/main/src/services)

* :file_folder: **Controllers**

    Camada responsavel por chamar as ações que serão realizadas no sistema. De forma geral, o controller será chamado pela View, ou seja, pela parte de front-end do projeto.
    
    **Disponível em:** [`./src/controllers`](https://github.com/MatosAugusto/pooa-grupo7/tree/main/src/controllers)

* :file_folder: **Integration**
  
    Esse pacote é onde encontra a API REST. Responsavel pela integração do nosso sistema, com qualquer outro
    
    **Disponível em:** [`./src/integration`](https://github.com/MatosAugusto/pooa-grupo7/tree/main/src/classes)

### Padrão Profile/Action
Durante uma das monitorias, o Zanan explicou e demonstrou sobre o padrão Profile/Action. Que consta na definição de um profile para cada usuário do sistema que o permite, ou não, realizar certas ações. Esse padrão é uma das chaves para que o projeto tenha uma maior Manutenibilidade, um dos principais pontos da disciplina. Para qualquer nova definição sobre o que o usuário pode fazer, ou a inserção de um novo tipo de usuário, basta a manuntenção no Profile/Action. 

Um bom exemplo desse padrão sendo utilizado de forma significativa é na função `async trocarResponsavel(grupo: GrupoAcademico, responsavel: Usuario` presente no [*serviceResponsável*](ttps://github.com/MatosAugusto/pooa-grupo7/blob/main/src/services/serviceResponsavel.ts). Ao novo responsável ser analisado, o perfil dele é trocado: de *Professor* para *Responsavel* e do antigo volta a ser apenas *Professor*. Um detalhe dessa implementação, é que qualquer nova ação que o Responsável de um grupo acadêmico passa a poder realizar, apenas precisamos adicionar a Action no Profile *Responsável*.


   **Disponível em:** [`./src/classes/perfil.ts`](https://github.com/MatosAugusto/pooa-grupo7/blob/main/src/classes/perfil.ts)
   
   **Disponível em:** [`./src/classes/acoes.ts`](https://github.com/MatosAugusto/pooa-grupo7/blob/main/src/classes/acao.ts)


### Fluxograma dos Dados

![Fluxograma](https://uploaddeimagens.com.br/images/004/034/913/full/Request.png?1663983955)

A partir dessa imagem é possível compreendeer melhor como funciona o sistema. O pedido chega por meio do controller, esse controller é chamado a partir da view que, por exemplo, pode ser um site. O controller aciona o service que realiza toda lógica necessária para a execução da ação requisitada, que aciona o Repository, seja para pegar uma informação ou para colocar uma nova informação, que é o único com acesso ao Banco de Dados.

## Desenvolvimento do projeto
Como forma 4 apresentações, tentamos seguir ao máximo o cronograma proposto. No entanto, por conta de ser um cronograma muito apertado, tivemos muita dificuldade, principalmente com a API REST.

### Apresentação 1
Logo antes da primeira apresentação, um integrante do nosso grupo desistiu da matéria. Então, o projeto que era para ser realizado em 4, foi realizado em 3 desde o começo.

Para criar o primeiro diagrama, baseado no primeiro documento de requisitos e o que foi pedido no cronograma, tivemos certas dificuldades, principalmente em relação aos relacionamentos. O digrama criado ainda era simples, só contava com as classes, atributos e relacionamentos. Nesse primeiro momento não nos preocupamos com pacotes.

### Apresentação 2
Para a segunda apresenação, o documento de requisitos foi modificado, implicando em uma mudança no nosso diagrama.Nesse segundo diagrama, começamos a pensar no Design Patterns. Além disso, criamos esse repositório onde o grupo trabalhou durante todo o processo. Como nessa apresentação, o diagrama era o mair importante, focamos nele e apenas criamos as classes no git.

### Apresentação 3
Foi a primeira apresentação focada nos códigos, criamos toda lógica e conseguimos definir melhor como nosso sistema funcionaria. Percebemos, que a gente complicou alguns pontos no diagrama, que na prática não alterava tanto o funcionamento do código. A partir dessa apresentação já tinhamos definido o uso da arquitetura utilizada e dos padrões. Outra medida, foi a criação/definição definitiva dos pacotes. Além da base utilizada para a criação do BD em mySQL.

### Apresentação 4
A apresentação final foi simples: finalização total do projeto. Obviamente, não conseguimos implementar a melhor foma possível do código. no entano, conseguimos um resultado excelente para um pouco tempo. A maior parte do trabalho foi focada na criação completa da API, com certeza o ponto que mais tivemos dificuldade, por não ter sido tratado em aula nada sobre o tema. A estrutura básica da API estava pronta desde a última apresentção, no entanto faltav a integração com o banco de dados, além da documentação, e upar ela no Heroku (escolhido por maior parte dos outros grupos).


### Conclusão do Projeto
De fato esse foi um projeto muito desafiador, muito por conta do pouco tempo para conseguirmos pensar em todos os detalhes e, principalmente, construir uma parte de integração que foi uma completa novidade. No entanto, um dos maiores ensinamentos que o projeto acaba nos deixando é: Pensar na manutenibilidade. Para nós, esse foi o ponto principal da matéria. 

Tão importante quanto um sistema extremamente funcional, é um sistema organizado e pensado nas futuras manutenções. Qualquer novo requisito que surgir, acreditamos que o nosso sistema não sofrerá muito e isso se deve as aulas e os ensinamentos da Disciplina. 
