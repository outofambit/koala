# koala

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

### Database Setup

```bash
$ createdb koala
$ sqitch deploy
```
