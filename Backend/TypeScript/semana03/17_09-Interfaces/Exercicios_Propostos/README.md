![](https://i.imgur.com/xG74tOh.png)

# Backend TypeScript | Interfaces

## Vendas Ecommerce

**Neste mini desafio, você deverá implementar um sistema que simula as vendas de um ecommerce. Basicamente, o sistema deve possibilitar a criação de um carrinho e gerar a venda dos produtos adicionados ao carrinho.**

O carrinho deve:

-   Adicionar produtos
-   Remover produtos
-   Alterar quantidade de um produto adicionado
-   Imprimir um resumo com os itens adicionados

Cada produto deve ter o seguinte formato:

-   id (numero identificador do produto)
-   descricao
-   categoria
-   valor (em centavos)
-   quantidade

O sistema deve permitir finalizar uma venda de um carrinho existente em duas opções: `crédito` ou `débito`

Tanto a venda no crédito quanto no débito deve ter a possibilidade de aplicar descontos de acordo com as regras a seguir:

-   Crédito: desconto de 5% no total do pedido caso o total ultrapasse R$ 100,00.
-   Débito: desconto de 7% no total do pedido, em qualquer valor.

Obs.: O desconto deve ser optativo a aplicação antes da finalização do pedido.

Ao finalizar o pedido deverá imprimir uma mensagem no seguinte formato:

```
Pedido Finalizado. Total: R$ 570,00
```

**Teste as implementações para garantir o perfeito funcionamento do sistema**

Utilize os conceitos abordados em aula, seguindo o paradigma de programação orientada a objetos, para estruturar a aplicação da melhor forma.

Não é necessário transpilar o código.

Faça o teste com outros exemplos.

Faça commit do resultado.

---

Preencha a checklist para fazer os exercícios:

-   [ ] Fazer o fork do repositório para sua conta
-   [ ] Executar `git clone` do seu fork no terminal para clonar o repositório, ou clonar de outra maneira
-   [ ] Após fazer e commitar todos os exercícios fazer o `git push` para seu fork
-   [ ] Copiar a url do seu fork e enviar na plataforma

###### tags: `backend` `typescript` `exercicio` `nodeJS` `JavaScript`
