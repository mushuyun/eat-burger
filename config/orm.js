var connection = require("../config/connection");

function createQmarks(num){

    var arr = [];
    for(i = 0; i < num; i++){
        arr.push("?");
    }
    return arr.toString();
}

function translateSql(ob){
    var arr = [];
    for (var key in ob){
        var value = ob[key];
        if(Object.hasOwnProperty.call(ob, key)) {
            if(typeof value === "string" && value.indexOf(" ") >= 0){
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value)
        }
    }
    
    return arr.toString();
}

var orm = {
    selectAll: function(table, cb) {

        var query = "select * from" + table + ";" ;

        connection.query(query, function(err, res) {

        if(err) throw err;
        cb(res);   
        });
    },

    insertOne: function(table, cols, vals, cb){
        var query = "insert into" + table + " (" + cols.toString() + " )" + "values (" + createQmarks(vals.length) + ") "
        
        console.log(query);

        connection.query(query, vals, function(err, res){
            if (err) throw err;
            cb(res);
        });
    },

    updateOne: function(table, objCoVals, condition, cb){
        var query = "update" + table + " set " + translateSql(objCoVals) + " where " + condition;

        console.log(query);

        connection.query(query, function(err, res){
            if(err) throw err;
            cb(res);
        });
    },

    deleteOne: function(table, conditon, cb){
        var query = "delete from " + table + " where " + condition;
        console.log(query);
        
        connection.query(query, function(err, res){
            if (err) throw err;
            cb(res);
        })

    }

};

module.exports = orm;