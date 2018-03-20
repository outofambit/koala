const Koa = require('koa');
const app = new Koa();

const Pug = require('koa-pug');
const pug = new Pug({
  app,
  viewPath: './build',
  pretty: true,
});

const serve = require('koa-static');

app.use(serve('build/client'));

app.use(async ctx => {
  ctx.render('index.pug');
});

app.listen(3000);
