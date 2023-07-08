const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'projet'
});

function getProfData(callback) {
    const query = `SELECT * FROM prof`;
    connection.query(query, (error, results) => {
        if (error) throw error;
        callback(results);
    });
}

module.exports = getProfData;
