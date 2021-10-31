import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ticketSchema = new Schema({
  seat: {
type: String, 
match: /[A-F][1-9]\d?/,
  },
  price: {
    type: Number, 
    min: 0, 
  }
})

const flightSchema = new Schema ({
  airline: {
    type: String, 
    enum: ['American', 'SouthWest', 'United']
  },
  airport: {
    type: String, 
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
  },
  flightNumber:{
  type: Number, 
  min: 10,
  max: 9999,
},
  departureTime: Date, 
  tickets: [ticketSchema],
})

//Compile the new Schema into a model and export it
const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight 
}