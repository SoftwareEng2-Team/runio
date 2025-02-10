const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'run_for_your_life',
    password: 'sommelier01',
    port: 5432,
});

module.exports = pool;
