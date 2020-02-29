const orm = require("../config/orm.js");

const burger = {
  selectAll: function(cb){
    orm.selectAll("burgers", function(res){
      cb(res);
    })
  },
  insertOne: function(cols, vals, cb){
    orm.insertOne("burgers", cols, vals, function(res){
      cb(res);
    })
  },
  updateOne: function(objColVAls, condition, cb){
    orm.updateOne("burgers", objColVAls, condition, function(res){
      cb(res);
    })
  },
  delete: function(condition, cb){
    console.log("reaches the model");
    orm.delete("burgers", condition, (res) => {
      cb(res);
    })
  }
}

module.exports = burger;