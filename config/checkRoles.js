const bcrypt = require('bcryptjs');
const Users = require('../users/users-model')


module.exports = role => {
   
    return function(req, res, next) {
      if (req.decodedToken.roles && req.decodedToken.roles.includes(role)) {
        next();
      }
      else {
        res.status(403).json({you: "can't touch this"})
      }
    }
    
  };
  