import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Images extends BaseSchema {
  protected tableName = 'images'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('path').notNullable()
      table.string('name').notNullable()
      table.string('original_name').notNullable()
      table.string('extension').notNullable()
      table.integer('size').notNullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('deleted_at').defaultTo(null)
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
      table.enum('status', ['pendent', 'reproved', 'approved']).defaultTo('pendent')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
