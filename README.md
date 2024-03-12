# GitHub User Search

Este projeto é uma aplicação web que permite aos usuários buscar por perfis no GitHub e exibir algumas informações básicas e a imagem de perfil do usuário encontrado.

## Funcionalidades

Ao inserir um nome de usuário do GitHub no campo de busca e clicar no botão de busca, a aplicação utiliza o Axios para fazer uma requisição GET à API do GitHub e recuperar dados do perfil especificado. Se o usuário possuir um nome cadastrado, o mesmo será exibido junto com a imagem de perfil. Caso contrário, será exibida uma mensagem informando que o usuário não possui nome cadastrado.

## Tecnologias Utilizadas

[![My Skills](https://skillicons.dev/icons?i=js,html,bootstrap,git,github)](https://github.com/siquara)

## Configuração do Projeto
Para executar este projeto localmente, siga os passos abaixo:
1. Clone o repositório ou baixe os arquivos ZIP.
2. Abra o arquivo `index.html` em seu navegador para ver a aplicação em funcionamento.


## Estrutura do Código

- `index.html`: Contém a estrutura HTML da página, que inclui o campo de entrada para o nome de usuário do GitHub e a área onde as informações do perfil serão exibidas.

- `script.js`: Implementa a lógica JavaScript para interagir com a API do GitHub usando Axios. O script gerencia a busca de usuários, tratamento de erros e a exibição de informações como o nome e a imagem do perfil do usuário.
