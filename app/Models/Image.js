'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Env = use('Env')
class Image extends Model {
  static get computed() {
    return ['url']
  }

  getUrl({ path }) {
    return `http://${Env.get('HOST')}:${Env.get('PORT')}/uploads/${path}`
  }
}

module.exports = Image
