import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ProductImages extends BaseSchema {
  protected tableName = 'product_images'

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

      table.integer('product_id').unsigned()
      table
        .foreign('product_id')
        .references('id')
        .inTable('products')
        .onDelete('cascade')
        .onUpdate('cascade')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
