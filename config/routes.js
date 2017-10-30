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
    path: '/v1/job',
    handler: 'JobController.index'
  },

  {
    method: 'GET',
    path: '/v1/job/{slug}',
    handler: 'JobController.show'
  },

  {
    method: 'POST',
    path: '/v1/job',
    handler: 'JobController.create'
  },

  {
    method: 'PUT',
    path: '/v1/job/{slug}',
    handler: 'JobController.update'
  }
]
