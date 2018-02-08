'use strict';

const {Router} = require('express');
const Account = require('../model/account.js');
const httpErrors = require('http-errors');
const basicAuth = require('../lib/basic-auth-middleware.js');

const authRouter = module.exports = new Router();

authRouter.post('/auth', (req, response, next) => {
  Account.create(req.body)
    .then(account => account.tokenCreate())
    .then(token => {
      response.cookie('charity-choice-Token', token, {maxAge:604800000});
      console.log('BACKEDND REQUEST', token);
      response.json({token});
    })
    .catch(next);
});

authRouter.get('/auth', basicAuth, (req, response, next) => {
  req.account.tokenCreate()
    .then(token => {
      response.cookie('charity-choice-Token', token, {maxAge:604800000});
      response.json({token});
    })
    .catch(next);
});

authRouter.put('/auth', basicAuth, (req, response, next) => {

  if (!req.body.username || !req.body.email || !req.body.password)
    return next(httpErrors(400, '__REQUEST_ERROR__ username, email, and password required'));

  req.account.update(req.body)
    .then(() => {
      response.sendStatus(200);
    })
    .catch(next);
});
