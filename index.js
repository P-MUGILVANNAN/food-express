const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require( './config/db.js');
const authRoutes = require('./routes/authRoutes');
const foodRoutes = require('./routes/foodRoutes');

// Connet to DB
connectDB();

// use middleware
app.use(express.json());
app.use(cors());

// basic route
app.get('/',(req,res)=>{
    res.send("Express app is running!");
});

// use routes
app.use('/api/auth',authRoutes);
app.use('/api/food',foodRoutes);

// starting the server
app.listen(process.env.PORT,()=>{
    console.log("Server started on port "+process.env.PORT);
});