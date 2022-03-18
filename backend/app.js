const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db/connect');

const userRouter = require('./routes/user');
const authRouter = require('./routes/auth')
const productRouter = require('./routes/product');
const cartRouter = require('./routes/cart');

dotenv.config();
const port = process.env.PORT;

const app = express();

app.use(express.json())

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port || 3000, () => {
      console.log(`Server is listen port ${port}`);
    });
  } catch (error) {
    console.log(error, 'Error from start server');
  }
}

start();
