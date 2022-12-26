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

router.get('/night-sign-in', (req, res, next) => {
  res.render('night-sign-in', {layout: 'nightLayout'});
});
router.get('/night-sign-up', (req, res, next) => {
  res.render('night-sign-up', {layout: 'nightLayout'});
});
router.get('/light-sign-in', (req, res, next) => {
  res.render('light-sign-in', {layout: 'lightLayout'});
});
router.get('/light-sign-up', (req, res, next) => {
  res.render('light-sign-up', {layout: 'lightLayout'});
});

// 로그인
router.post('/night-sign-in', (req, res, next) => {
  let paramL = JSON.parse(JSON.stringify(req.body));
  let userID = paramL['userID'];
  let userPW = paramL['userPW'];
  db.loginCheck(userID, userPW, result => {
    if (result.length > 0) {
      res.redirect('/night');
    } else {
      res.send(`<script>alert('로그인정보가 일치하지 않습니다'); document.location.href="/night-sign-in";</script>`);
    }
  });
});

// 회원가입 페이지
router.post('/night-sign-up', (req, res, next) => {
  let paramS = JSON.parse(JSON.stringify(req.body));
  let userName = paramS['userName'];
  let userID = paramS['userID'];
  let userPW = paramS['userPW'];
  db.userSignUp(userName, userID, userPW, () => {
    res.redirect('/night');
    //past 에서 특정 값만 넘겨줄 때 row 대신 넘겨줄 값을 써준 후 <% row.id %> 가 아닌 <% id %> 를 써준다
  });
});
// 로그인
router.post('/light-sign-in', (req, res, next) => {
  let paramL = JSON.parse(JSON.stringify(req.body));
  let userID = paramL['userID'];
  let userPW = paramL['userPW'];
  db.lightloginCheck(userID, userPW, result => {
    if (result.length > 0) {
      res.redirect('/');
    } else {
      res.send(`<script>alert('로그인정보가 일치하지 않습니다'); document.location.href="/light-sign-in";</script>`);
    }
  });
});

// 회원가입 페이지
router.post('/light-sign-up', (req, res, next) => {
  let paramS = JSON.parse(JSON.stringify(req.body));
  let userName = paramS['userName'];
  let userID = paramS['userID'];
  let userPW = paramS['userPW'];
  db.lightuserSignUp(userName, userID, userPW, () => {
    res.redirect('/light');
    //past 에서 특정 값만 넘겨줄 때 row 대신 넘겨줄 값을 써준 후 <% row.id %> 가 아닌 <% id %> 를 써준다
  });
});

module.exports = router;
