const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// GET /api/items - Fetch all items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/items - Create a new item
router.post('/', async (req, res) => {
  const { name, price,description,category} = req.body; // TODO (Student): Read the new fields here

  const item = new Item({
    name,
    price,
    description,
    category
  });

  try {
    const savedItem = await item.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// TODO (Student): Implement DELETE /api/items/:id route here
router.delete('/:id',async(req,res)=>{
  try{
      const deleteItem=await Item.findByIdAndDelete(req.params.id)
      
      if(!deleteItem){
        return res.status(404).json({message:"Item not Found"})
      }
      res.json({message:"Item deleted successfully"})
  }catch(err){
      res.status(500).json({message:err.message})

  }
    
})

module.exports = router;
