'use strict'

const Service = require('trails/service')
const SequelizeSlugify = require('sequelize-slugify')

/**
 * @module JobService
 * @description TODO document Service
 */
module.exports = class JobService extends Service {
  constructor(app) {
    super(app)
    this.hidden = ['id', 'paid_on']
  }

  all() {
    return this.app.orm.Job.findAll({
      attributes: { exclude: this.hidden }
    })
  }

  one(slug) {
    return this.app.orm.Job.findOne({
      attributes: { exclude: this.hidden },
      where: {slug: slug}
    })
  }

  create(data) {
    const Job = this.app.orm.Job
    SequelizeSlugify.slugifyModel(Job, {
      source: ['company', 'job_type', 'title']
    })

    return Job.create(data)
      .then(job => job.get({ plain: true, attributes: { exclude: this.hidden } }))
  }

  update(slug, data) {
    const values = Object.keys(data).reduce((obj, key) => {
      if (key !== 'title') {
        obj[key] = data[key]
      }
      return obj
    })

    return this.app.orm.Job.update(values, {
      where: { slug: slug }
    })
      .then(job => job.get({ plain: true, attributes: { exclude: this.hidden } }))
  }
}

