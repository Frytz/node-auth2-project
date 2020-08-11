const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const secrets = require('./secrets')


module.exports = (req, res, next) => {
try {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token)

  if (token) {
    jwt.verify(token, secrets.jwt_secret, (err, decodedToken) => {
      
      if (err) {
        throw new Error(err)
      } else {
         
        req.decodedToken = decodedToken;
        console.log(decodedToken.roles)
        next();
      } 
    })
  } else {
    throw new Error("bad auth");
  }

} catch (err) {
  res.status(401).json({message: "bad auth"})
}



};
