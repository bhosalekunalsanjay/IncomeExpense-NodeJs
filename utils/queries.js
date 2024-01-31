const db = require('./db');

function getAllUsers(callback) {
  const query = 'SELECT * FROM users';
  db.query(query, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
}

/**
 * Parameterized query
 * @param {emailid, password} params
 * @param {function to be executed after query} callback 
 */
function getUserByEmailAndPassword(params, callback) {
  const query = 'SELECT * FROM users WHERE emailid = ? AND password = ?';
  const values = [params.emailid, params.password];
  console.log('params: ', JSON.stringify(params));

  db.query(query, values, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
}


module.exports = {
  getAllUsers, getUserByEmailAndPassword
};
