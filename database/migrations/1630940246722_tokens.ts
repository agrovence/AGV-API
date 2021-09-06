import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Tokens extends BaseSchema {
  protected tableName = 'tokens'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()

      table.string('user_id').unsigned()
      table.string('token').notNullable().unique()
      table.dateTime('expires_at')
      table
        .enum('type', ['access', 'refresh', 'email_confirmation', 'password_confirmation'])
        .notNullable()

      table
        .foreign('user_id')
        .references('id')
        .inTable('users')
        .onDelete('cascade')
        .onUpdate('cascade')

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
