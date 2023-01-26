import mongodb from "mongodb";
const url = "mongodb://localhost:27017";
const dbName = "test111"

var _connection;

export function connectToDBServer() {
    mongodb.MongoClient.connect(url,  { useNewUrlParser: true }, function( err, client ) {

        if (err) {
            throw err;
        }

        _connection = client.db(dbName);
        console.log(`Connected to MongoDb: ${url}/${dbName}`)
    });
}

export function getDb() {
    return _connection;
}