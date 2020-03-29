import { Controller } from 'egg';

export default class NewsController extends Controller {
  // 分页查询用户
  public async list() {
    const { ctx } = this;
    const res = await ctx.service.user.list();
    ctx.body = {
      succeess: true,
      data: res,
    };
  }

  // 根据 用户id 或 用户名 查询用户
  public async query() {
    const { ctx } = this;
    const res = await ctx.service.user.query();
    ctx.body = {
      succeess: true,
      data: res,
    };
  }
}
