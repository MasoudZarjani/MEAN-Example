// Models
const Post = require('../models/post');

module.exports = class Controller {
    /**
     * Controller constructor
     */
    constructor() {
        // List models reference to controller.model
        this.model = { Post }
    }
}