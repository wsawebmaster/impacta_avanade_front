Comandos básicos usados

    npm init -y
    npm install --save-dev typescript @types/node
    npx tsc --init
    npx tsc
    node .\dist\index.js

Explicação de cada comando:

- `npm init -y`
  - Cria um arquivo `package.json` com valores padrão, inicializando o projeto Node.js.
- `npm install --save-dev typescript @types/node`
  - Instala o compilador TypeScript e as definições de tipo do Node.js como dependências de desenvolvimento.
- `npx tsc --init`
  - Cria um arquivo `tsconfig.json` com configurações padrão do TypeScript para o projeto.
- `npx tsc`
  - Executa o compilador TypeScript para compilar os arquivos `.ts` do projeto.
  - Gera o código JavaScript dentro da pasta `dist` conforme definido em `tsconfig.json`.
- `node .\dist\index.js`
  - Executa o arquivo JavaScript compilado gerado pelo TypeScript.
  - Use esse comando depois de rodar `npx tsc` para ver o programa em execução.
