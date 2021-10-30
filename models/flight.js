import mongoose from 'mongoose'

const Schema = mongoose.Schema

const flightSchema = new Schema ({
  airline: {
    type: String, 
    enum: ['American', 'SouthWest', 'United']
  },
  airport: {
    type: String, 
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
  },
  flightNo:{
  type: Number, 
  min: 10,
  max: 9999,
},
  departs: Date, 
})

//Compile the new Schema into a model and export it
const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight 
}