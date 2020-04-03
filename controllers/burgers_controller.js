const express = require("express");

const router = express.Router();

const burger = require("../models/burger");

router.get("/", (req, res) =>{
    burger.selectAll((data) =>{
        var hdbarObject = {
            burgers: data
        };

        console.log(hdbarObject);

        res.render("index", hdbarObject);
    });
});

router.post("/api/burgers", (req, res) =>{
    burger.insertOne(
        ["burger_name", "devoured"],
        [req.body.burger_name, req.body.devoured],  
        function(data){
        res.json({id: data.insertId});
        }
    );
});

router.put("/api/burgers/:id", function(req, res){
    var condition =  "id =" + req.params.id;
    console.log("condition", condition);

    burger.updateOne({devoured: req.body.devoured}, condition, function(data){

        if (data.changedRows === 0){
            return res.status(404).end();
        }else{
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.deleteOne(condition, function(data){
        if (data.changedRows === 0){
            return res.status(404).end();
        }else{
            res.status(200).end()
        }
    });
});

module.exports = router;



