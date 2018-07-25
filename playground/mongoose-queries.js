const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5b54a5c23e8a62304b03da3d';

User.findById(id).then((user) => {
    if(!user){
        return console.log('User not found');
    }

    console.log('User: ', user);
}).catch((e) => console.log(e));

// var id = '5b575e4d1fbe4330218ce3f91';

// if(!ObjectID.isValid(id)){
//     console.log('ObjectId not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo by id', todo);
// }).catch((e) => console.log(e));
