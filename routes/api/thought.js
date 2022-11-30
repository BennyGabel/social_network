/*   ./routes/api/thought.js   */

const router = require('express').Router();
const {
    addThought, addReaction,
} = require('../../controller/thought');


//
router
  .route('/')
  .post(addThought)
//   .post(createUser);

/*
// /api/users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

//
*/

router
  .route('/:thoughtId/reaction')
  .post(addReaction)










module.exports = router;