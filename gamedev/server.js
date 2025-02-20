'use strict';

import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import runRoutes from './routes/runRoutes.js';
import leaderboardRoutes from './routes/leaderboardRoutes.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static("public_html"));

// API Routing
app.use('/api/users', userRoutes);
app.use('/api/runs', runRoutes);
app.use('/api/leaderboard', leaderboardRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});