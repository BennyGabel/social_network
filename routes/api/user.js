/*   ./routes/api/user.js   */

const router = require('express').Router();


const {
  getallUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend
} = require('../../controller/user')

//  /api/users
router
  .route('/')
  .get(getallUsers)
  .post(createUser);

// /api/users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

router
  .route('/:id/friends/:friendId')
  .post(addFriend)

module.exports = router;
