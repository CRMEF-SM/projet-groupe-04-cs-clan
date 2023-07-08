const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'projet'
});

function updateUser(userId, updatedUser) {
    const query = `UPDATE apprenant SET ? WHERE id = ?`;
    connection.query(query, [updatedUser, userId], (error, results) => {
        if (error) throw error;
        console.log('User updated successfully');
    });
}

module.exports = updateUser;
