# .

This template autogenerated by [create-elysiajs](https://github.com/kravetsone/create-elysiajs)

### Stack
- Web framework - [ElysiaJS](https://elysiajs.com/)
- Linter - [ESLint](https://eslint.org/)
- ORM - [Drizzle](https://orm.drizzle.team/) ([PostgreSQL](https://www.postgresql.org/)) (mocked with [PGLite](https://pglite.dev/) in [tests](tree/main/tests))
- Elysia plugins - [CORS](https://elysiajs.com/plugins/cors.html), [Swagger](https://elysiajs.com/plugins/swagger.html), [Server Timing](https://elysiajs.com/plugins/server-timing.html)

## Development

Start development services (DB, Redis etc):

```bash
docker compose -f docker-compose.dev.yml up
```

Start the project:

```bash
bun dev
```

## Migrations

Push schema to Database:

```bash
bunx drizzle-kit push
```
Generate new migration:

```bash
bunx drizzle-kit generate
```
Apply migrations:

```bash
bunx drizzle-kit migrate
```

## Tests

Tests are written with [Bun](https://bun.sh/):test.

Mocks:

- Postgres usage is mocked with [PGLite](https://pglite.dev/)
- Redis usage is mocked with [ioredis-mock](https://www.npmjs.com/package/ioredis-mock)

```bash
bun test
```

## Production

Run project in `production` mode:

```bash
docker compose up -d
```
