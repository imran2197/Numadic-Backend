const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "@farahramsha1234",
    database: "numadic",
    host: "localhost",
    port: 5432,
});

module.exports = pool