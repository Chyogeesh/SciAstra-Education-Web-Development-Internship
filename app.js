const express = require('express');
const app = express();
const blogRoutes = require('./routes/blogRoutes');
const courseRoutes = require('./routes/courseRoutes');

app.use(express.json());

app.use('/api/blog', blogRoutes);
app.use('/api/courses', courseRoutes);

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
