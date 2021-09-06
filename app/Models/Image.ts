import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Image extends BaseModel {
  @column({ isPrimary: true })
  id: number

  @column()
  path: string

  @column()
  name: string

  @column()
  originalName: string

  @column()
  extension: string

  @column()
  size: number

  @column.dateTime()
  deletedAt: DateTime

  @column.dateTime({ autoCreate: true })
  createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  updatedAt: DateTime

  @column()
  status: 'pendent' | 'reproved' | 'approved'
}
