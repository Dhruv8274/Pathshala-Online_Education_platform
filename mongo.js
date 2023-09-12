const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/PathShala_Student_Data",{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log(`Connection to MongoDB successful`);
  })
  .catch((err) => {
    console.error('Error connecting to database:', err.message);
  });
const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const collection = mongoose.model("collection",newSchema)
module.exports=collection