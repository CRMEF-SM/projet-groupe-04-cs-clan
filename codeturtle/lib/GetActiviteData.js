const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'projet'
});

function getActiviteData(callback) {
    const query = `SELECT * FROM activité`;
    connection.query(query, (error, results) => {
        if (error) throw error;
        callback(results);
    });
}

module.exports = getActiviteData;
