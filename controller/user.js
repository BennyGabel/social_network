const { user, thought } = require('../models');

const userController = {
    allUsers (req, res) {
        user.find().then(dbUserData => {
            // console.log(dbUserData);
            if (!dbUserData) {
              res.status(404).json({ message: 'No users found!' });
              return;
            }
            res.json(dbUserData);
          })
          .catch(err => res.json(err))
    },

    createUser({ body }, res) {
        user.create(body)
          .then(dbUserData => res.json(dbUserData))
          .catch(err => res.json(err));
    },

}

module.exports = userController