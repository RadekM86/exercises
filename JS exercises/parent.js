require('./child.js');
var validator = require("validator");
console.log("Witaj w pliku parent.js");
var isOk = validator.isEmail("foo@op.pl");
console.log(isOk);
