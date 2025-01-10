import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017"; // Connection URI to the MongoDB server(local server)
const client = new MongoClient(uri);// Create a new MongoClient
const data1 = {
    name: "laptop",
    price: 1200,
    category: "electronics",
    color: "black",
    quantity: 10,
    rating: 4.5
}



const main = async () => {
    await client.connect(); // Connect to the MongoDB server
    const db = client.db('shop'); // Get the database
    const collection = db.collection('products'); // Get the collection


    //inserting data
    await collection.insertOne(data1);

    const data = await collection.find({ price: { $gte: 1200 } }).toArray();//to convert json to array
    console.log("type--->", typeof data);
    console.log("data--->", data);


    return "done";
};

main().then(console.log())
    .catch((e) => console.log(e))
    .finally(() => client.close());
