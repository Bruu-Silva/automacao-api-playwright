# Automatizando testes de API com Playwright (TypeScript)

Este projeto foi desenvolvido para automatizar testes nos endpoints da [API pública Reqres](https://reqres.in/) utilizando o framework **Playwright** com **TypeScript**.

## Estrutura do Projeto

- Os testes estão organizados em `tests/apiUsers/`, onde foram implementados os métodos `GET` e `POST` para o endpoint `/users`.

- A pasta `api `contém a classe `UsersAPI.ts`, responsável por centralizar os métodos de chamada para o endpoint `/users`.

## Tecnologias e Ferramentas Utilizadas

- [Playwright](https://playwright.dev/)

- TypeScript

- ESLint (extensão instalada)

- Prettier (extensão instalada)

- Dotenv (`.env`) para gerenciar variáveis de ambiente

- API pública: https://reqres.in/

## IDs de Casos de Teste

Cada teste foi identificado com um **ID único** para facilitar a rastreabilidade e análise dos cenários cobertos.

## Observações Importantes

- A API utilizada é **mockada** e possui algumas **limitações** nos retornos.

- Alguns comportamentos esperados (como validação de campos obrigatórios ou status específicos) não são representados corretamente nos testes, devido à forma como a API responde. Para destacar esses pontos, foi utilizado o método **test.fail()** do Playwright, marcando intencionalmente no CT02 e CT03 que o esperado desses testes, é que eles retornem como falhos, como ocorreria em uma API real.

---

## Como Reproduzir o Projeto

Siga o passo a passo abaixo para executar o projeto localmente.

### 1. Clone o repositório

     git  clone  git@github.com:Bruu-Silva/automacao-api-playwright.git

### 2. Acesse a pasta do repositório clonado

    cd  automacao-api-playwright

### 3. Instale dependências

    npm  install

### 4. Crie o arquivo`.env`

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

    BASE_URL=https://reqres.in/api

Se ainda não tiver o pacote `dotenv` instalado, execute o comando abaixo para instalá-lo:

    npm install dotenv --save-dev

> Este pacote é necessário para que o projeto consiga ler variáveis definidas no `.env`.

Certifique-se também de que o carregamento do `dotenv` esteja presente e descomentado no topo do arquivo `playwright.config.ts`, como no exemplo abaixo:

    import  dotenv  from  'dotenv'
    import  path  from  'path'
    dotenv.config({ path: path.resolve(__dirname, '.env') })

### 5. Verifique o arquivo `tsconfig.json`

O projeto já possui um arquivo `tsconfig.json` configurado para uso com TypeScript e suporte a imports relativos. Verifique se está adequado ao seu ambiente.

### 6. Execute os testes

Para executar todos os testes:

    npx playwright test

Se desejar visualizar o relatório padrão HTML do Playwright:

    npx playwright show-report
