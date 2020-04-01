var connection = require("../config/connection.js");

var orm = {
    selectAll: function(cb) {
        const query = "select * from burgers";
        connection.query(query, function(err, res) {

        if(err) throw err;
        cb(res);   
        });
    },

    insertOne: function(burger, cb){
        const query = "insert into burgers (burger_name) values(?)";
        connection.query(query, [burger], function(err, res){
            if (err) throw err;
            cb(res);
        });
    },

    updateOne: function(id, cb){
        const query = "update burgers set devoured = true where id = ?";
        connection.query(query, [id], function(err, res){
            if(err) throw err;
            cb(res);
        });
    }

};

module.exports = orm;