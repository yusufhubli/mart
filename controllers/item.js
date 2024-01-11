import Items from '../models/Items.js'
import Category from '../models/Category.js'

export const getItems = async(req,res)=>{
    try {
        const item = await Items.find()
        res.status(200).json(item)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const updateItem = async(req,res)=>{
    try {
       const {id} = req.params
       const body = req.body
       console.log(body)
        res.status(200).json(body)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const deleteItem = async(req,res)=>{
    try {
        const {id} = req.params
        console.log(id)
       const del = await Items.deleteOne({_id:id})
        if(del){
        res.status(200).json({message:"item is deleted"})
        }
    } catch (error) {
        res.status(400).json(error)
    }
}

export const insertItem = async(req,res)=>{
    try {
       const body = req.body
        res.status(200).json(body)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const getSingleItem = async(req,res)=>{
    try {
       const {id} = req.params
       const item = await Items.find({_id:id})
       if(item){
        res.status(200).json(item)
       }
    } catch (error) {
        res.status(400).json(error)
    }
}

export const addCategory = async(req,res)=>{
    try {
       const {categoryName} = req.body
       const item = await Category.create({categoryName})
       if(item){
        res.status(200).json({message:"inserted"})
       }
    } catch (error) {
        res.status(400).json(error)
    }
}

export const getCategory = async(req,res)=>{
    try {
       const category = await Category.find()
       res.status(200).json(category)
    } catch (error) {
        res.status(400).json(error)
    }
}