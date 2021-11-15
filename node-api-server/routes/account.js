const express = require('express');
const { requestToken } = require('../utilities/token-service');
const router = express.Router();

router.post('/getToken', requestToken);

module.exports = router;
