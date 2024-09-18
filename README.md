# To-do List

Um aplicativo de lista de tarefas, desenvolvido com HTML, Bootstrap e JavaScript, que utiliza LocalStorage para armazenar as tarefas localmente no navegador. Além de adicionar, remover e limpar tarefas, o aplicativo permite editar tarefas, adicionar categorias e níveis de prioridade.

`Visualisar no GiHub Pages:` https://lima-joseph.github.io/lista-de-tarefas/index.html

## Funcionalidades

- **Adicionar Tarefas**: Permite adicionar novas tarefas à lista.
- **Excluir Tarefas**: O usuário pode remover uma tarefa específica.
- **Editar Tarefas**: O usuário pode editar uma tarefa já existente.
- **Categorias**: As tarefas podem ser classificadas por categorias (Trabalho, Estudo, Pessoal).
- **Prioridade**: As tarefas podem ter diferentes níveis de prioridade (Baixa, Média, Alta).
- **Limpar Todas as Tarefas**: Remove todas as tarefas de uma vez.
- **Persistência de Dados**: Utiliza LocalStorage para garantir que as tarefas permaneçam mesmo após recarregar a página ou fechar o navegador.
- **Animações**: Adiciona animações ao adicionar ou remover tarefas.

## Tecnologias Utilizadas

- **HTML5**: Estrutura da página.
- **Bootstrap 5**: Para estilização e layout responsivo.
- **JavaScript (ES6)**: Lógica da aplicação, manipulação do DOM e LocalStorage.
- **LocalStorage**: Para armazenar as tarefas no navegador de forma persistente.

## Estrutura do Projeto
```
📁 To-do List
├──📁assets
|   ├── 📁 css
|   │    └── 📄 styles.css
|   └── 📁 js
|        └── 📄 app.js
├──📄 index.html
└── 📄 README.md
```

## Funcionalidades Detalhadas
### Adicionar nova tarefa:
- O usuário pode inserir uma nova tarefa no campo de entrada, escolher uma categoria (Trabalho, Estudo, Pessoal) e uma prioridade (Baixa, Média, Alta), e clicar no botão "Adicionar".
- A tarefa será exibida na lista com suas informações e será armazenada no LocalStorage.
### Excluir tarefa:
- Cada tarefa exibida tem um botão "Excluir".
- Ao clicar em "Excluir", a tarefa será removida da interface e do LocalStorage.
### Editar tarefa:
- O botão "Editar" ao lado de cada tarefa permite que o usuário altere o texto, a categoria e a prioridade da tarefa.
- As alterações são refletidas na interface e no LocalStorage.
### Limpar todas as tarefas:
- Um botão na parte inferior da página permite ao usuário limpar todas as tarefas de uma vez.
- Isso remove todas as tarefas da lista e limpa o LocalStorage.
