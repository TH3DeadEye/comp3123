const express = require('express');
const path = require('path');
const app = express();
const userRouter = require('./routes/users');

app.use(express.json());

// Add User Router
app.use('/api/v1/user', userRouter);

// Return home.html page to client
app.get('/home', (req,res) => {
  res.sendFile(path.join(__dirname, './home.html'))
});

// Error handling middleware: return 500 page with message "Server Error"
app.use((err,req,res,next) => {
  console.error(err);
  res.status(500).send('Server Error');
});

const port = process.env.PORT || process.env.port || 8081;
app.listen(port);

console.log('Web Server is listening at port '+ port);
