const connection = require('../db/dbconnection');

const userModel = {
    findByEmail: (email, callback) => {
        connection.query("SELECT * FROM users WHERE email = ?", [email], callback);
    },

    createUser: (userData, callback) => {
        connection.query("INSERT INTO users SET ?", userData, callback);
        
        
    },


    // code for fetching all users
    getUser: (req, callback) => {
          const sql = "SELECT * FROM users";
        connection.query(sql, (err, result) => {
            if (err) {
                return callback(err);
            }
            callback(null, result);
        });
    },

//  UPDATE USER (THIS WAS MISSING)
  updateUser: (id, userData, callback) => {
    connection.query(
      "UPDATE users SET ? WHERE id = ?",
      [userData, id],
      (err, result) => {
        if (err) {
          return callback(err);
        }
        callback(null, result);
      }
    );
  }



};



module.exports = userModel;
