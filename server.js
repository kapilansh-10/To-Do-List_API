import express from "express";



const app = express(); // create express app
const PORT = 3000; // default port to listen

app.use(express.json()); // for parsing application/json

app.get("/", (req, res) => {
    res.send("Hello World!"); // send text response
})

// In-memory data storage
let items = [
    { id: 1, task: "Buy groceries", completed: false },
    { id: 2, task: "Clean the house", completed: true },
    { id: 3, task: "Finish project report", completed: false },
    { id: 4, task: "Read a book", completed: true }
];

// ** CRUD Routes **

app.post("/item", (req, res) => { // create a new item
    const { task } = req.body; // get name from request body
    if(!task){ // if name is not provided
        return res.status(400).json({error: "Task is required "}); // return error
    }
    const newItem = { id: items.length + 1, name} // create a new item object with id and name
    items.push(newItem) // push the new item to the items array
    res.status(201).json(newItem); // return the new item as response with status code 201 (created)
});

// Get all items
 
app.get("/items", (req, res) => { // get all items 
    res.json(items) // return all items as response
})

// Get a single item by ID
app.get("/items/:id", (req, res) => { // get a single item by id
    const id = parseInt(req.params.id) // get id from request parameters
    const item = items.find(i => i.id === id);
    if(!item){
        return res.status(404).json({error: "Item not found"}) // return error if item is not found
    }
    res.json(item) // return the item as response
})

// Update an item by ID

app.put("/items/:id", (req, res) => { // update an item by id
    const id  = parseInt(req.params.id); // get id from request parameters
    const { task } = req.body; // get name from request body
    const item = items.find(i => i.id === id);
    if(!item){
        return res.status(404).json({error: "Item not found"})
    }
    if (task) { // if name is provided 
        item.name = name; // update the item name
    }
    res.json(item) // return the updated item as response
})

app.delete("/items/:id", (req, res) => { // delete an item by id
    const id  = parseInt(req.params.id); // get id from request parameters
    const index = items.findIndex(i => i.id === id) // find the index of the item
    if ( index === -1) {
        return res.status(404).json({error: "Item not found"}) // return error if item is not found
    }
    items.splice(index, 1) // remove the item from the items array by index
    res.status(204).send(); // No content
})


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); // tslint:disable-line
}) // start express server
