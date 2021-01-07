var express = require('express');
var router = express.Router();
var path = require('path');

/* GET notes listing. */
router.get('/', function(req, res, next) {
    filePath=path.resolve("./public/data", "data.json");
    res.sendFile(filePath);
});

module.exports = router;