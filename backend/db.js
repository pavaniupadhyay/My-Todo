const mongoose=require("mongoose")
const { string, boolean } = require("zod")
mongoose.connect('')
const todoSchema=mongoose.Schema({
  title:String,
  description:String,
  complited:Boolean
})
const todo=mongoose.model('todos',todoSchema);
module.exports={
  todo
}