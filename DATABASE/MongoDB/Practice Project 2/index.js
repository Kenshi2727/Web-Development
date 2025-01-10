import mongoose from "mongoose";
// const uri = "mongodb://127.0.0.1/shop";//mongodb://127.0.0.1/yourDB
const uri = "mongodb+srv://Kenshi:abhi%402727@cluster0.ruac3.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0";
// url encoded password @---> %40
mongoose.connect(uri);

//schema
const productSchema = new mongoose.Schema({
    name: String,
    company: String,
    price: Number,
    colors: [String],
    image: String,
    category: String,
    isFeatured: Boolean,
});

const data1 = {
    name: "laptop",
    company: "hp",
    price: 2466,
    image: "https://www.google.com",
    category: "electronics",
    colors: ["black", "white"],
    isFeatured: true,
}


//model
const Product = mongoose.model("Product", productSchema);

const main = async () => {
    try {
        // const data = await Product.find({ price: { $eq: 1200 } });
        // console.log(data);

        //inserting data
        // await Product.insertMany(data1);
        // const data = await Product.find({ price: { $eq: 2466 } });
        // console.log(data);

        //updating data
        // const updateQuery = await Product.findOneAndUpdate({ 'name': 'laptop', price: { $eq: 2466 } }, { $set: { price: 7777 } });
        // await Product.insertMany(data1);
        // const data = await Product.find({ price: { $eq: 7777 } });
        // console.log(data);


        //delete data
        await Product.findOneAndDelete({ price: { $eq: 7777 } });

    } catch (error) {
        console.log(error);
    }
    finally {
        mongoose.connection.close();
    }
}

main();