const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'projet'
});

function getSession(sessionId, callback) {
    const query = `SELECT * FROM session WHERE id = ?`;
    connection.query(query, [sessionId], (error, results) => {
        if (error) throw error;
        callback(results[0]);
    });
}

module.exports = getSession;
