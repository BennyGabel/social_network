/*   ./controller/user.js   */

const { User, Thought } = require('../models');

const userController = {
    getallUsers (req, res) {
        User.find().then(dbUserData => {
            // console.log(dbUserData);
            if (!dbUserData) {
              res.status(404).json({ message: 'No users found!' });
              return;
            }
            res.json(dbUserData);
          })
          .catch(err => res.json(err))
    },

    getUserById({ params }, res) {
      User.findOne({ _id: params.id })
      // Didn't do anything with Thoughts yet
      .then(dbPizzaData => res.json(dbPizzaData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      })

    },

    createUser({ body }, res) {
        User.create(body)
          .then(dbUserData => res.json(dbUserData))
          .catch(err => res.json(err));
    },


}

module.exports = userController