# Pratiquei Exame e passei

Pratique exames de múltipla escolha.

## Objetivo técnico:

- Testar `Notification Pattern`.
  
	Base: [Não lance Exceptions em seu Domínio… Use Notifications!
](https://medium.com/tableless/n%C3%A3o-lance-exceptions-em-seu-dom%C3%ADnio-use-notifications-70b31f7148d3)

- Testar `TypeORM` invés de `Prisma`.

- Testar `class-validator` invés de `Zod`.

---

### Tech Stack

#### Main Techs

- Language : `TypeScript` (5.3.3)
- Web Application framework : `Express` (4.18.3)
- Database : `PostgreSQL` (15.4)
- Object-Relational Mapping (ORM) : `TypeORM` (0.3.20)
- Build : `Node` (20.11.0)

#### Libraries

- Package manager : `NPM` (10.2.4)
- Schema validation : `class-validator` (0.14.1)
- API documentation : `tsoa` (5.1.1) | `OpenAPI` (3.0.3)
<!-- - Technical documentation : `Compodoc` (0.0.41) -->

#### Development Environment

- OS : `Win` (11) | `WSL 2` (Ubuntu 22.04) | `Dev Container`
- IDE : `VS Code` (^1.86.2)

---

#### Estrutura 

```text
src
├── application
│   ├── controller
│   └── router
├── domain
│   ├── entity
│   └── service
└── infrastructure
    ├── migrations
    └── repository
```

---

## Nomenclatura

### `Entity` e `Model`


`Entidade`: Uma entidade representa uma única instância do seu objeto de domínio salva no banco de dados como um registro. Possui alguns atributos que representamos como colunas em nossas tabelas.

`Modelo`: Um modelo normalmente representa um objeto do mundo real relacionado ao problema ou espaço de domínio. Na programação, criamos classes para representar objetos. Essas classes, conhecidas como modelos, possuem algumas propriedades e métodos (definindo o comportamento dos objetos).




fonte: [What is difference between a Model and an Entity | Stack Overflow](https://stackoverflow.com/a/39425005/16245809)
