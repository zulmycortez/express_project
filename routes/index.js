const express = require('express')
const GetBlogs = require('./controller/getBlogs')
const PostBlog = require('./controller/postBlog')

const router = express.Router()

router.post('/blog/:id', GetBlogs)
router.get('/blog/post', PostBlog)

module.exports = router