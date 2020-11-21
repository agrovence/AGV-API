'use strict'

const DB = use('Database')
class DashboardController {
  async index({ response }) {
    const users = await DB.from('users').getCount()
    const products = await DB.from('products').getCount()
    return response.send({ users, products })
  }
}

module.exports = DashboardController
