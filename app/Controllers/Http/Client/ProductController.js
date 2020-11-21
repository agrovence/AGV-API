'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Product = use('App/Models/Product')
const Transformer = use('App/Transformers/Admin/ProductTransformer')
/**
 * Resourceful controller for interacting with products
 */
class ProductController {
  /**
   * Show a list of all products.
   * GET products
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, pagination, transform }) {
    const name = request.input('name')
    const category = request.input('category')

    const query = Product.query()

    if (name) {
      query.where('name', 'LIKE', `${name}`)
    }

    if (category) {
      query.whereHas('categories', categoriesQuery => {
        categoriesQuery.wherePivot('category_id', category)
      })
    }

    const results = await query.paginate(pagination.page, pagination.limit)
    const products = await transform.paginate(results, Transformer)

    return response.send(products)
  }

  /**
   * Display a single product.
   * GET products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params: { id }, response, transform }) {
    const result = await Product.findOrFail(id)
    const product = await transform.item(result, Transformer)
    return response.send(product)
  }
}

module.exports = ProductController
