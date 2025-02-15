const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./database');

const userRoutes = require('./routes/userRoutes');
const serverRoutes = require('./routes/serverRoutes');

require('dotenv').config();

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());

// API Routes
app.use('/api', userRoutes);
app.use('/api', serverRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
