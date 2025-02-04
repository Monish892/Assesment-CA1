const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://grmonishs65:2007@asap-project.izf50.mongodb.net/sdada').then(()=>console.log('conected to mongodb')
).catch(err=>console.error('mongodb is not connected',err))



module.exports=mongoose;