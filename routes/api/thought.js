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
  

router
  .route('/:thoughtId/reaction')
  .post(addReaction)
  .delete(delReaction)

  
module.exports = router;