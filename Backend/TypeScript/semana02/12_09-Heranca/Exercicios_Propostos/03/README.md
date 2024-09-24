![](https://i.imgur.com/xG74tOh.png)

# Exercício 03

## RPG

Uma empresa responsável por desenvolver jogos precisa de um desenvolvedor que desenvolva um RPG e você foi o escolhido. Apesar de ter uma certa complexidade, a princípio sua tarefa é criar os personagens do jogo. Serão 2 tipos de personagens, o Mago e o Arqueiro.

Cada personagem tem suas habilidades específicas, mas algumas características são encontradas em todos eles. De acordo com a especificação do jogo abaixo, implemente as classes necessárias usando o conceito de herança.

1 - Todos os personagens tem:

    - Nome
    - Velocidade (por padrão é 0)
    - Andar
        - Ao ser executado deve apenas incrementar a velocidade em +1
    - Parar
        - Ao ser executado deve zerar a velocidade

2 - O Mago possui as seguintes características:

    - Quantidade de magias (por padrão é 5)
    - Usar magia
        - Ao ser executado deve decrementar a quantidade de magias em -1 e exibir a mensagem de magia usada.
        - Caso não tenha magia para usar, deve exibir a mensagem de magia indisponível.
    - Criar magia
        - Ao ser executado deve apenas incrementar a quantidade de magias em +1

3 - O Arqueiro possui as seguintes características:

    - Quantidade de flechas (por padrão é 5)
    - Lançar flechas
        - Ao ser executado deve decrementar a quantidade de flechas em -1 e exibir a mensagem de flecha lançada.
        - Caso não tenha flechas para lançar, deve exibir a mensagem de falta de flecha.
    - Construir flexas
        - Ao ser executado deve apenas incrementar a quantidade de flechas em +1

Não é necessário transpilar o código.

Faça o teste com outros exemplos.

Faça commit do resultado.

---

Preencha a checklist para finalizar o exercício:

-   [ ] Resolver o exercício revendo a aula se necessário
-   [ ] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
-   [ ] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
-   [ ] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)

###### tags: `backend` `typescript` `exercicio` `nodeJS` `JavaScript`
