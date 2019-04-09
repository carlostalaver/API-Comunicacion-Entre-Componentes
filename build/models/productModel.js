"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    'id': Number,
    'productCode': String,
    'productName': String,
    'releaseDate': String,
    'description': String,
    'price': Number,
    'starRating': Number,
    'imageUrl': String,
    'category': String,
    'tags': [String]
}, {
    timestamps: true
});
exports.default = mongoose_1.model('Product', ProductSchema);
