# Plataforma Training Center / Client

Este é o repositório front-end da plataforma Training Center, você pode encontrar o back-end [aqui](https://github.com/training-center/hades) 

Temos um documento com os [requisitos funcionais](./requisitos_plataforma.md) que esta plataforma deve atender, desta forma mantemos sempre um norte em relação às funcionalidades que ainda deverão ser implementadas.

## Desenvolvimento 

### Instalando dependências

> Recomendamos o uso do [yarn](https://yarnpkg.com) para gerenciar as dependências do projeto, mas você também pode usar o `npm` se preferir.

```sh
yarn
# ou
npm i
```

### Executando o projeto

```sh
yarn start
# ou
npm start
```

### Executando os testes

```sh
yarn test
# ou
npm test
```

Para ativar o modo `watch`, rode o comando adicionando o seguinte parâmetro
```sh
yarn test --watch
# ou
npm test --watch
```

## Storybook

Utilizamos o [Storybook](https://storybook.js.org/) para nos ajudar a validar   tanto a parte visual quanto a funcional dos componentes React enquanto os desenvolvemos.

Você pode checar localmente executando o seguinte comando:

```sh
yarn storybook
# ou
npm run storybook
```

E acessando em seu browser a URL [localhost:6006](http://localhost:6006/)

## Contribuindo

Você pode nos ajudar de diversas formas! 

- Veja as [issues abertas](https://github.com/training-center/R2D2/issues) e se quiser trabalhar em alguma delas, envie um comentário!
- Viu alguma melhoria que gostaria de fazer? Abra uma nova issue ou envie um Pull-request com a sua proposta.

Quando for abrir um Pull-request, primeiro faça o fork do projeto para trabalhar em sua versão e crie uma branch com um nome descritivo. 

Ao commitar, mantenha os commits também descritivos e concisos, dessa forma quando formos analisar o histórico de alterações podemos acompanhar os pontos da história onde cada funcionalidade foi introduzida e pegar bugs de forma mais rápida 👍

## Licença

Este projeto está licenciado sob a [Licença MIT](./LICENSE), ou seja, você pode usá-lo da forma que preferir, incluindo suas próprias modificações em versões próprias.
