// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log("Unable to connect to Mongodb server");
    }
    console.log("Connected to Mongodb Server");

    // db.collection('Todos').find({_id: new ObjectID('5b5184cedb5c073a18b82606')}).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log("Unable to fetch todos", err);
    // });

    db.collection('Users').find({"location": "Philadelphia"}).count().then((count) => {
        console.log(`Total count: ${count}`);
        // console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log("Unable to fetch todos", err);
    });
    //db.close();
});