![](https://i.imgur.com/xG74tOh.png)

# Exercício 02

## Sistema Escolar

Num sistema escolar será necessário implementar o módulo de cadastro de usuários, onde cada usuário pode ser professor ou aluno. Algumas características são comuns para ambos e outras não. Sendo assim, analise as regras a seguir e implemente suas respectivas classes usando o conceito de herança.

-   Usuário

    -   Nome
    -   Email
    -   Telefone
    -   Senha
    -   Autenticar
        -   Essa ação recebe uma senha que será verificada com a senha do usuário e caso esteja correta será retornado a mensagem: `Usuario logado`. Caso contrário, `Senha inválida`.

-   Professor

    -   Lançar nota do aluno
        -   Essa funcionalidade deve receber o aluno e a nota a ser lançada

-   Aluno
    -   Notas
        -   Esse atributo deve ser um array de notas
    -   Obter Média
        -   Esse método deve calcular a média do aluno com base nas notas lançadas pelo professor

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
