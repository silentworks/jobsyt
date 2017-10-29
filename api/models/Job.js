'use strict'

const Model = require('trails/model')

/**
 * @module Job
 * @description Job specification model
 * fields: id, title, company, job_type, description, job_post_url, status, user
 * status: PAID, UNPAID
 * job_type: REMOTE, ONSITE
 */
module.exports = class Job extends Model {

  static config () {
    return {
      options: {
        defaultScope: {
          where: {
            /*paid_on: {
              ['!=']: null
            }*/
          }
        },
        classMethods: {
          /* associate: models => {
            models.Job.hasOne(models.User, {})
          } */
        }
      }
    }
  }

  static schema (app, Sequelize) {
    return {
      uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV1
      },
      slug: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      title: { type: Sequelize.STRING, allowNull: false },
      company: { type: Sequelize.STRING, allowNull: false },
      location: { type: Sequelize.STRING, allowNull: false },
      job_type: {
        type: Sequelize.ENUM,
        values: ['remote', 'onsite'],
        validate: {
          isIn: [
            ['remote', 'onsite']
          ]
        },
        allowNull: false
      },
      description: { type: Sequelize.TEXT, allowNull: true },
      job_post_url: { type: Sequelize.STRING, allowNull: true },
      paid_on: Sequelize.DATE
    }
  }
}
