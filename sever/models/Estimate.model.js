import mongoose from 'mongoose';

const estimateSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    projectType: { type: String, required: true },
    budget: { type: String, required: true },
    tileWork: { type: Boolean, required: true },
    tileType: { type: String },
    areaToBeTiled: { type: Number },
    woodWork: { type: Boolean, required: true },
    numDoors: { type: Number },
    numWindows: { type: Number },
    painting: { type: Boolean, required: true },
    paintingType: { type: String },
    areaToBePainted: { type: Number },
    masonryWork: { type: Boolean, required: true },
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