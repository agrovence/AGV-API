import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CategoryImages extends BaseSchema {
  protected tableName = 'category_images'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()

      table.boolean('isMain').defaultTo(true)

      table.integer('image_id').unsigned()
      table
        .foreign('image_id')
        .references('id')
        .inTable('images')
        .onDelete('cascade')
        .onUpdate('cascade')

      table.integer('category_id').unsigned()
      table
        .foreign('category_id')
        .references('id')
        .inTable('categories')
        .onDelete('cascade')
        .onUpdate('cascade')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
