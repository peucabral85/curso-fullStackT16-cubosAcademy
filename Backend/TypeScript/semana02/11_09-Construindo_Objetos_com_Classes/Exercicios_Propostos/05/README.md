![](https://i.imgur.com/xG74tOh.png)

# Exercício 05

## Correção de bugs

O código a seguir possui alguns erros que precisam ser corrigidos. Sua tarefa é analisar a estrutura, identificar o problema e corrigi-los.

```javascript
class Empresa {
    constructor(
        nome: number,
        fantasia: string,
        cnpj: string,
        telefone: string
    ) {}

    get getNome(): string {
        return this.nome
    }

    get getFantasia(): string {
        return this.cnpj
    }

    get getCnpj(): string {
        return this.cnpj
    }

    get getTelefone(): string {
        this.telefone
    }

    set setFantasia(fantasia): string {
        this.fantasia = fantasia
    }
}
```

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
