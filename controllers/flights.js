//Importing Flight Model 
import { Flight } from '../models/flight.js'

function newFlight(req, res) {
  res.render('flights/new')
}

function index(req, res) {
  let dateTime = new Date()
  let date = ""
  Flight.find({}, function (error, flights) {
    res.render('flights/index', {
      flights,
      error,
      title: 'All Flights',
      time: date.concat(dateTime.getMonth(), "/", dateTime.getDate(), '/', dateTime.getFullYear())
    })
  })
}

function create(req, res) {
  for (let key in req.body){
    if (req.body[key] === "") {
      delete req.body[key]
    }
  }
  const flight = new Flight(req.body)
  flight.save(function (err) {
    if (err) {
      res.redirect('/flights/new')
    }
    res.redirect('/flights')
  })
}



export {
  newFlight as new,
  index,
  create,
}