import 'egg';
import { Sequelize, ISequelizeValidationOnlyConfig } from 'sequelize-typescript';

declare module 'egg' {
  // 便于egg 将方法挂载到IModel上
  interface IModel extends Sequelize { }

  interface Application {
    Sequelize: Sequelize;
    model: IModel;
  }
}