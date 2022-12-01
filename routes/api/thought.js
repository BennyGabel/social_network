/*   ./routes/api/thought.js   */

const router = require('express').Router();
const {
    addThought, 
    getThoughtById, 
    getAllThoughts, 
    updateThought,
    deleteThought,
    addReaction,
    delReaction
} = require('../../controller/thought');





//
router
  .route('/')
  .get(getAllThoughts)
  .post(addThought);

router
  .route('/:id')  
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

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
  .delete(delReaction)










module.exports = router;