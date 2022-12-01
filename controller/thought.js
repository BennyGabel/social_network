/*   ./controller/thought.js   */

const { User, Thought } = require('../models');

const thoughtController = {
  addThought({ params, body }, res) {
    console.log(params);
    Thought.create(body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          // { _id: params.thoughtId },
          { username: body.username },
          { $push: { thoughts: _id } },
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

  //*
  getAllThoughts(req, res) {
    Thought.find().then(dbThoughtData => {
      // console.log(dbUserData);
      if (!dbThoughtData) {
        res.status(404).json({ message: 'No thoughts found!' });
        return;
      }
      res.json(dbThoughtData);
    })
      .catch(err => res.json(err))
  },

  getThoughtById({ params }, res) {
    Thought.findOne({ _id: params.id })
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      })
  },

  updateThought({ params, body }, res) {
    Thought.findOneAndUpdate({ _id: params.id }, body, {
      new: true,
      runValidators: true
    })
      .then(dbThoughtData => {
        if (!dbThoughtData) {
          res.status(404).json({ message: 'No Thought found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
  },

  /*
  deleteThought({ params }, res) {
    Thought.findOneAndDelete({ _id: params.id })
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => res.json(err));
  },
*/

/*
  // .then(User.findOneAndUpdate({ thought: params.id }, {$pull: {thought:params.id}}, {new:true}))
  deleteThought({ params }, res) {
    Thought.findOneAndDelete({ _id: params.id })
      .then(dbThoughtData => res.json(dbThoughtData))
      .then(User.findOneAndUpdate({ thought: params.id }, {$pull: {thought:params.id}}, {new:true}))
      .catch(err => res.json(err));
  },  
*/

// .then(dbThoughtData => User.findOneAndUpdate({ id: params.userid }, {$pull: {thought:params.id}}, {new:true}))
deleteThought({ params }, res) {
  Thought.findOneAndDelete({ _id: params.id })
    .then(dbThoughtData => User.findOneAndUpdate({ id: params.userid }, {$pull: {thoughts:params.id}}, {new:true}))
    .then(dbData => res.json(dbData))
    .catch(err => res.json(err));
 },


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



  // 20.40
  delReaction({ params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $pull: { reactions: body } },
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

  // 20.40

  //
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
