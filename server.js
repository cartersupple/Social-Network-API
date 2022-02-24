const express = require('express');
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 27017;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/myFirstDatabase",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  
  mongoose.set("debug", true);

  app.listen(PORT, () => console.log(`MongoDB Connected: localhost:${PORT}`));