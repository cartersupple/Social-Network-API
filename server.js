const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(require("./routes"));
console.log(process.env)
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/SocialNetworkAPIdb",

    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  
  mongoose.set("debug", true);
  app.listen(PORT, () => console.log(`Local server connected: localhost:${PORT}`));