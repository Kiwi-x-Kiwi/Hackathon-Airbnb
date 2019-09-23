const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const homeSchema = new Schema({
    name: String,
    description: String,
    location: { type: { type: String }, coordinates: [Number] }
});
homeSchema.index({ location: '2dsphere' });