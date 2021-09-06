import User from 'app/Models/User'

import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'

export default class Token extends BaseModel {
  @column({ isPrimary: true })
  id: number

  @column()
  userId: string

  @column()
  token: string

  @column()
  expiresAt: string

  @column()
  type: 'client' | 'employee' | 'admin'

  @column.dateTime()
  deletedAt: DateTime

  @column.dateTime({ autoCreate: true })
  createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  updatedAt: DateTime

  @column()
  status: 'pendent' | 'reproved' | 'approved'

  @belongsTo(() => User)
  user: BelongsTo<typeof User>
}
