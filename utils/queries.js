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

module.exports = {
  getAllUsers
};
