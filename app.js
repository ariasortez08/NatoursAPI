const express = require('express');

const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

// ? MIDDLEWARES

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use((req, res, next) => {
  app.requestTime = new Date().toISOString();
  next();
});

// ? ROUTES

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

743296231;
