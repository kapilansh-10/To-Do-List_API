Understanding the whole project in detail

1. first we made a local server using express js 

here it is:

const app = express(); // create express app
const PORT = 3000; // default port to listen

app.use(express.json()); // for parsing application/json , It enables your Express server to understand and handle data sent in JSON format, which is commonly used in APIs for client-server communication.


app.get("/", (req, res) => {
    res.send("Hello World!"); // send text response
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); // tslint:disable-line
}) // start express server

2. Second we made a crud route which is a web applicaiton route that handles create, read, update and delete operations for managing data




