import mongoose from "mongoose";
import { userData } from "../model/userModel.js";





export const addUser = async (req, res) => {
    try {
        const userInfo = req.body;
        const newUser = new userData(userInfo);
        const savedUser = await newUser.save();
        res.json(savedUser)

    } catch (error) {
        console.log('Error while try to add addUser on backend :', error)
    }
}

export const allUsers = async (req, res) => {
    try {
        const allUser = await userData.find({})
        res.json(allUser)
    } catch (error) {
        console.log('Error occured in backend while calling allUsers :', error)
    }
}

export const editUser = async (req, res) => {
    try {
        const id = new mongoose.Types.ObjectId(req.params.id);
        const updatableInfo = await userData.findById(id);
        res.json(updatableInfo);
    } catch (error) {
        console.log('Error occured while calling edit user from backend :', error)
    }
}

export const savedEditUser = async (req, res) => {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const savedUser = await userData.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    res.status(200).json(savedUser)

}

export const deleteUser = async (req,res) => {
    try {
        const id = new mongoose.Types.ObjectId(req.params.id);
        const deletedData = await userData.deleteOne({_id:id});
        res.json(deletedData)
    } catch (error) {
        console.log('Error occured while calling deleteUser on backend',error)
    }
} 