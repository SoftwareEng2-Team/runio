import pkg from 'pg';
import dotenv from 'dotenv';

const { Pool } = pkg;

dotenv.config({ path: '../database/.env' });

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }  
});

(async () => {
    try {
        const res = await pool.query('SELECT NOW()');
        console.log("Database connected successfully at:", res.rows[0].now);
    } catch (err) {
        console.error("Database connection failed!", err);
    }
})();

export default pool;
