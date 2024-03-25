const express = require("express");

const meetingsRouter = express.Router();

const {
  createMeeting,
  getAllFromDatabase,
  addToDatabase,
  deleteAllFromDatabase,
} = require("./db");


module.exports = meetingsRouter;

meetingsRouter.get('/', (req,res,next) => {
  res.send(getAllFromDatabase('meetings'))
})

meetingsRouter.post('/', (req,res,next) => {
  let newMeeting = addToDatabase('meetings', createMeeting())
  res.status(201).send(newMeeting)
})
meetingsRouter.delete('/', (req,res,next) => {
  let deletedMeetings = deleteAllFromDatabase('meetings')
  res.send(deletedMeetings)
})