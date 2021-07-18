const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// const authRoute = require('./routes/auth');
// const userRoute = require('./routes/users');
// const movieRoute = require('./routes/movies');
// const listRoute = require('./routes/lists');

dotenv.config();

const MONGO_URL = process.env.MONGO_URL
mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('DB Connection Successful'))
  .catch((err) => {
    console.error(err);
  });

app.use(express.json());

// app.use('/api/auth', authRoute);
// app.use('/api/users', userRoute);
// app.use('/api/movies', movieRoute);
// app.use('/api/lists', listRoute);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Backend server is running on PORT ${PORT}`);
});