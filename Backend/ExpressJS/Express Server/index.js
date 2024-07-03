import express from "express";
const app = express();/*initialize express
an express object*/
const port = 3000;//port number

app.listen(port, () => console.log(`Server is running on port ${port}.`));//listen to port 3000

