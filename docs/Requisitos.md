# Documento de Requisitos

Documento elaborado pelo Grupo 7 para simplificar o documento original (disponível apenas para os Alunos da Ufscar).

## Visão Geral

O sistema de gerenciamento de grupos acadêmicos tem como objetivo gerenciar grupos acadêmicos no contexto de uma universidade x. Além disso, o sistema deve fornecer algumas informações para outros 2 sistemas por meio de uma API

## Requisitos Funcionais

* Cadastro de grupos acadêmicos por meio de uma API. Apenas usuários do tipo “Professor” podem criar GA. Grupos são criados como Ativo por padrão
* Desativação e Ativação de um GA. Quando um grupo for desativado, apenas consultas podem ser realizadas. Apenas o "Responsável" pelo grupo pode realizar essa ações.
* Adição e Remoção de um participante em um GA por meio de uma API.
* Alterar o “Responsável” pelo GA por meio de uma API. Apenas o atual responsável pode realizar essa ação.
* Inclusão e atualização de um “Evento” por meio de uma API.
* Adicionar e remover GA Participantes de um “Evento” por meio de uma API. 
* Adicionar e Atualizar um processo seletivo por meio de uma API. Apenas o “Responsável” do grupo poderá realizar essa ação.

## Consultas

* Lista de todos os Grupos Acadêmicos cadastrados por meio de uma API.
* Detalhes de um Grupo Acadêmico por meio de uma API com o seu ID.
* Lista de todos os Grupos Acadêmicos a partir de um nome buscado utilizado com a API.
* Lista de todos os Responsáveis e Participantes de um GA a partir de uma API com seu ID.
* Lista de todos os Eventos realizados por GA através de uma API com seu ID
* Lista de todos os participantes de qualquer Grupo Acadêmico que não estão com os requisitos em dia por meio de uma API.

## Requisitos Não Funcionais

* *Ainda não foi simplificado*
