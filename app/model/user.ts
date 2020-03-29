// app/model/user
import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  modelName: 'sn_users',
})
export class User extends Model<User> {

  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER(11),
    comment: '用户Id',
  })
  user_id: number

  @Column({
    type: DataType.STRING(32),
    comment: '用户名',
    allowNull: true,
  })
  user_name: string

  @Column({
    type: DataType.STRING(200),
    comment: '用户头像',
    allowNull: true,
  })
  user_avator: string

  @Column({
    type: DataType.STRING(200),
    comment: '用户邮箱',
    allowNull: true,
  })
  user_email: string

  @Column({
    type: DataType.STRING(200),
    comment: '用户手机',
    allowNull: true,
  })
  user_phone: string

  @Column({
    type: DataType.DATE,
    comment: '创建时间',
    allowNull: true,
  })
  user_create_time: Date

  @Column({
    type: DataType.DATE,
    comment: '更新时间',
    allowNull: true,
  })
  user_modify_time: Date

}

export default () => User;
