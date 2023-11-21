var _dB = require('../database.js')
const express = require('express')
const router = express.Router()

router.get('/', function(req, res, next){
    var sql = ``
    _dB.query(sql, function(err, data, fields){
        if(err) throw err;
        res.render('ladder/arena', {title: 'Arena-Respect', userData:data});
    });
});

module.exports = router
