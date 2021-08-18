Pequena aplicação em React para salvar a lista de CEP usando o localStorage.

Ele permite que os usuários possam inserir seu CEP para encontrar o endereço (cidade, rua, bairro e estado); 

Segue o link e digite teu CEP sem hífen: <a href="https://city-list-city-list.vercel.app/">Lista de CEP</a>

O objetivo deste projeto era aprender a usar React
* Criação do projeto (com Typescript);
* useState, useEffect e props;
* Componentização;
* Chamadas a uma API;
* Salvar dados no navegador (localStorage);

O que foi feito no projeto:
- Limitar o input para 8 caracteres onde o CEP tem apenas 8 números;
- Permitir digitar somente números;
- Não permitir que um item em branco seja adicionado na lista;
- Não ser possível que o item existente seja acrescentado;
- Possibilitar que a tecla Enter seja clicado para adicionar o item;
- Criar um componete para o item da Lista;
- Fazer busca do CEP na API
- Adicionar o pacote CEP-Promise;
- Salvar os CEPs adicionados no localStorage;
