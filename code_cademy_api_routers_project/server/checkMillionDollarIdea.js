const checkMillionDollarIdea = (req,res,next) => {
    const { weeklyRevenue, numWeeks } = req.body;
    const totalMoney = Number(weeklyRevenue) * Number(numWeeks)
    if (!weeklyRevenue || !numWeeks || totalMoney < 1000000) {
    res.status(400).send("Idea is not worth it! Gime me idea worth in total more than 1 mln dollars.");
    } else {
        next()
    }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
