/**
 * Routes Configuration
 * (trails.config.routes)
 *
 * Configure how routes map to views and controllers.
 *
 * @see http://trailsjs.io/doc/config/routes.js
 */

'use strict'

module.exports = [

  /**
   * Render the HelloWorld view
   */
  {
    method: 'GET',
    path: '/',
    handler: 'ViewController.helloWorld'
  },

  {
    method: 'GET',
    path: '/job',
    handler: 'JobController.index'
  },

  {
    method: 'GET',
    path: '/job/{uuid}',
    handler: 'JobController.show'
  },

  {
    method: 'POST',
    path: '/job',
    handler: 'JobController.create'
  },

  /**
   * Constrain the DefaultController.info handler to accept only GET requests.
   */
  {
    method: [ 'GET' ],
    path: '/api/v1/default/info',
    handler: 'DefaultController.info'
  }
]
