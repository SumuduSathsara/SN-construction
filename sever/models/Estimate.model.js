import mongoose from 'mongoose';

const estimateSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    projectType: { type: String, required: true },
    budget: { type: String, required: true },
    tileWork: { type: String, required: true },
    tileType: { type: String },
    areaToBeTiled: { type: Number },
    woodWork: { type: String, required: true },
    numDoors: { type: Number },
    numWindows: { type: Number },
    painting: { type: String, required: true },
    paintingType: { type: String },
    areaToBePainted: { type: Number },
    masonryWork: { type: String,  required: true },
    masonryType: { type: String },
    areaToBeMasonry: { type: Number },
    totalTileCost: { type: Number },
    totalWoodWorkCost: { type: Number },
    totalPaintCost: { type: Number },
    totalMasonryCost: { type: Number },
    totalCost: { type: Number },
});



const Estimate = mongoose.model('Estimate', estimateSchema);

export default Estimate;