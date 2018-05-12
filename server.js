var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require(".models");

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static("public"));

//ROUTES
require("./routes/html-routes.js")(app);
require("./routes/user-api-routes.js")(app);
require("./routes/account-api-routes.js")(app);
require("./routes/transaction-api-routes.js")(app);

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
});