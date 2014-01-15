var oracle = require('../node-oracle/');

var connectData = {
    hostname: "localhost",
    port: 1521,
    database: "orcl", 
    user: "test",
    password: "test"
}

oracle.connect(connectData, function(err, connection) {
    if (err) { console.log("Error connecting to db:", err); return; }
    connection.execute("insert into nsoa(n_id,n_name,n_date) values(nsoa_s.nextval,'ÄãºÃ',sysdate)",[],function(err, results){
        if (err) { console.log("Error executing query:", err); return; }
        console.log(results);
        //connection.close(); 
    });
    
    connection.execute("SELECT * FROM nsoa", [], function(err, results) {
        if (err) { console.log("Error executing query:", err); return; }

        console.log(results);
        connection.close(); 
    });
})

//https://github.com/joeferner/node-oracle
