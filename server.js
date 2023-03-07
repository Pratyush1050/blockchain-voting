const next = require('next');
const express = require('express');
const voter = require('./routes/voter');
const company = require('./routes/company');
const candidate = require('./routes/candidate');
const bodyParser = require('body-parser');
const mongoose = require('./config/database');
const exp = express();
const path = require('path');


require('dotenv').config({ path: __dirname + '/.env' });

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

exp.use(
	bodyParser.urlencoded({
		extended: true,
	})
);
exp.use(bodyParser.json());

exp.get('/', function (req, res) {
	res.sendFile(__dirname + '/pages/homepage.js');
	// res.sendFile(path.join(__dirname + '/pages/homepage.js'));
});

exp.use('/company', company);

exp.use('/voter', voter);

exp.use('/candidate', candidate);

console.log("here");
// const app = next({
// 	dev: process.env.NODE_ENV !== 'production',
// });
const app = next({ dev: true });
console.log("here2");
const routes = require('./routes');
const handler = routes.getRequestHandler(app);
console.log("here3");
// exp.use(handler);

app.prepare().then(() => {
	console.log('Next.js is ready');
	exp.use(handler).listen(3000, function () {
		console.log('Node server listening on port 3000');
	});
}).catch((ex) => {
	console.error(ex.stack);
	process.exit(1);
}
);
