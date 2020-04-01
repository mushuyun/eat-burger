const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", (req, res) =>{
    burger.selectAll((data) =>{
        var burgerObject = {
            burger: data
        };
        res.render("index", burgerObject);
    });
});

router.post("/api/burgers", (req, res) =>{
    burger.insertOne((req.body.burger_name), function(){
        res.redirect("/");
    });
});

router.put("/api/:id", function(){
    var id = req.params.id;
    console.log("id", id);
    burger.updateOne(id, function(){
        res.redirect("/")
    });
});

module.exports = router;



