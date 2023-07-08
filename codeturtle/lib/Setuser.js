const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'projet'
});

function setUser(user) {
    const query = `INSERT INTO apprenant (Nom complet, niveau, activité, date inscription, mail, password, classe, cours consulté) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [user.fullName, user.niveau, user.activité, user.dateInscription, user.mail, user.password, user.classe, user.coursConsulté];

    connection.query(query, values, (error, results) => {
        if (error) throw error;
        console.log('User added successfully');
    });
}

module.exports = setUser;
