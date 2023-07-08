function getUserLocal(userId) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.find(user => user.id === userId);
}

module.exports = getUserLocal;
