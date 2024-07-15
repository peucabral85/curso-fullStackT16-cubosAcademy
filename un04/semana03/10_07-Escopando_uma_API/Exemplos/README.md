# Nosso Mini Insta

## O que o usuário pode fazer

- Fazer login
- Fazer cadastro
- Pode visualizar dados do seu perfil
- Editar os dados do seu perfil
- Visualizar postagens de outras pessoas
    - Visualizar quantidade de curtidas em uma postagens
    - Visualizar comentários em uma postagem
- Curtir postagens de outras pessoas
- Comentar as postagens

## O que não será possível fazer

- Ver a localização de uma postagem

- Ver pessoas que curtiram uma postagem

- Curtir um comentário

- Comentar em outros comentários

  

## Endpoints

### POST - Login

#### Dados enviados
- Username
- Senha

#### Dados retornados
- Sucesso / Erro
- Token e dados do usuário

#### Objetivos gerais
- Validar username e senha
- Buscar usuário no banco de dados
- Verificar se senha informada está correta
- Gerar o token de autenticação

---

### POST - Cadastro

#### Dados enviados
- Username
- Senha

#### Dados retornados
- Sucesso / Erro

#### Objetivos gerais
- Validar username e senha
- Verificar se username já existe no banco de dados
- Criptografar a senha
- Cadastrar o usuário no banco de dados

---

### GET - Perfil

#### Dados enviados
- Token (Id ou username)

#### Dados retornados
- URL da foto
- Nome
- Username
- Site
- Bio
- Email
- Telefone
- Gênero

#### Objetivos gerais
- Validar o token do usuário
- Buscar o cadastro do usuário com a informação do token

---

### PUT - Editar perfil

#### Dados enviados
- Token (Id ou username)
- URL da foto
- Nome
- Username
- Senha
- Site
- Bio
- Email
- Telefone
- Gênero

#### Dados retornados
- Sucesso / Erro

#### Objetivos gerais
- Validar o token do usuário
- Buscar o cadastro do usuário com a informação do token
- Exigir ao menos um campo para atualizar
- Criptografar a senha se for informada
- Verificar se email e username já existem no banco de dados se informados
- Atualizar o registro do usuário no banco de dados  

---

### POST - Postagens

#### Dados enviados
- Token
- Texto
- Fotos []

#### Dados retornados
- Sucesso ou Erro

#### Objetivos gerais
- Validar o token do usuário
- Buscar o cadastro do usuário com a informação do token
- Exigir que seja informado ao menos uma foto no array
- Cadastrar postagem para o usuário logado
- Cadastrar as fotos da postagem

---

### GET - Postagens

#### Dados enviados
- Token
- Offset

#### Dados retornados
- Postagens []
    - Id
    - Texto
    - Foi curtido
    - Usuário
        - URL da foto
        - Username
        - É perfil oficial
    - Fotos []
    - Quantidade de curtidas
    - Comentários []
        - Username
        - Texto
    - Data

#### Objetivos gerais
- Validar o token do usuário
- Buscar o cadastro do usuário com a informação do token

---

### POST - Curtir

#### Dados enviados
- Token (Username / Id)
- Id da postagem

#### Dados retornados
- Sucesso ou Erro

#### Objetivos gerais
- Validar o token do usuário
- Buscar o cadastro do usuário com a informação do token
- Buscar o cadastro da postagem
- Verificar se o usuário já curtiu a postagem
- Cadastrar a curtida da postagem no banco de dados

---

### POST - Comentários

#### Dados enviados
- Token (Username / Id)
- Id da postagem
- Texto

#### Dados retornados
- Sucesso ou Erro

#### Objetivos gerais
- Validar o token do usuário
- Buscar o cadastro do usuário com a informação do token
- Validar o texto
- Buscar o cadastro da postagem
- Cadastrar comentário da postagem