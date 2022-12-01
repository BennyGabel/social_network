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
      console.log('delete friend')
      User.findOneAndUpdate({ _id: params.id }, {$pull: {friends:params.friendId}}, {new:true})
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.json(err));
    }
};



/*
 addReaction({ params, body }, res) {
        Thought.findOneAndUpdate(
          { _id: params.thoughtId },
          { $push: { reactions: body } },
          { new: true, runValidators: true }
        )
          .then(dbReactionData => {
            if (!dbReactionData) {
              res.status(404).json({ message: 'No reaction found with this id!' });
              return;
            }
            res.json(dbReactionData);
          })
          .catch(err => res.json(err));
      },
*/


module.exports = userController