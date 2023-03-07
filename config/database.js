//Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = "mongodb://127.0.0.1/ovs";

//connect to database


// mongoose.connect(mongoDB,{ useNewUrlParser: true });
mongoose.connect(mongoDB, { useUnifiedTopology: true,useNewUrlParser: true });
mongoose.Promise = global.Promise;
module.exports = mongoose;