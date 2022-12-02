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

router
  .route('/')
  .get(getAllThoughts)
  .post(addThought);

router
  .route('/:id')  
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);
  // Change the <<deleteThought>> route to ONLY require thought id
  // .delete(deleteThought);     Move to route below, since it will require to pass userid to be removed from User's thoughts


router
  .route('/:thoughtId/reaction')
  .post(addReaction)
  .delete(delReaction)

module.exports = router;