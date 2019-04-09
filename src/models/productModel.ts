import {Schema, model } from 'mongoose';

const ProductSchema = new Schema({
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
},
{
  timestamps: true
})

export default model('Product', ProductSchema);