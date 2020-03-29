// app/model/task
import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  modelName: 'sn_tasks',
})
export class Task extends Model<Task> {

  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER(32),
    comment: '任务Id',
  })
  task_id: number

  @Column({
    type: DataType.STRING(200),
    comment: '任务名称',
  })
  task_name: string

  @Column({
    type: DataType.STRING(10000),
    comment: '任务描述',
    allowNull: true,
  })
  task_desc: string

  @Column({
    type: DataType.STRING(32),
    comment: '任务优先级 p0重要紧急/p1紧急不重要/p2重要不紧急/p3不重要不紧急',
    allowNull: true,
  })
  task_priority: string

  @Column({
    type: DataType.INTEGER(11),
    comment: '所属项目Id（外键）',
    allowNull: true,
  })
  project_id: number

  @Column({
    type: DataType.INTEGER(11),
    comment: '父任务Id',
    allowNull: true,
  })
  task_parent: number

  @Column({
    type: DataType.STRING(32),
    comment: '任务状态 doing/done/expired/disable',
    allowNull: true,
  })
  task_status: string

  @Column({
    type: DataType.INTEGER(11),
    comment: '任务进度 0-100',
    allowNull: true,
  })
  task_percent: number

  @Column({
    type: DataType.STRING(500),
    comment: '负责人id，多个以逗号相连',
    allowNull: true,
  })
  task_owner_id: string

  @Column({
    type: DataType.STRING(1000),
    comment: '成员id，多个以逗号相连',
    allowNull: true,
  })
  task_member_id: string

  @Column({
    type: DataType.DATE,
    comment: '创建时间',
    allowNull: true,
  })
  task_create_time: Date

  @Column({
    type: DataType.DATE,
    comment: '更新时间',
    allowNull: true,
  })
  task_modify_time: Date

  @Column({
    type: DataType.DATE,
    comment: '任务开始时间',
    allowNull: true,
  })
  task_start_time: Date

  @Column({
    type: DataType.DATE,
    comment: '任务完成时间',
    allowNull: true,
  })
  task_finish_time: Date

  @Column({
    type: DataType.DATE,
    comment: '任务最后期限',
    allowNull: true,
  })
  task_deadline_time: Date

}

export default () => Task;
