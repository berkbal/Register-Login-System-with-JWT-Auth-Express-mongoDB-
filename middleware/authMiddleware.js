const jwt = require("jsonwebtoken");

const requireAuthJwt = (req,res,next) => {
    const token = req.cookies.jwt;

    // check json web token exists & is verified

    if(token){
        jwt.verify(token, 'TOP SECRET', (err, decodedToken) => {
            if(err){
                console.log(err.message);
                res.redirect('/login')
            } else {
                console.log(decodedToken);
                next();
            }
        }) // TOP SECRET jwt sign should not be published. Change it.
    }
    else {
        res.redirect('/login');

    }
}
module.exports = {requireAuthJwt};