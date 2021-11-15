const path = require('path');
const jsonServer = require('json-server');

const jServer_router = jsonServer.router(path.join(process.cwd(), 'data/database.json'));

module.exports = jServer_router;
