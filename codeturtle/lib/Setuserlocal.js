function setUserLocal(user) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    console.log('User added successfully');
}

module.exports = setUserLocal;
