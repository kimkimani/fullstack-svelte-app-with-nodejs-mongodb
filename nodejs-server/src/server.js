const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Initiate MongoDB and start server
app.listen(PORT, () => {
    mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/your_preferred_db_name', { useNewUrlParser: true }).then((response) => {
        console.log(`Connected to MongoDB and server started on PORT ${PORT}`);
    }).catch((err) => {
        console.log(err);
    })
});

const Schema = mongoose.Schema;
const todoSchema = new Schema({
    title: String,
    description: String,
});
const Todo = mongoose.model('Todo', todoSchema);

app.get('/api/todos', async (req, res, next) => {
    const todos = await Todo.find();
    return res.json(todos);
});

app.post('/api/todos', async (req, res, next) => {
    const todo = new Todo(req.body);
    // save todo to database
    await todo.save();
    return res.json(todo);
});

// Delete a todo
app.delete('/api/todos', async (req, res, next) => {
    // find todo by id and delete
    await Todo.findByIdAndDelete(req.body.id);                   

    return res.json({
        message: 'Todo deleted successfully',
        success: true,
    });
})