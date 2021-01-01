'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const Config = use('Config')

Route.group(() => {
  /**
   * Product Resource Routes
   */
  Route.get('categories', 'CategoryController.index')
  Route.get('categories/:id', 'CategoryController.show')
  Route.get('products', 'ProductController.index')
  Route.get('products/:id', 'ProductController.show')
})
  .prefix(`${Config.get('app.prefix')}`)
  .namespace('Client')
