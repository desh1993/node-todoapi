//const MongoClient =  require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

//connection to URL
const url =  `mongodb://localhost:27017/TodoApp `;

//connect
MongoClient.connect(url,(err,client)=>{
    if(err){
        return console.log(`Unable to connect to server because it has ${err}`);
    }
    console.log(`Connected successfully to server`);
    const db = client.db('TodoApp');
    // Insert document
    // db.collection(`users`).insertOne({
    //     name:`Desh`,
    //     age:25,
    //     location :`PJ`
    // },(err,result)=>{
    //     if(err){
    //         return console.log(`Unable to connect due to ${err}`);
    //     }
    //     console.log(`Connection successful , ${JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2)}`);
    // })
    // db.collection('ToDos').insertOne({
    //     text:`Something to do`,
    //     completed: false
    // },(err, result)=>{
    //     if(err){
    //         return console.log(`Unable to insert object`,err);
    //     }
    //     console.log(`Connection successful , ${JSON.stringify(result.ops,undefined,2)}`);
    // })
    client.close();
});