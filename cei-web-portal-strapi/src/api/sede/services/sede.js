'use strict';

/**
 * sede service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sede.sede');
