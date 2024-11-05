const db = require('../db/dbConfig');

exports.getAllPosts = (req, res) => {
    db.query('SELECT * FROM blog_posts WHERE publish_date <= NOW()', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

exports.createPost = (req, res) => {
    const { title, content, publish_date } = req.body;
    const query = 'INSERT INTO blog_posts (title, content, publish_date) VALUES (?, ?, ?)';
    db.query(query, [title, content, publish_date], (err, results) => {
        if (err) throw err;
        res.status(201).json({ message: 'Blog post created' });
    });
};
