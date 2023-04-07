/*
 * Copyright (C) 2014-present Cloudflare, Inc.

 * This software may be modified and distributed under the terms
 * of the MIT license.  See the LICENSE file for details.
 */

'use strict';

const prototypal = require('es-class');
const auto = require('autocreate');

const Resource = require('../Resource');
const method = require('../method');

/**
 * Rulesets represents the /zones/:zoneID/dns_records API endpoint.
 *
 * @class Rulesets
 * @hideconstructor
 * @extends Resource
 */
module.exports = auto(
  prototypal({
    extends: Resource,
    path: 'zones/:zoneId/rulesets',

    includeBasic: ['add'],

    list: method({
      method: 'GET',
      path: 'phases/:phase/entrypoint',
    }),

    update: method({
      method: 'PUT',
      path: ':id',
    }),
  })
);
