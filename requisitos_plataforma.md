## Introdução

Este documento visa levantar os requisitos funcionais da plataforma de Mentoria.

Neste estão descritas as entradas, saídas esperadas e funcionalidades da plataforma, mas não estão definidas quais as tecnologias que serão utilizadas para a criação do produto, estratégias de desenvolvimento ou coisa do tipo.

## Motivação

A ideia da criação de uma plataforma para o projeto Mentoria veio devido a dificuldade de manutenção do projeto via GitHub. O trabalho manual acaba sendo muito grande e demanda uma supervisão rígida para que não passe nenhum problema.

Hoje o projeto funciona da seguinte maneira:

**Funcionalidades básicas**

* cadastro de mentores(as)
* cadastro de mentorados(as)
* documentação sobre funcionamento da mentoria
* lista de mentores(as)
* lista de mentorados(as)
* relacionamento entre mentor(a) e mentorado(a)
* listagem de pessoas buscando mentoria
* painel administrativo

Do cadastro de mentores(as)

A pessoa envia um Pull Request adicionando um arquivo no formato markdown com seus dados e cria um link desse arquivo na lista de mentores(as).

Do cadastro de mentorados(as)

A pessoa envia um formulário solicitando ajuda de um mentor ou mentora e aguarda em uma fila de espera pelo contato de uma pessoa para lhe ajudar.

Após receber o contato e o esquema de mentoria combinado entre ambas as partes, então essa pessoa envia seu perfil para o nosso repositório. Isso consiste em abrir um Pull Request adicionando um arquivo no formado markdown com os seus dados e criar um link para o seu perfil na lista de mentorados(as).

Da documentação sobre funcionamento da mentoria

No nosso repositório possuímos um documento informando como o projeto funciona, como criar os perfis (mentor(a) e mentorado(a)) e tudo o que envolve esse processo.
Da lista de mentores(as)

A lista de mentores(as) consiste em um documento em formato markdown que é editado adicionando um link para o perfil de cada mentor(a) cadastrado(a) em nosso projeto.

Da lista de mentorados(as)

A lista de mentorados(as) consiste em um documento em formato markdown que é editado adicionando um link para o perfil de cada mentorado(a) cadastrado(a) em nosso projeto.

## Requisitos da nova plataforma

Os requisitos básicos da plataforma de mentoria, identificados previamente por pessoas envolvidas na iniciativa, são:

* painel administrativo
* cadastro de perfis como mentores(as)
* cadastro de perfis como mentorados(as)
* cadastro como pessoa que busca mentoria
* assinatura do termo de aceito o código de conduta
* listagem de mentores(as)
* listagem de mentorados(as)
* listagem de pessoas buscando mentores(as)
* um relacionamento entre mentores(as) e mentorados(as)
* login social (Gmail, Facebook, Twitter e GitHub)

**Entradas de dados**

* painel administrativo
* cadastro de mentores(as)
* cadastro de mentorados(as)
* cadastro como pessoa que busca mentoria
* email de pessoas que se logam na plataforma
* cadastro de especializações (front end, back end, mobile, etc)
* login social

Sober o  painel administrativo:

* precisamos de algo para cadastrar as especializações e depois as pessoas poderem selecionar isso de uma lista, evitando assim a desnormalização da informação que aparece na tela
* precisamos listar todas as pessoas cadastradas no sistema com filtros para exibir somente mentor(a), somente gente buscando mentoria, somente gente que já recebe mentoria, somente níveis iniciantes, somente nível intermediário, somente quem já é atuante
* precisamos que seja possível bloquear um perfil por algum problema e a pessoa não poder mais participar do projeto
* precisamos conseguir enviar email segmentado (filtrado)

Ao se cadastrar na plataforma, com o login social, a pessoa deve ser direcionada a um formulário onde especifica se é mentor(a) ou mentorado(a) para fazer seu cadastro.

Todos os nomes, emails e perfis (mentor(a)/mentorado(a)) devem ser armazenados em nosso banco de dados, pois faremos o acompanhamento (automático) via email.

Ao se cadastrarem como mentor ou a mentora, as pessoas devem informar os seguintes dados:

* nome
* especialização (back end, front end, mobile, etc)
* links para seus perfis sociais (LinkedIn, GitHub, Facebook, Twitter, Site pessoal, YouTube, etc)
* email para contato (que pode ser diferente do cadastrado na plataforma via login social)
* relacionamento (link para o perfil de seu/sua mentorado(a))
* termo de aceite do código de conduta

Caso não possua alguém sendo mentorado(a) pode ser deixado em branco. Porém não deve ser possível o relacionamento de um nome de mentorado(a) sem perfil cadastrado na plataforma.

Ao se cadastrarem como pessoa que recebe mentoria, as pessoas devem informar os seguintes dados:

* nome
* email para contato (que pode ser diferente do cadastrado na plataforma via login social)
* área
* nível de conhecimento
* nome de mentor(a)
* links para contato
* termo de aceite do código de conduta

Ao se cadastrarem como pessoa que busca mentoria, as pessoas devem informar os seguintes dados:

* nome
* email para contato (que pode ser diferente do cadastrado na plataforma via login social)
* área
	- frontend
	- backend
	- mobile
	- desktop
	- devops
	- database (administradores(as) de bancos de dados)
	- management (agile, gestão de projetos, etc)
* nível de conhecimento
	- completamente iniciante
	- iniciante com conhecimento básico
	- intermediário
	- já atuante
* links para contato
* termo de aceite do código de conduta

Estes dados serão utilizados para que alguém que presta mentoria procure alguém buscando ajuda para entrar em contato.

**Saida de dados**

* listagem de mentores(as)
* listagem de mentorados(as)
* listagem de pessoas buscando mentores(as)

Na listagem de mentores(as) devemos ter:

* nome
* especialização (back end, front end, mobile, etc)
* links para seus perfis sociais (LinkedIn, GitHub, Facebook, Twitter, Site pessoal, YouTube, etc)
* email para contato (que pode ser diferente do cadastrado na plataforma via login social)
* relacionamento (link para o perfil de seu/sua mentorado(a))

Na listagem de mentorados(as) devemos ter:

* nome
* email para contato (que pode ser diferente do cadastrado na plataforma via login social)
* área
* nível de conhecimento
* nome de mentor(a)
* links para contato

Na listagem de pessoas buscando mentores(as) devemos ter:

* nome da pessoa que busca mentoria
* área que a pessoa busca mentoria
* nível de conhecimento atual (completamente iniciante, iniciante com conhecimento básico, intermediário, já atuante)
* especialidade (front end, back end, mobile, etc)

Filtros de listagem:

Deve ser possível listar as pessoas buscando mentoria por especialidade e nível de conhecimento atual.
