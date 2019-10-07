const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Conenct Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.status(200).json({ msg: "Welcome to the Contact Keeper API..." }));

//Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
})