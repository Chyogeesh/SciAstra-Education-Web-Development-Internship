const db = require('../db/dbConfig');

exports.getDiscountedCourses = (req, res) => {
    db.query('SELECT * FROM courses WHERE discount > 0', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};
