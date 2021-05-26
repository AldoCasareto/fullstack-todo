const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const PORT = 3030;
const app = express();
const todoRoutes = require('./routes/todoRoutes');

app.use(express.json());
app.use(cors());

mongoose
  .connect('mongodb://localhost/todolist', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(() => console.log('connected successfully'))
  .catch((err) => console.log(err));

app.use('/todos', todoRoutes);

app.listen(PORT, () => {
  console.log(`server is listening ${PORT}`);
});
