const express = require('express');
const router = express.Router();

const postController = require('./../../controllers/api/v1/postController');

router.route('/post')
    .get(postController.getPosts)
    .post(postController.addPost)
    .put(postController.updatePost);
router.route('/post/:id')
    .get(postController.getPost)
    .delete(postController.deletePost);


module.exports = router;