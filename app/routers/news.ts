// app/routers/news.ts
export default (app: any) => {
  const { router, controller } = app;

  router.get('/news', controller.news.list);
  router.get('/news/item/:id', controller.news.detail);
  router.get('/news/user/:id', controller.news.user);
};
