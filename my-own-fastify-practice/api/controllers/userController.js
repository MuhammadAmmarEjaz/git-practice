const { getUsers } = require('../adapters/userAdapter');

const getUsersCtrl = async (req, res) => {
    try {
        const { page } = req.query;
        const users = await getUsers({ page });
        res.send(users);
    }
    catch (err) {
        throw err;
    }
}

module.exports = {
    getUsersCtrl
}