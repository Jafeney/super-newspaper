// app/service/user.ts

import { Service } from 'egg';
import { Sequelize } from 'sequelize-typescript';

class UserService extends Service {
  // 分页查询用户
  public async list() {
    const { page = 1, pageSize = 10 } = this.ctx.query;
    const users = await this.ctx.model.User.findAll({
      raw: true,
      offset: (page - 1) * pageSize,
      limit: pageSize,
      order: [[ 'user_create_time', 'desc' ]],
    });
    return users;
  }

  // 根据 用户id 或 用户名 查询用户
  public async query() {
    const { user_name, user_id } = this.ctx.query;
    const { or } = Sequelize.Op;
    const user = await this.ctx.model.User.findOne({
      where: {
        [or]: [
          { user_name },
          { user_id },
        ],
      },
    });
    return user;
  }
}

export default UserService;
