const port = process.env.PORT || 3000;
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const express = require('express');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/auth', require('./src/routes/userRoute'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

