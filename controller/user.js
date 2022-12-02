/*   ./controller/user.js   */

const { User, Thought } = require('../models');

const userController = {
    getallUsers (req, res) {
        User.find().then(dbUserData => {
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
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      })
    },

    createUser({ body }, res) {
      console.log('Create Users body')
        User.create(body)
          .then(dbUserData => res.json(dbUserData))
          .catch(err => res.json(err));
    },

    updateUser({ params, body }, res) {
      User.findOneAndUpdate({ _id: params.id }, body, {
        new: true,
        runValidators: true
      })
        .then(dbUserData => {
          if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
          }
          res.json(dbUserData);
        })
        .catch(err => res.json(err));
    },
  
    deleteUser({ params }, res) {
      User.findOneAndDelete({ _id: params.id })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.json(err));
    },

    addFriend({ params }, res) {
      User.findOneAndUpdate({ _id: params.id }, {$push: {friends:params.friendId}}, {new:true})
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.json(err));
    },


    // not working - HAVE to CHECK IT
    deleteFriend({ params }, res) {
      // User.findOneAndDelete({ _id: params.id }, {$push: {friends:params.friendId}}, {new:true})
      User.findOneAndUpdate({ _id: params.id }, {$pull: {friends:params.friendId}}, {new:true})
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.json(err));
    }
};

module.exports = userController