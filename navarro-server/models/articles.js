const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    name: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    category: { type: String, enum: ['technology', 'lifestyle', 'education', 'business', 'health'], default: 'technology' },
    tags: [String],
    views: { type: Number, default: 0 },
    isPublished: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Article', articleSchema);