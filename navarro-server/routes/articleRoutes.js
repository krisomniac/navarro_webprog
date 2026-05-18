// routes/articleRoutes.js
const express = require('express');
const router = express.Router();

// Sample data for now
const articles = [
    { id: 1, title: 'Getting Started with React', content: 'React is a JavaScript library...', author: 'John Doe' },
    { id: 2, title: 'MongoDB Basics', content: 'MongoDB is a NoSQL database...', author: 'Jane Smith' }
];

// Get all articles
router.get('/', (req, res) => {
    res.json({ success: true, data: articles });
});

// Get single article
router.get('/:id', (req, res) => {
    const article = articles.find(a => a.id === parseInt(req.params.id));
    if (!article) {
        return res.status(404).json({ success: false, message: 'Article not found' });
    }
    res.json({ success: true, data: article });
});

// Create article
router.post('/', (req, res) => {
    const newArticle = { id: articles.length + 1, ...req.body };
    articles.push(newArticle);
    res.status(201).json({ success: true, data: newArticle });
});

// Update article
router.put('/:id', (req, res) => {
    const index = articles.findIndex(a => a.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).json({ success: false, message: 'Article not found' });
    }
    articles[index] = { ...articles[index], ...req.body };
    res.json({ success: true, data: articles[index] });
});

// Delete article
router.delete('/:id', (req, res) => {
    const index = articles.findIndex(a => a.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).json({ success: false, message: 'Article not found' });
    }
    articles.splice(index, 1);
    res.json({ success: true, message: 'Article deleted successfully' });
});

module.exports = router;