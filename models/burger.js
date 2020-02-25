const orm = require("../config/orm.js");

const burger = {
  selectAll: function(cb){
    orm.selectAll("burgers", function(res){
      cb(res);
    })
  },
  insertOne: function(){
    orm.insertOne({

    })
  },
  updateOne: function(){
    orm.updateOne({

    })
  }
}

module.exports = burger;