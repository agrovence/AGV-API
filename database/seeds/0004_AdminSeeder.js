'use strict'

/*
|--------------------------------------------------------------------------
| AdminSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Role = use('Role')
const User = use('App/Models/User')

class AdminSeeder {
  async run() {
    const role = await Role.findBy('slug', 'admin')

    const admin = await User.create({
      name: 'Admin',
      surname: 'Agrovence',
      email: 'admin@agrovence.com.br',
      password: '12345678',
    })

    await admin.roles().attach([role.id])
  }
}

module.exports = AdminSeeder
