const authorize = (req,res,next) => {
    const {user} = req.query
    //tutaj dla przykładu daliśmy john ale moze 
    // byc tez po prostu czy gl istnieje (!user)
    if(user === 'john') {
        req.user = {user: 'john', id: 3}
        next()
    } else {
        res.status(401).send('unauthorized')
    }
}
module.exports = authorize