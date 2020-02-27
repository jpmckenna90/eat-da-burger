const orm = require("../config/orm.js");

const burger = {
  selectAll: function(cb){
    orm.selectAll("burgers", function(res){
      cb(res);
    })
  },
  insertOne: function(cols, vals, cb){
    // console.log('reaches model');
    orm.insertOne("burgers", cols, vals, function(res){
      cb(res);
    })
  },
  updateOne: function(){
    orm.updateOne({

    })
  }
}

module.exports = burger;