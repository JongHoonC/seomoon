const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const {send} = require('process');
const db = require('./../db.js');
const fs = require('fs');
router.get('/', (req, res, next) => {
  res.render('nightIndex', {layout: 'nightLayout'});
});

router.get('/light', (req, res, next) => {
  res.render('lightIndex', {layout: 'lightLayout'});
});
router.get('/night', (req, res, next) => {
  res.render('nightIndex', {layout: 'nightLayout'});
});

module.exports = router;
