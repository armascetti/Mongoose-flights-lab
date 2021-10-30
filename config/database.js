import mongoose from 'mongoose'

//Connecting to the database through Atlas 
mongoose.connect(process.env.DATABASE_URL)