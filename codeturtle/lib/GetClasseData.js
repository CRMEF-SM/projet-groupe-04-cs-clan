const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'projet'
});

function getClasseData(callback) {
    const query = `SELECT * FROM classe`;
    connection.query(query, (error, results) => {
        if (error) throw error;
        callback(results);
    });
}

module.exports = getClasseData;
