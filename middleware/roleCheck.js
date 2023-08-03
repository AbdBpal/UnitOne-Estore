module.exports = {
    async isAdmin(user){ return user.role=="admin" },
    async isStoreManager(user){ return user.role=="store manager" },
    async isAdManager(user){ return user.role=="advertisement manager" },
    async isUser(user){ return user.role=="user" },
}