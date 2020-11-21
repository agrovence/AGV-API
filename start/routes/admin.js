'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const Config = use('Config')

Route.group(() => {
  /**
   *  Categories resource routes
   */
  Route.resource('categories', 'CategoryController')
    .apiOnly()
    .validator(
      new Map([
        [['categories.store'], ['Admin/StoreCategory']],
        [['categories.update'], ['Admin/StoreCategory']]
      ])
    )
  /**
   * Products resource routes
   */
  Route.resource('products', 'ProductController').apiOnly()

  /**
   * Image Resource Routes
   */
  Route.resource('images', 'ImageController').apiOnly()

  /**
   * User Resource Routes
   */
  Route.resource('users', 'UserController')
    .apiOnly()
    .validator(
      new Map([
        [['users.store'], ['Admin/StoreUser']],
        [['users.update'], ['Admin/StoreUser']]
      ])
    )

  /**
   * Dashboard Route
   */
  Route.get('dashboard', 'DashboardController.index').as('dashboard')
})
  .prefix(`${Config.get('app.prefix')}/admin`)
  .namespace('Admin')
  .middleware(['auth', 'is:( admin || manager )'])
