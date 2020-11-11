const express = require("express");

const cors = require("cors");
//const sha1 = require("sha1");
// const cookieParser = require("cookie-parser");

const users = require('./routes/users');

const app = express();

app.use(express.json());

//app.use(cors({origin: '*'}));
app.use(cors({origin: 'https://kuepj.sse.codesandbox.io'}));
// Routes//
app.use('/api',users);

app.listen(3001, () => {
  console.log("running server");
});