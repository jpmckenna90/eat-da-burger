const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", function(req, res){
  burger.selectAll(function(data){
    const hbsObject = {
      burger: data
    };
    // console.log(hbsObject);
    res.render("index", hbsObject)
  })
})

router.post("/api/burgers", function(req, res){
  burger.insertOne([
    "burger_name", "devoured"
  ], [
    req.body.name, req.body.devoured
  ], function(result){
    res.json({id: result.insertId});
  })
})

router.put("/api/burgers/:id", function(req, res){

  const condition = "id = " + req.params.id;

  console.log("condition", condition);

  // !!todo so this calls, but nothing actually updates. follows changedRows == 0 route
  burger.updateOne({
    devoured: !req.body.devoured
  }, condition, function(result){
    if (result.changedRows == 0) {
      console.log("bloop")
      
      // return res.status(404).end();
      return res.status(200).end();
    } else {
      return res.status(200).end();
    }
  })
})

router.delete("/api/burgers/:id", (req, res) => {
  console.log("reaches the controller");
  const condition = "id = " + req.params.id;
  console.log("condition", condition);

  burger.delete(condition, (result) => {
    if (result.affectedRows == 0){
      return res.status(404).end();
      // console.log("comes here tho");
    } else {
      return res.status(200).end();
    }
  })
})

module.exports = router;