const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'projet'
});

function authenticateUser(email, password, callback) {
    const query = `SELECT * FROM apprenant WHERE mail = ? AND password = ?`;
    connection.query(query, [email, password], (error, results) => {
        if (error) throw error;
        callback(results.length > 0);
    });
}

module.exports = authenticateUser;
