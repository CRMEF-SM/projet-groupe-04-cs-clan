const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'projet'
});

function getUser(userId, callback) {
    const query = `SELECT * FROM apprenant WHERE id = ?`;
    connection.query(query, [userId], (error, results) => {
        if (error) throw error;
        callback(results[0]);
    });
}

module.exports = getUser;
