import Image from 'app/Models/Image'

import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'

export default class Category extends BaseModel {
  @column({ isPrimary: true })
  id: number

  @column()
  name: string

  @column()
  description: string

  @column.dateTime()
  deletedAt: DateTime

  @column.dateTime({ autoCreate: true })
  createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  updatedAt: DateTime

  @column()
  status: 'pendent' | 'reproved' | 'approved'

  @manyToMany(() => Image)
  images: ManyToMany<typeof Image>
}
