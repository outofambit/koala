# koala

WIP prototype for a node and javascript based tech stack.

## Setup

### Dependencies

#### Postgres

```bash
$ brew install postgres
```

#### [Sqitch](http://sqitch.org)

```bash
$ brew tap theory/sqitch
$ brew install sqitch_pg
```

#### JS modules

```bash
$ brew install yarn
$ yarn
```

### Database Setup

```bash
$ createdb koala
$ sqitch deploy
```

## Running

```bash
yarn build
yarn start
```
