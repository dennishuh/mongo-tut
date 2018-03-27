const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017", (err, client) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");

  var db = client.db("TodoApp");
  
  // 
  
  // db
  //   .collection("Todos")
  //   .find()
  //   .count()
  //   .then(count => {
  //       console.log("Todos count: " + count);
  //     }, err => {
  //       console.log("Unable to fetch todos", err);
  //     });

   db
     .collection("Users")
     .find({name: 'Andrew'})
     .toArray()
     .then(docs => {
        console.log(JSON.stringify(docs, undefined, 2))
       }, err => {
         console.log("Unable to fetch todos", err);
       });

  // client.close();
});
