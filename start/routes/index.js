'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const Config = use('Config')
const pjson = require('../../package.json')

/**
 * Retorna a rota Welcome com a versão do APP
 */
const welcome = () => {
  return {
    greeting: 'Welcome to Agrovence API!',
    domain: 'AGV - API',
    version: pjson.version,
  }
}
Route.get('/', welcome)
Route.get(`${Config.get('app.prefix')}`, welcome)
Route.get(`${Config.get('app.prefix')}/welcome`, welcome)

/**
 * Retorna o usuário logado atualmente
 */
Route.get(`${Config.get('app.prefix')}/me`, 'UserController.me')
  .as('me')
  .middleware('auth')
/**
 * Importa as rotas de autenticação
 */
require('./auth')

/**
 * Importa as rotas de Admin
 */
require('./admin')

/**
 * Importa as rotas de Clientes
 */
require('./client')
