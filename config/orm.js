const connection = require("./connection.js");

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

  insertOne: function(){

  },

  updateOne: function(){

  }

}

module.exports = orm;