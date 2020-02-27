const connection = require("./connection.js");

function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

const orm = {
  selectAll: function(table, cb){
    const queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, function(err, result){
      if (err){
        throw err;
      }
      cb(result);
    })
  },

  insertOne: function(table, cols, vals, cb){
    let queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";
    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  updateOne: function(){

  }

}

module.exports = orm;