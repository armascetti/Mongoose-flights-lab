//Importing Flight Model 
import { Flight } from '../models/flight.js'

function newFlight(req, res) {
  res.render('flights/new', {
    title: "Add Flight",
  })
}

function index(req, res) {
  let dateTime = new Date()
  let date = ""
  Flight.find({}, function (error, flight) {
    res.render('flights/index', {
      flight,
      error,
      title: "All Flights",
      time: date.concat(dateTime.getMonth(), "/", dateTime.getDate(), '/', dateTime.getFullYear())
    })
  })
}

function show(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    res.render('flights/show', {
      title: `${flight.airline} Airline Details`,
      flight,
    })
  })
}

function create(req, res) {
  console.log("This is the body", req.body)
  for (let key in req.body) {
    if (req.body[key] === "") {
      delete req.body[key]
    }
  }
  Flight.create(req.body, function (error, flight) {
    if (error) {
      return res.redirect('flights/new')
    }
    res.redirect('/flights')
  })
}

function createTicket(req, res) {
  Flight.findById(req.params.id, function (error, flight) {
    console.log("Here it is:", req.params.id)
    flight.tickets.push(req.body)
    flight.save(function(err){
      res.redirect(`/flights/${flight._id}`)
    })
  })
}

function deleteFlight(req, res){
  Flight.findByIdAndDelete(req.params.id, function(err, flight){
    res.redirect('/flights')
  })
}

export {
  newFlight as new,
  index,
  create,
  show,
  createTicket,
  deleteFlight as delete,
}