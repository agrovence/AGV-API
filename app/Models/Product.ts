import Image from 'app/Models/Image'

import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  id: number

  @column()
  price: number

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
