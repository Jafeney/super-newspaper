import { Application } from 'egg';
import newsRouter from './routers/news';
import userRouter from './routers/user';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);

  // 新闻测试
  newsRouter(app);

  // 用户模块
  userRouter(app);

};
