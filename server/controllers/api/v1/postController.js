const Controller = require('../../controller');
const Post = require('../../../models/post');

module.exports = new class PostController extends Controller {
    /**
     * It has a list of the database.
     * @param {text, page, limit, sort} req 
     * @param {json} res 
     * @param {func} next 
     */
    getPosts(req, res) {
        Post.find().exec((err, posts) => {
            if (err) {
                return res.json({
                    'success': false,
                    'message': 'Some Error'
                });
            }
            return res.json({
                'success': true,
                'message': 'posts fetched successfully',
                posts,
            });
        });
    }

    /**
     * Get only one record from database
     * @param {id} req 
     * @param {json} res 
     * @param {func} next 
     */
    getPost(req, res) {
        Post.findOne({
            _id: req.params.id
        }).exec((err, post) => {
            if (err) {
                return res.json({
                    'success': false,
                    'message': 'Some Error'
                });
            } else {
                return res.json({
                    'success': true,
                    'message': 'Post fetched by id successfully',
                    post
                });
            }
        })
    }

    /**
     * Add a record to the database.
     * @param {title, summary, text, imagePath, labels} req 
     * @param {json} res 
     */
    addPost(req, res) {
        const newPost = new Post(req.body);
        newPost.save((err, post) => {
            if (err) {
                return res.json({
                    'success': false,
                    'message': 'Some Error'
                });
            }
            return res.json({
                'success': true,
                'message': 'post added successfully',
                post
            });
        })
    }

    /**
     * Update information in a record.
     * @param {title, summary, text, imagePath, labels} req 
     * @param {json} res 
     */
    updatePost(req, res) {
        this.model.Post.findOneAndUpdate({
            _id: req.body.id
        }, 
        req.body, {
            new: true,
            'updated_at': Date.now
        }, (err, post) => {
            if (err) {
                return res.json({
                    'success': false,
                    'message': 'Some Error',
                    'error': err
                });
            }
            return res.json({
                'success': true,
                'message': 'Updated successfully',
                post
            });
        })
    }

    /**
     * Delete a record
     * @param {refs} req 
     * @param {json} res 
     */
    deletePost(req, res) {
        Post.findByIdAndRemove(req.params.id, (err, post) => {
            if (err) {
                return res.json({
                    'success': false,
                    'message': 'Some Error'
                });
            }
            return res.json({
                'success': true,
                'message': post.postText + ' deleted successfully'
            });
        })
    }
}