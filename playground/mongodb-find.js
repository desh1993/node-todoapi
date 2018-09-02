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

    // db.collection('ToDos').find().count().then((count)=>{
    //     console.log('todoapp');
    //      console.log(`Connected to server, count is , ${JSON.stringify(count,undefined,2)}`);
    // },(error)=>{
    //     console.log(`Unable to connect to server`,error)
    // });
//    db.collection('ToDos').find({
//        _id: new ObjectID( "5b8a26f9701c540e94835125")
//    }).toArray().then((docs)=>{
//        console.log('todoapp');
//         console.log(`Connected to server, ${JSON.stringify(docs,undefined,2)}`);
//    },(error)=>{
//        console.log(`Unable to connect to server`,error)
//    });
//==================
// find the user desh 
db.collection(`users`).find({name:"Kani"}).toArray().then(
    (docs) =>{
        console.log(`Connected to users server`);
        if(docs.length === 0){
          return console.log(`No such user, Kindly try again, thank you`);
        }
        console.log(`${JSON.stringify(docs,undefined,2)}`);
    },
    (error)=>{
        if(error){
            console.log(`Unable to connect to server`,error)
        }
    }
);
    client.close();
});