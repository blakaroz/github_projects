const express = require('express')

minionsRouter = express.Router()

const {
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
  deleteAllFromDatabase,
} = require('./db')

minionsRouter.param('minionId', (req,res,next,id)=> {
    const minion = getFromDatabaseById('minions',id)
    if(minion){
        req.minion = minion
        next()
    } else {
        res.status(404).send('not found')
    }
})

minionsRouter.get('/',(req,res,next) => {
    res.send(getAllFromDatabase('minions'))
})
minionsRouter.post('/',(req,res,next) => {
    const {name,title, weaknesses, salary} = req.body
    if(!name || !title || !weaknesses || !salary) {
        return res.status(400).send('All fields (name,title,weaknesses,salary) are required.')
    }
    const newMinions = addToDatabase('minions', req.body)
    res.send(newMinions)
})
minionsRouter.get("/:minionId", (req, res, next) => {
  res.send(req.minion);
});

minionsRouter.put('/:minionId', (req,res,next)=> {
    let updatedMinion = updateInstanceInDatabase('minions', req.body)
    res.send(updatedMinion)
})

minionsRouter.delete('/:minionId', (req,res,next) => {
    let deletedMinion = deleteFromDatabasebyId('minions', req.minion.id)
    if(deletedMinion) {
        res.status(204).send('done')

    } else {
        res.status(500)
    }
    
})


module.exports = minionsRouter