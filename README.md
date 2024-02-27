# TestMarioAnotaAi

Projeto criado utilizando [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.
Para configuração do ambiente é necessario ter instalado localmente o Node.js v20.5.1.

## O Projeto

Nesse projeto é realizada a listagem de "Cards" contendo informações como "titulo, descrição, imagem e categoria", além disso é possivel realizar a filtragem através do SearchInput.
O projeto conta com varios tipos de animações atribuidas a ação hover em varios locais da pagina.
Por fim existe a função de "Deletar" um card, está que é feita somente em tela, logo se atualizar a pagina "F5" os cards apagados voltarão a aparecer

## Estrutura
Projeto foi dividido da seguinte forma:

    - Components: Aqui se concentra os componentes que podém ser reutilizados "Card e Header" em varios locais;
    - Models: Aqui estão os arquivos de Interfaces e Modelos de objetos
    - Pages: Component responsavel pela exibição de toda informação que deve aparecer na pagina
    - Services: Serviço responsavel pela integração com a API e ações pertinentes ao "Card"
    - Pipes: Pipe responsavel pela filtragem dos dados de acordo com a digitação no campo SearchInput