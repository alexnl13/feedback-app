module.exports = (req, res, next) => {
    if(!req.user) {
        return res.status(401).send({error: 'Must be logged in to make a payment'});
    }

    next();
};