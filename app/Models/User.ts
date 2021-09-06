import Token from 'app/Models/Token'

import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  id: number

  @column()
  name: string

  @column()
  email: string

  @column()
  password: string

  @column()
  role: 'client' | 'employee' | 'admin'

  @column.dateTime()
  deletedAt: DateTime

  @column.dateTime({ autoCreate: true })
  createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  updatedAt: DateTime

  @column()
  status: 'pendent' | 'reproved' | 'approved'

  @hasMany(() => Token)
  tokens: HasMany<typeof Token>
}
