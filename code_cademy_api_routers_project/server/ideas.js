const express = require('express')

const ideasRouter = express.Router()
const checkMillionDollarIdea = require('./checkMillionDollarIdea')

const {
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
} = require("./db");


module.exports = ideasRouter

ideasRouter.param('ideaId', (req,res, next, id)=> {
    const idea = getFromDatabaseById('ideas', id)
    if(!idea) {
        res.send(404).send(`Idea with id ${id} is not found`)
    } else {
        req.idea = idea
        next()
    }
})

ideasRouter.get("/", (req, res, next) => {
  res.send(getAllFromDatabase("ideas"));
});
ideasRouter.post("/", checkMillionDollarIdea, (req, res, next) => {
  const newIdea = addToDatabase("ideas", req.body);
  res.status(201).send(newIdea)
  }
);

ideasRouter.get('/:ideaId', (req,res,next) => {
    res.send(req.idea)
})

ideasRouter.put('/:ideaId', checkMillionDollarIdea, (req,res,next) => {
    let updatedIdea = updateInstanceInDatabase('ideas', req.body)
    res.send(updatedIdea)
})
ideasRouter.delete('/:ideaId', (req,res,next)=> {
    let deletedIdea = deleteFromDatabasebyId('ideas', req.idea.id)
    res.send(deletedIdea)
})
