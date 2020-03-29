// app/model/project
import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  modelName: 'sn_projects',
})
export class Project extends Model<Project> {

  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER(32),
    comment: '项目Id',
  })
  project_id: number

  @Column({
    type: DataType.STRING(200),
    comment: '项目名称',
  })
  project_name: string

  @Column({
    type: DataType.STRING(2000),
    comment: '项目描述',
    allowNull: true,
  })
  project_desc: string

  @Column({
    type: DataType.STRING(500),
    comment: '项目目标',
    allowNull: true,
  })
  project_goal: string

  @Column({
    type: DataType.INTEGER(11),
    comment: '项目进度 0-100',
    allowNull: true,
  })
  project_percent: number

  @Column({
    type: DataType.STRING(32),
    comment: '项目状态 doing/done/expired/disable',
    allowNull: true,
  })
  project_status: string

  @Column({
    type: DataType.STRING(500),
    comment: '负责人id，多个以逗号相连',
    allowNull: true,
  })
  project_owner_id: string

  @Column({
    type: DataType.STRING(5000),
    comment: '成员id，多个以逗号相连',
    allowNull: true,
  })
  project_member_id: string

  @Column({
    type: DataType.DATE,
    comment: '创建时间',
    allowNull: true,
  })
  project_create_time: Date

  @Column({
    type: DataType.DATE,
    comment: '更新时间',
    allowNull: true,
  })
  project_modify_time: Date

  @Column({
    type: DataType.DATE,
    comment: '项目最后期限',
    allowNull: true,
  })
  project_deadline_time: Date

  @Column({
    type: DataType.DATE,
    comment: '项目开始时间',
    allowNull: true,
  })
  project_start_time: Date

  @Column({
    type: DataType.DATE,
    comment: '项目完成时间',
    allowNull: true,
  })
  project_finish_time: Date

}

export default () => Project;
