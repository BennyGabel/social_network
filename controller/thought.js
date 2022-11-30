/*   ./controller/thought.js   */

const { User, Thought } = require('../models');

const thoughtController = {
    addThought({ params, body }, res) {
        console.log(params);
        Thought.create(body)
          .then(({ _id }) => {
            return Pizza.findOneAndUpdate(
              { _id: params.pizzaId },
              { $push: { comments: _id } },
              { new: true }
            );
          })
          .then(dbThoughtData => {
            console.log(dbThoughtData);
            if (!dbThoughtData) {
              res.status(404).json({ message: 'No pizza found with this id!' });
              return;
            }
            res.json(dbThoughtData);
          })
          .catch(err => res.json(err));
      },
    
    // getallUsers (req, res) {
    //     User.find().then(dbUserData => {
    //         // console.log(dbUserData);
    //         if (!dbUserData) {
    //           res.status(404).json({ message: 'No users found!' });
    //           return;
    //         }
    //         res.json(dbUserData);
    //       })
    //       .catch(err => res.json(err))
    // },

    // getUserById({ params }, res) {
    //   User.findOne({ _id: params.id })
    //   // Didn't do anything with Thoughts yet
    //   .then(dbPizzaData => res.json(dbPizzaData))
    //   .catch(err => {
    //     console.log(err);
    //     res.sendStatus(400);
    //   })
    // },

    // createUser({ body }, res) {
    //     User.create(body)
    //       .then(dbUserData => res.json(dbUserData))
    //       .catch(err => res.json(err));
    // },

    // updateUser({ params, body }, res) {
    //   User.findOneAndUpdate({ _id: params.id }, body, {
    //     new: true,
    //     runValidators: true
    //   })
    //     .then(dbUserData => {
    //       if (!dbUserData) {
    //         res.status(404).json({ message: 'No user found with this id!' });
    //         return;
    //       }
    //       res.json(dbUserData);
    //     })
    //     .catch(err => res.json(err));
    // },
  
    // deleteUser({ params }, res) {
    //   User.findOneAndDelete({ _id: params.id })
    //     .then(dbUserData => res.json(dbUserData))
    //     .catch(err => res.json(err));
    // }
};


module.exports = thoughtController;
