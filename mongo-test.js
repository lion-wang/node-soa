var mongodb = require('mongodb');

var server = new mongodb.Server('localhost', 27017, {
    auto_reconnect: true
});

var db = new mongodb.Db('node-soa', server, {
    safe: true
});

db.open(function(err, db) {
    if (!err) {
        db.collection('services', {
            safe: true
        }, function(err, collection) {
            var tmp1 = {
                title: 'db2wsdl',
                version: 1.0
            };

            collection.remove({
                title: 'db2db',
                version: 1.0
            }, {
                safe: true
            }, function(err, result) {
                console.log('remove');
                console.log(result);
            });

            collection.insert(tmp1, {
                safe: true
            }, function(err, result) {
                console.log('insert');
                console.log(result);
            });

            collection.find().toArray(function(err, docs) {
                console.log('find');
                console.log(docs);
            });

            collection.findOne({
                title: 'db2db'
            }, function(err, doc) {
                console.log('findOne');
                console.log(doc);
            });　　　　
        });
    }
    else {
        console.log(err);
    }
});