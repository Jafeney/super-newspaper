// app/routers/news.ts
import { Application } from 'egg';

export default (app: Application) => {
  const { router, controller } = app;

  router.get('/users', controller.user.list);
  router.get('/user', controller.user.query);
};
