// app/routers/news.ts
import { Application } from 'egg';

export default (app: Application) => {
  const { router, controller } = app;

  router.get('/news', controller.news.list);
  router.get('/news/item/:id', controller.news.detail);
  router.get('/news/user/:id', controller.news.user);
};
