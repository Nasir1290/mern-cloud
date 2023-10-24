import express from "express";
import mongoose from "mongoose";
import { addUser, allUsers, deleteUser, editUser, savedEditUser } from "./controller/userController.js";
import cors from 'cors'
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';



// initialization
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const App = express();
const port = 8000;
const router = express.Router();

// middle wars
App.use(express.json())
App.use(cors())
App.use(express.static(path.join(__dirname,'dist')));


// methods


App.post('/add', addUser)
App.get('/all', allUsers)
App.get('/:id', editUser)
App.patch('/:id', savedEditUser)
App.delete('/:id', deleteUser)

App.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });


// db connection
const dbUrl = 'mongodb+srv://NasirMia:NasirMia1290@mydatabase.nhior4u.mongodb.net/crudApplication';
const dbConnection = async () => {
    try {
        await mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('database connected successfully......')
    } catch (error) {
        console.log('Error occured while connecting database ', error)
    }
}
dbConnection()


// server connection
App.listen(port, () => {
    console.log('server listening on port :', port)
})


