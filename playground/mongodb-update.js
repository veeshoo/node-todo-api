// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log("Unable to connect to Mongodb server");
    }
    console.log("Connected to Mongodb Server");

//    db.collection('Todos').findOneAndUpdate({
//        _id: new ObjectID("5b535947db5c073a18b84bed")
//     }, {
//         $set: {
//             completed: true
//         }
//     }, {
//         returnOriginal: false
//     }).then((result) => {
//         console.log(result);
//     });
    db.collection('Users').findOneAndUpdate({
        _id : new ObjectID("5b518a384b38bf31e8e415c1")
    }, {
        $set: {
            name: "Boris Baker"
        },
        $inc: {
            age: 2
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    //db.close();
});