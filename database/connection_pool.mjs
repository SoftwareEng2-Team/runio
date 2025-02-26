import pkg from 'pg';
import dotenv from 'dotenv';

const { Pool } = pkg;

dotenv.config({ path: '../database/.env' });

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_URL.includes("localhost") ? false : { rejectUnauthorized: false }  
});

// Testing database connection
pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error("❌ Database connection failed!", err);
    } else {
        console.log("✅ Database connected successfully at:", res.rows[0].now);
    }
});

export default pool;
