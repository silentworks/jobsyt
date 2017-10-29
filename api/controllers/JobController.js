'use strict'

const Controller = require('trails/controller')

/**
 * @module JobController
 * @description Querying, Creating and updating jobs
 */
module.exports = class JobController extends Controller {
  index(req, res) {
    this.app.services.JobService.all()
      .then(jobs => res.json(jobs))
      .catch(err => res.status(500).end())
  }

  show(req, res) {
    const slug = req.params.slug
    this.app.services.JobService.one(slug)
      .then(job => res.json(job))
      .catch(err => res.status(500).end())
  }

  create(req, res) {
    const { title, company, location, job_type, description, job_post_url } = req.body
    this.app.services.JobService.create({
      title,
      company,
      location,
      job_type,
      description,
      job_post_url
    })
      .then(job => res.json(job))
      .catch(err => res.status(500).end())
  }

  update(req, res) {
    const slug = req.params.slug
    const { title, company, location, job_type, description, job_post_url } = req.body
    this.app.services.JobService.update(slug, {
      title,
      company,
      location,
      job_type,
      description,
      job_post_url
    })
      .then(job => res.json(job))
      .catch(err => res.status(500).end())
  }
}

