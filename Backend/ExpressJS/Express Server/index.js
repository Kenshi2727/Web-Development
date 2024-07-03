import express from "express";
const app = express(); /* The `express()` function is initializing an Express application. It creates an instance
of the Express framework, which allows you to set up routes, handle HTTP requests, and
define middleware for your web application. */

/*initialize express
an express object*/

/* The `port` variable in the provided code snippet is storing the port number `3000`. This port
number is used when the Express application is started and listens for incoming connections on
that specific port. In this case, the `app.listen(port, ...)` function is telling the Express
application to listen for incoming requests on port 3000. */
const port = 3000;//port number

/* The `get` method in Express is used to define a route that listens for GET requests on a
specific path. In the provided code snippet, `app.get("/", (req, res) => res.send("Hello
World!"))` sets up a route for the root path ("/") that responds with "Hello World!" when a GET
request is made to that path. */
app.get("/", (req, res) => res.send("Hello World!"));//get request

app./* The `listen` method in the provided code snippet is instructing the Express application to start
listening for incoming connections on a specified port. In this case, `app.listen(port, () =>
console.log(`Server is running on port .`))` is telling the Express application to start
listening on port 3000. When the server starts successfully and begins accepting incoming
requests, the callback function `() => console.log(`Server is running on port .`)` is
executed, which logs a message indicating that the server is running on the specified port. */
    listen(port, () => console.log(`Server is running on port ${port}.`));//listen to port 3000

